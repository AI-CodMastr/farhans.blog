import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const BlogContext = createContext();
const Context = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(false)

  

    return <BlogContext.Provider value={{ currentUser , setCurrentUser}}>
    {children}
    </BlogContext.Provider>
}

export default Context

export const Blog = () => useContext(BlogContext)