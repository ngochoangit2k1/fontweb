import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name:  process.env.CLOUD_NAME, 
  api_key:  process.env.API_KEY , 
  api_secret:   process.env.APT_SECRET
});
console.log(   process.env.CLOUD_NAME, 
 process.env.API_KEY , 
   process.env.APT_SECRET)
export default cloudinary