import React from 'react';
import { Navbar,Dropdown, Avatar,DarkThemeToggle } from 'flowbite-react';

import fallbackImage from '../../assets/images/fallback-image.png'



const NavigationBar = () => {
  return (
<Navbar
  fluid={true}
  rounded={true}
  className=' bg-white rounded-none'
>
  <Navbar.Brand>
    <span className="self-center whitespace-nowrap text-xl font-semibold text-sky-600">
      Comments-System
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img={fallbackImage} rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
      <Dropdown.Item>
        Delete account
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/login">
      Login
    </Navbar.Link>
    <Navbar.Link href="/register">
      Register
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  );
};

export default NavigationBar;
