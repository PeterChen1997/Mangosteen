import axios from 'axios'

export function ServerSocket (url) {
  console.log(url)
}

export const Request = {
  get: (url, params, callback) => {
    axios.get(url, {
      params
    })
      .then(res => callback(res))
      .catch(err => callback(err))
  }
} 