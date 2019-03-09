import React, { useState } from 'react'
import Profile from './profile/Profile';
import ProfileChooser from './profile/ProfileChooser';

const About = () => {

  const [name, setName] = useState('');
  
  return (
    <>
    <div>About</div>
    <ProfileChooser setName={setName}/>
    <Profile name={name} />
    </>
  );
}

export default About;