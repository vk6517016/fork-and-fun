import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='fixed bottom-0 left-0 right-0 bg-white text-gray-800 font-bold text-center py-4 border-t mt-10 border-gray-200'>
      <p>&copy; All rights reserved 2024-{currentYear}</p>
    </footer>
  );
};

export default Footer;