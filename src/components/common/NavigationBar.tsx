import React, { useRef, useState, useEffect } from 'react';
// local imports //

// firebase //
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
// flowbite //
import {
  Navbar,
  Dropdown,
  Avatar,
  DarkThemeToggle,
  FileInput,
} from 'flowbite-react';
// alert popups //
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
// images //
import fallbackImage from '../../assets/images/fallback-image.png';

const NavigationBar = () => {
  const [image, setImage]: any = useState(fallbackImage);
  const [uploadedImage, setUploadedImage]: any = useState('');
  const [progressPercent, setProgressPercent] = useState(0)
  const refImage: any = useRef();
  const storage = getStorage();
  const auth: any = getAuth()
  useEffect(()=>{
    
  },[image])


  // set image user profile and upload firebase storage //
  const handleUpload = (e: any) => {
    e.preventDefault();
    refImage.current.click();
    const file = e.target[0]?.files[0]
    console.log("🚀 ~ file: NavigationBar.tsx:39 ~ handleUpload ~ file", file)
    if (!file) return null;
    const storageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgressPercent(progress)
      },
      (error) => {
        console.error(error)
      },
      () => {
        e.target[0].value = ''
        getDownloadURL(storageRef).then((downloadURL) => {
          setImage(downloadURL)
        })
      }
      )
    updateProfile(auth?.currentUser, { photoURL: `${file?.name}` })
      .then(() => {
        injectStyle();
        toast.dark('image uploaded', {
          toastId: 5,
        });
      }).catch((error) => {
        console.error(error);
        injectStyle();
        toast.dark('image could not uploaded', {
          toastId: 4,
        });
      });

  }

  console.log("🚀 ~ file: NavigationBar.tsx:24 ~ NavigationBar ~ image", image)
  console.log("🚀 ~ file: NavigationBar.tsx:24 ~ NavigationBar ~ image", auth.currentUser.photoURL)


  return (
    <Navbar fluid={true} rounded={true} className=' bg-white rounded-none'>
      <Navbar.Brand>
        <span className='self-center whitespace-nowrap text-xl font-semibold text-sky-600'>
          Comments-System
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>&
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<Avatar alt='User settings' img={image} rounded={true} /> } >
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>
              name@flowbite.com
            </span>
          </Dropdown.Header>
            <Dropdown.Item >
              <form onSubmit={handleUpload} action="">
              <input
                type='file'
                id='upload-image'
                ref={refImage}
                accept='.jpg,.jpeg,.png'
                style={{ display: 'none' }}
              />
              <button type='submit'>Upload image</button>
              </form>
            </Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
          <Dropdown.Item>Delete account</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href='/navbars' active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href='/login'>Login</Navbar.Link>
        <Navbar.Link href='/register'>Register</Navbar.Link>
      </Navbar.Collapse>
    </Navbar >
  );
};

export default NavigationBar;
