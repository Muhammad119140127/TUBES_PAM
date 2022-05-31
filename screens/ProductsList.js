import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Product } from '../components/Product.js';


export function ProductsList ({navigation}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
     const response = await fetch('https://dummyjson.com/products');
     const json = await response.json();
     setProducts(json.products);
   } catch (error) {
     console.error(error);
   } finally {
     
   }
 }
  
    
  useEffect(() => {
    getProducts();
  },[]);
  

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#efefef',
  },
  productsListContainer: {
    backgroundColor: '#efefef',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
