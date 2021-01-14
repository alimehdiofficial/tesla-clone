import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCjr4KVbmLb5K1_dkC-XAd1C_Ns3HjHI0o',
  authDomain: 'tesla-clone-57a26.firebaseapp.com',
  projectId: 'tesla-clone-57a26',
  storageBucket: 'tesla-clone-57a26.appspot.com',
  messagingSenderId: '159724962200',
  appId: '1:159724962200:web:4d0ac1ae1cbc75a43e2bed',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
