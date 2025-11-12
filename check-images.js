// Quick script to check if required images exist
const fs = require('fs');
const path = require('path');

const requiredImages = [
  'hero-image.png',
  'features-section.png',
  'challenge-friends.png'
];

console.log('Checking for required images in public folder...\n');

let allPresent = true;

requiredImages.forEach(image => {
  const imagePath = path.join(__dirname, 'public', image);
  const exists = fs.existsSync(imagePath);
  
  if (exists) {
    console.log(`✅ ${image} - Found`);
  } else {
    console.log(`❌ ${image} - Missing`);
    allPresent = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPresent) {
  console.log('✅ All images are present! Your site is ready.');
} else {
  console.log('⚠️  Some images are missing. Please add them to the public folder.');
  console.log('\nTo add images:');
  console.log('1. Save your images with the exact names listed above');
  console.log('2. Place them in: forgedocs/public/');
  console.log('3. Run this script again to verify');
}

console.log('='.repeat(50) + '\n');
