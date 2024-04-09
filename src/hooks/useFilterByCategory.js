// import React from 'react'

import { useState } from "react";
import toast from 'react-hot-toast';
import { firestore } from "../firebase/firebase";
import { collection,  getDocs, where } from "firebase/firestore";
import { query } from "firebase/database";


export default function useFilterByCategory() {
    const [isLoading, setIsLoading] = useState(false);
	const [category, setCategory] = useState(null);

    const sortByCategory =async(category)=>{
        setIsLoading(true);
        setCategory(null);


    try{
        const q=query(collection(firestore,'items'),where("category",'==',category));

        const snapshot=await getDocs(q);
        if (snapshot.empty) return 
        toast.error("No Items Found");

        snapshot.forEach((doc)=>{
            setCategory(doc.data());
        })
    }
    
    catch(error){
        toast.error(error.message)
    }
    finally{
        setIsLoading(false);
    }
    };

  return {isLoading,sortByCategory,category,setCategory}
}
