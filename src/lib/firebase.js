import firebase from '../database/firebase'

export const signInWithPopup = () => {
  const provider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(provider)
}

export const signOut = () => {
  return firebase.auth().signOut()
}
