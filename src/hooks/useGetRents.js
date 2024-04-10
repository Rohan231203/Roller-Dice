import  { useEffect, useState } from 'react'
import useitemStore from '../store/itemsStore';
import useAuthStore from '../store/authStore';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import toast from 'react-hot-toast';
import useUserProfileStore from '../store/userProfileStore';


export default function useGetRents() {
const[isLoading,setIsLoading]=useState(true);
  const{items,setRents}=useitemStore();
  const { setUserProfile } = useUserProfileStore();
  const authUser=useAuthStore((state)=>state.user);


  useEffect(()=>{
    const fetchRents=async()=>{
        setIsLoading(true);
        const rentRef=collection(firestore,'rentals');
        try{
            const snapshot=await getDocs(rentRef);
            const itemsRent=[];
            for(const doc of snapshot.docs){
                const data=await doc.data();
                const item={id:doc.id,...data}
                itemsRent.push(item);
            }
            setRents(itemsRent);
        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setIsLoading(false);
        }
    }
    if(authUser) fetchRents();

  },[authUser,setRents,setUserProfile])
  
  return {isLoading,items}
}
