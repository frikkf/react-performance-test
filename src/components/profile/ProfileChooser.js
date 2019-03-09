import React from 'react'
import Button from '@material-ui/core/Button';

const ProfileChooser = props => {
  const {setName} = props;
  return (
    <>
      <Button color="primary" onClick={() => setName('Frikk')}>Set name to Frikk</Button>
      <Button color="secondary" onClick={() => setName('Oda')}>Set name to Oda</Button>
    </>
  );
}

export default ProfileChooser;
