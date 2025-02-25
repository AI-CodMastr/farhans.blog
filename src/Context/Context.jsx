import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Loading from '../components/Loading/Loading';

const BlogContext = createContext();
const Context = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(false)
    const [loading, setLoading] = useState(true)

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if(user) {
            setCurrentUser(user);
          } else {
            setCurrentUser(null);
          }
          setLoading(false)
      })
      return () => unsubscribe();
  },[currentUser]);  

    return <BlogContext.Provider value={{ currentUser , setCurrentUser}}>
    {loading ? <Loading /> : children}
    </BlogContext.Provider>
}

export default Context

export const Blog = () => useContext(BlogContext)