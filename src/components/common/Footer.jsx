import React from "react";
import Clock from './Clock';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 py-2">
        <p className="text-center font-semibold text-white">@2023 Sptech Copyright .All Rights| Terms And condition </p>
        <Clock />
      </footer>

    </>
  );
};

export default Footer;
