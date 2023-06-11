import React from 'react';
// import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Moon Restaurant . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
