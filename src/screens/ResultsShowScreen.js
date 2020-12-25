import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { FontAwesome  } from '@expo/vector-icons'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {

  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  const getResult = async id => {
    const res = await yelp.get(`/${id}`)
    setResult(res.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <View style={styles.cover}>
        <Image style={styles.coverImage} source={{ uri: result.image_url }} />
        <View style={styles.overlay} />
        <Text style={styles.title}>{result.name}</Text>
        { result.hours && <View style={{
          ...styles.available,
          backgroundColor: result.hours.is_open_now ? 'green' : 'red',
        }} /> }
      </View>
      <View style={styles.address}>
        {result.location.display_address.map(address => <Text style={styles.addressText}>{address}</Text>)}
      </View>
      <View style={styles.infos}>
        <View style={styles.infosCol}>
          <FontAwesome name="phone" style={styles.infosIcon} />
          <Text>{result.phone}</Text>
        </View>
        <View style={styles.infosCol}>
          <FontAwesome name="star" style={styles.infosIcon} />
          <Text>{result.rating}</Text>
        </View>
        <View style={styles.infosCol}>
          <FontAwesome name="comments" style={styles.infosIcon} />
          <Text>{result.review_count}</Text>
        </View>
      </View>
      <FlatList
        data={result.photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={photo => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  cover: {
    height: 200,
  },
  coverImage: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
     backgroundColor: 'rgba(0, 0, 0, .3)'
  },
  available: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 15,
    bottom: 20,
    right: 10,
    zIndex: 100,
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    width: '90%',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: '#fff',
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    fontSize: 18,
  },
  infosCol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infosIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginHorizontal: 15,
  },
  address: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
  addressText: {
    fontSize: 26,
    fontWeight: 'bold',
  }
})

ResultsShowScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title')
  }
}

export default ResultsShowScreen