import firebase from 'firebase'
import fbConfig from './firebaseConfig'

const firebaseapp = firebase.initializeApp(fbConfig);

export default firebaseapp