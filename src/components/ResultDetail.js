import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 5,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
  }
})

export default ResultDetail