import React, { useRef, useState, useEffect, useContext } from 'react';
// local imports //
import { AuthContext } from '../../context/AuthContext'
// firebase //
import {
  getStorage, ref, uploadBytesResumable, uploadBytes, getDownloadURL, listAll,
  list,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
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
  const refImage: any = useRef();
  const storage = getStorage();
  const auth: any = getAuth();
  const user: any = useContext(AuthContext);
  const [url, setUrl]: any = useState(null);

  useEffect(() => {
      // if user already have an avatar download it //
    if (auth?.currentUser?.photoURL !== null) {
      setUrl(auth?.currentUser?.photoURL);
    }
  }, []);


    // to trigger file upload without re-render //
  const openUpload = () => {
    refImage.current.click();
  };

  // set image user profile and upload firebase storage //
  const uploadFile = (file: any) => {
    const storageRef = ref(storage, `usersAvatar/${user?.uid}/${file}`);
    if (file == null) return;
    uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then((url) => {
        setUrl(url);
        updateUserAvatar(url)
      })
    })
  };

      // upload avatar link with user profile //
  async function updateUserAvatar(avatar: string) {
    updateProfile(auth?.currentUser, { photoURL: `${avatar}` })
      .then(() => {
        console.log("success");
      }).catch((error) => { console.log(error); });
  }
  return (
    <Navbar fluid={true} rounded={true} className=' bg-white rounded-none'>
      <Navbar.Brand>
        <div className='absolute left-2 whitespace-nowrap text-xl font-semibold text-sky-600'>
          Comments-System
        </div>
      </Navbar.Brand>
      <div className='flex  md:order-2'>
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={<Avatar alt='User settings' img={url} rounded={true} />} >
          <Dropdown.Header>
            <span className='block text-sm'>{user?.displayName}</span>
            <span className='block truncate text-sm font-medium'>
              {user?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item  >
            <input
              onChange={(e: any) => {
                uploadFile(e.target.files[0])

              }}
              type='file'
              id='upload-image'
              ref={refImage}
              accept='.jpg,.jpeg,.png'
              style={{ display: 'none' }}
            />
            <label className='hidden' htmlFor="upload-image">upload</label>
            <button onClick={openUpload} className='cursor-pointer'>Upload image</button>
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
