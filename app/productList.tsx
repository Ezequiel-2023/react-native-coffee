
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import api from './API/api';



type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/products')
      .then((response: { data: Product[] }) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error: unknown) => {
        console.error('Error al obtener productos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.imageContainer}>
              <Image
                source={item.image}
                style={{ width: 200, height: 100 }}
                contentFit="cover"
              />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Precio: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 200,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  }
});
