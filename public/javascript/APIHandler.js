class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL)
      .then(dataRetrieved => console.log(dataRetrieved))
      .catch(err => console.log("The error retrieving all characters is: ", err));
  };

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/${id}`)
    .then(dataRetrieved => console.log(dataRetrieved))
    .catch(err => console.log("The error retrieving one character is: ", err));
  }

  createOneRegister (characterInfo) {
    axios.post(`${this.BASE_URL}`, characterInfo)
    .then(dataPosted => console.log(dataPosted))
    .catch(err => console.log("The error creating one character is: ", err));
  }

  updateOneRegister (id, updatedCharacterInfo) {
    axios.patch(`${this.BASE_URL}/${id}`, updatedCharacterInfo)
    .then(dataPatched => console.log(dataPatched))
    .catch(err => console.log("The error updating one character is: ", err));
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/${id}`)
    .then(dataDelete => console.log("The character has been deleted successfully!"))
    .catch(err => console.log("The error deleting one character is: ", err));
  }
}
