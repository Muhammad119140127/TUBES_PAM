import React, {useEffect, useState} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView,
  StyleSheet
  } from 'react-native';

export function ProductDetails({route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});
  


  const getProduct = async (id) => {
    try {
     const response = await fetch(`https://dummyjson.com/products/${id}`);
     const json = await response.json();
     setProduct(json);
   } catch (error) {
     console.error(error);
   } finally {
     
   }
 }
  
  useEffect(() => {
    getProduct(productId);
  },[]);
  
  
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={product.thumbnail}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '# ',
    marginBottom: 16,
  },
});
