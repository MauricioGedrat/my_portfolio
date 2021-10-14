import React from "react";
import ImgLogo from "../../assets/ImgLogo.png";

const Logo = () => {
  return (
    <div>
      <img src={ImgLogo.src} alt="Logo" className="h-12 w-40 mt-2" />
    </div>
  );
};

export default Logo;
