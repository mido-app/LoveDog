import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import config from './firebase.config'

if(firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()

export {
  firebase,
  auth,
  firestore,
  storage
}
