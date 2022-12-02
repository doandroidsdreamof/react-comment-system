import React, { useRef, useState } from 'react';
// firebase //
import { getStorage, ref,uploadBytesResumable  } from "firebase/storage";
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
  const [image, setImage]: any | string[] = useState('');
  const refImage: any = useRef();
  const storage = getStorage();



  const handleUpload = (e) => {
    if (image == null){
      return;
    }else{
      refImage.current.click();
      const uploadRef = ref(storage, `${image?.name}`);
      const uploadTask = uploadBytesResumable(uploadRef, image?.name);
    }


  }


return (
  <Navbar fluid={true} rounded={true} className=' bg-white rounded-none'>
    <Navbar.Brand>
      <span className='self-center whitespace-nowrap text-xl font-semibold text-sky-600'>
        Comments-System
      </span>
    </Navbar.Brand>
    <div className='flex md:order-2'>
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={
          <Avatar alt='User settings' img={fallbackImage} rounded={true} />
        }
      >
        <Dropdown.Header>
          <span className='block text-sm'>Bonnie Green</span>
          <span className='block truncate text-sm font-medium'>
            name@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item onClick={handleUpload}>
          <input
            onChange={(e: any) => setImage(e.target.files[0]) }
            type='file'
            id='upload-image'
            ref={refImage}
            accept='.jpg,.jpeg,.png'
            style={{ display: 'none' }}
          />
          <label htmlFor='upload-image'>Upload image</label>
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
  </Navbar>
);
};

export default NavigationBar;
