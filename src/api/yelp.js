
import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer IGI7KiCzumXE-6kVzUyZ6EQ3gngr2Xxi2pDQQbyp6t5qYb_EF1kSlnXLc5rlKEYGQY1XAy1jZ9Hl6Cr_kEiGaD34ob1axY8dmVlppPTWkC9Tn591B6uxtA_SUhHkX3Yx'
  }
})

