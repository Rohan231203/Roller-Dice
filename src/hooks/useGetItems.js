import { useEffect, useState } from "react"
import useitemStore from "../store/itemsStore";
import useAuthStore from "../store/authStore";
import useUserProfileStore from "../store/userProfileStore";
import toast  from 'react-hot-toast';

import { collection, getDocs} from "firebase/firestore";
import { firestore } from "../firebase/firebase";



export default function useGetItems() {
  const [isLoading, setIsLoading] = useState(true);
  // const [items, setItems] = useitemStore();
  const authUser = useAuthStore((state) => state.user)
  const { setUSerProfile } = useUserProfileStore();
  useEffect(() => {
      const fetchItems = async () => {
      const itemCollectionRef = collection(firestore, 'items');
      try{
        const Snapshot = await getDocs(itemCollectionRef);
      const itemsPost=[];
      Snapshot.forEach((doc)=>{
        itemsPost.push({id:doc.id,...doc.data()})
      })
      itemsPost.sort((a, b) => b.postedAt - a.postedAt);
      setItems(itemsPost);
      }
      catch(error){
        toast.error(error.message);
      }
      finally{
        setIsLoading(false);
      }

      

    }
  })
  return (
    <div>

    </div>
  )
}
