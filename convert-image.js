// Simple script to convert HEIC to web-friendly format
// You can run this with Node.js if you have the sharp package installed

const fs = require('fs');
const path = require('path');

console.log('Image Conversion Helper');
console.log('======================');
console.log('');
console.log('To use your profile image, you need to convert the HEIC file to a web-friendly format.');
console.log('');
console.log('Options:');
console.log('1. Convert HEIC to JPEG/PNG using an online converter');
console.log('2. Use a photo editing app to export as JPEG/PNG');
console.log('3. Use command line tools like ImageMagick or ffmpeg');
console.log('');
console.log('Once converted, place the image in the public folder as:');
console.log('- me.jpg');
console.log('- me.png');
console.log('- me.webp');
console.log('');
console.log('Then update the components to use the new image path.');
console.log('');
console.log('For now, the portfolio uses the "M" letter as a placeholder.'); 