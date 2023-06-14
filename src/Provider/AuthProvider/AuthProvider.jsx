import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
// get and set token

if(currentUser){
  axios.post('https://summer-camp-server-mtofayelahmed.vercel.app/jwt', {email:currentUser.email})
  .then(data => {
 
    localStorage.setItem('access-token', data.data.token)
    console.log(data.data.token)
    setLoading(false)
  })
}
else{
  localStorage.removeItem('access-token')
}
      console.log('current user', currentUser)
     
    });
    return ()=>{
      unsubscribe()
    }
  }, []);

  const updatedUserProfile = (name, photo)=> {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
    
    
  }


  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    googleSignIn,
    logout,
     updatedUserProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
