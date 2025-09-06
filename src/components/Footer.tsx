// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} Pixell River Financial</p>
    </footer>
  );
};

export default Footer;
