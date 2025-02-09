import { updateUserSchema } from './dbOperations.js';

// Call the function to update user schema
updateUserSchema().then(() => {
  console.log('Schema update completed.');
}).catch((error) => {
  console.error('Error running schema update:', error);
});