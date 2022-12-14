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
  const [url, setUrl]: any = useState(null);
  const [imageUpload, setImageUpload]: any | null = useState(null);
  const [imageUrls, setImageUrls]: any = useState([]);
  const [render, setRender] = useState<boolean>(false)

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev: any) => [url]);
          setUrl(imageUrls)
          setRender(true)
        });
      });
    });
  }, [render]);

  // set image user profile and upload firebase storage //
  const imagesListRef = ref(storage, "usersAvatar/");
  const uploadFile = () => {
    refImage.current.click();
    if (imageUpload == null) return;
    const imageRef = ref(storage, `usersAvatar/${imageUpload.name + uuidv4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev: any) => [url]);
        setUrl(imageUrls)
        setRender(true)
      });
    });
  };



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
          label={<Avatar alt='User settings' img={url} rounded={true} />} >
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item  >
            <input
              onChange={(e: any) => setImageUpload(e.target.files[0])}
              type='file'
              id='upload-image'
              ref={refImage}
              accept='.jpg,.jpeg,.png'
              style={{ display: 'none' }}
            />
            <button onClick={uploadFile} className='cursor-pointer'>Upload image</button>
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
