import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAK34-fYwo6Qadv_qkYyXfxMrscPVGrudo',
  authDomain: 'linkingpark-c0281.firebaseapp.com',
  databaseURL: 'https://linkingpark-c0281.firebaseio.com',
  projectId: 'linkingpark-c0281',
  storageBucket: 'linkingpark-c0281.appspot.com',
  messagingSenderId: '762980488429'
}

firebase.initializeApp(config)

export default firebase