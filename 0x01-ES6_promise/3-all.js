// 3-promise.js

import { uploadPhoto, createUser } from './utils.js';

const handleProfileSignup = () => {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`Body: ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
};

export default handleProfileSignup;

