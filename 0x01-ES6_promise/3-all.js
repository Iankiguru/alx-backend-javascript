import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto('photo-profile-1'), createUser()])
    .then(([photo, user]) => {
      console.log(`Body: ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
export default handleProfileSignup;
