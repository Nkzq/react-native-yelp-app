import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

const useResults = () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async searchTerm => {
    setErrorMessage('')
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'paris'
        }
      })
      setResults(res.data.businesses)
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('')
  }, [])

  return [
    results,
    errorMessage,
    searchApi,
  ]
}

export default useResults