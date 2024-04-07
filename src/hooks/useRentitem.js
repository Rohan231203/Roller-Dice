// for useer will det kab se kab tak aur kya kind of a reques mar dega  aur koi intered hai toh de dega
import toast  from 'react-hot-toast';
import useAuthStore from '../store/authStore';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Timestamp, addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import useUserProfileStore from '../store/userProfileStore';
import useRentStore from '../store/rentStore';


export default function useRentitem() {
    const userProfile = useUserProfileStore((state) => state.userProfile);
    const authUser = useAuthStore((state) => state.user);
	const createRent = useRentStore((state) => state.createRent);
	const addRent = useUserProfileStore((state) => state.addRent);


	const [isLoading, setIsLoading] = useState(false);
    const { pathname } = useLocation();
    const handleRentItem=async(selectedFile,description,to,from)=>{
        if (isLoading) return;
        if (!selectedFile) throw new Error("Please select an image");
		setIsLoading(true);
		const newRent = {
			createdBy:authUser.uid,
            description:description,
            from :Timestamp.fromDate(new Date(from)),
            to :Timestamp.toDate(new Date(to)),
		};
        try{
            const postRentRef = await addDoc(collection(firestore, "rentals"), newRent);
            const userDocRef = doc(firestore, "users", authUser.uid);
            const imageRef = ref(storage, `rentals/${postRentRef.id}`);
            await updateDoc(userDocRef, { rentItem: arrayUnion(postRentRef.id) });
            await uploadString(imageRef, selectedFile, "data_url");
            const downloadURL = await getDownloadURL(imageRef);
			newRent.imageURL = downloadURL;
            if (userProfile.uid === authUser.uid) createRent({ ...newRent, id: postRentRef.id });

			if (pathname !== "/" && userProfile.uid === authUser.uid) addRent({ ...newRent, id: postRentRef.id });

            toast.success("Rent request Created Successfully");

        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setIsLoading(false)
        }
        
			


    }

  return  { isLoading, handleRentItem }
}
