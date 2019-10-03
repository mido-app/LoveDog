import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './firebase.config'

if(firebase.apps.length === 0) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export {
  firestore
}
