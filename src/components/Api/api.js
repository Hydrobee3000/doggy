import * as axios from 'axios'

const instance = axios.create({
  baseURL: `https://dog.ceo/api/`,
  // headers: { Accept: 'application/json' },
})

export const dogAPI = {
  //get all dog breeds
  getAllBreeds() {
    return instance.get('breeds/list/all')
  },
  //get url of all images of the selected breed
  getBreedImages(breed) {
    return instance.get(`/breed/${breed}/images`)
  },
}
