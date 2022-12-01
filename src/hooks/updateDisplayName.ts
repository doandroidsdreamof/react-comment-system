import { getAuth, updateProfile } from 'firebase/auth';

const updateDisplayName = async function (setName) {
  const auth: any = getAuth();
  if (auth !== null) {
    try{
      updateProfile(auth?.currentUser, {
        displayName:  setName,
      })
    }
    catch(error){
      console.error(error)

    }
  }
};
export default  updateDisplayName