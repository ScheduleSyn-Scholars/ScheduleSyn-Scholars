import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const updateSelectedDate = async (userUid, selectedDate) => {
    try {
        const firestore = firebase.firestore();
        const userRef = firestore.collection('users').doc(userUid);
        
        const userDoc = await userRef.get();
        const existingData = userDoc.data() || {};

        const updatedData = {
            ...existingData,
            selectedDate: selectedDate,
        };

        await userRef.set(updatedData, {merge:true});

        console.log('User document updated.', selectedDate);
    }catch (error) {
        console.error('Error updating Firestore document:', error);
    
    throw error;
}
};

export { updateSelectedDate};