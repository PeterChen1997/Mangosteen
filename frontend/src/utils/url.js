const baseUrl = 'http://localhost:7001'

let URL_COLLECTION = {
  DOWNLOAD_SERVICE: '/services/download'
}

for (let url in URL_COLLECTION) {
  URL_COLLECTION[url] = baseUrl + URL_COLLECTION[url]
}

export default URL_COLLECTION