// utils/imageUtils.js

const path = require('path');
const fs = require('fs');

// Example function for uploading an image
async function uploadImage(imageFile) {
  return new Promise((resolve, reject) => {
    // Check if the uploads folder exists, create it if not
    const uploadFolder = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder);
    }

    // Generate a unique filename for the uploaded image
    const uniqueFileName = `${Date.now()}-${imageFile.originalname}`;

    // Set the destination path for the uploaded image
    const destinationPath = path.join(uploadFolder, uniqueFileName);

    // Save the image to the destination path
    fs.writeFile(destinationPath, imageFile.buffer, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve(destinationPath);
      }
    });
  });
}

module.exports = {
  uploadImage,
};
