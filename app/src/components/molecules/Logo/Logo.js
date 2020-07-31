import React from "react";
import PropTypes from "prop-types";
import Image from "../../atoms/Image/Image";
import Title from "../../atoms/Title/Title";
import * as Style from "./style";

const Logo = ({ size = "nomarl" }) => {
  // let w = "";
  // if (size === "big") w = "70";
  // else if (size === "normal") w = "60";
  // else w = "50";
  return (
    <Style.Wrapper>
      <Image
        alt="로고"
        w="10"
        src="http://sejongmin777.phps.kr/files/attach/images/115/134/aab3ef64a92175b83d99fd78e49dd20b.gif"
      />
      <Title size={size} content="천주교세종로성당" />
    </Style.Wrapper>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "big"]),
};

export default Logo;
