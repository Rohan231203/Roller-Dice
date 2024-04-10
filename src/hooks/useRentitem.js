// useRentitem.js
import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuthStore from '../store/authStore';
import { Timestamp, addDoc, arrayUnion, collection, doc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../firebase/firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import useUserProfileStore from '../store/userProfileStore';
import useRentStore from '../store/rentStore';
import { useLocation } from "react-router-dom";

export default function useRentitem() {
    const userProfile = useUserProfileStore((state) => state.userProfile);
    const authUser = useAuthStore((state) => state.user);
    const createRent = useRentStore((state) => state.createRent);
    const addRent = useUserProfileStore((state) => state.addRent);

    const [isLoading, setIsLoading] = useState(false);
    const { pathname } = useLocation();

    const handleRentItem = async (selectedFile, title, description, to, from) => {
        if (isLoading) return;
        if (!selectedFile) throw new Error("Please select an image");
        setIsLoading(true);
        const newRent = {
            createdBy: authUser.uid,
            title: title,
            description: description,
            from: Timestamp.fromDate(new Date(from)),
            to: Timestamp.fromDate(new Date(to)),
        };
        try {
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
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { isLoading, handleRentItem }
}
