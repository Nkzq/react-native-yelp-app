import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import useResults from '../hooks/useResults'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, errorMessage, searchApi] = useResults()

  const filterResultsByPrice = price => results.filter(result => result.price === price)

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ?
        <Text>{errorMessage}</Text>
        : null
      }
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('€')}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice('€€')}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('€€€')}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

SearchScreen.navigationOptions = () => {
  return {
    title: 'Yelp Search'
  }
}


export default SearchScreen