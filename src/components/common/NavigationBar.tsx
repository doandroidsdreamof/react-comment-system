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
  const refImage: any = useRef();
  const storage = getStorage();
  const auth: any = getAuth()


  useEffect(()=>{
    updateProfilePhoto()
  },[image])


  // set image user profile and upload firebase storage //
  const handleUpload = (e: any) => {
    e.preventDefault();
    refImage.current.click();
    const file = e.target[0]?.files[0]
    const storageRef = ref(storage, `${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)
    updateProfile(auth?.currentUser, { photoURL: `${file.name}` })
    updateProfilePhoto()
    setImage(auth?.currentUser?.photoURL)
  }

function updateProfilePhoto(){
  const storageRef = ref(storage, `${auth?.currentUser?.photoURL}`)
  getDownloadURL(storageRef).then((downloadURL) => {
    setImage(downloadURL)
  })

}

  return (
    <Navbar fluid={true} rounded={true} className=' bg-white rounded-none'>
      <ToastContainer />
      <Navbar.Brand>
        <div className='absolute left-2 whitespace-nowrap text-xl font-semibold text-sky-600'>
          Comments-System
        </div>
      </Navbar.Brand>
      <div className='flex  md:order-2'>&
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
              <label htmlFor='upload-image'>Upload image</label>
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
