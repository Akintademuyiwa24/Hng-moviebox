import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mx-auto text-center mt-20">
      <div className="flex gap-4 items-center justify-center mb-5">
        <BiLogoFacebookSquare size={20} />
        <AiOutlineInstagram size={20} />
        <AiOutlineTwitter size={20} />
        <AiFillYoutube size={20} />
      </div>
      2021 MovieBox by Akintade Olumuyiwa
    </div>
  );
};

export default Footer;
