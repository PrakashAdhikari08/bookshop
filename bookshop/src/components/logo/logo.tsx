import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "src/redux/rootReducer";
import LightLogo from "src/assets/logo-light.png";
import DarkLogo from "src/assets/logo-dark.png";

interface LogoProps {
  className: string;
  darkMode?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, darkMode }) => {
  const theme = useSelector((state: RootState) => state.themeLayout.darkMode);
  return (
    <>
      <img
        className={className}
        src={theme || darkMode ? DarkLogo : LightLogo}
      ></img>
    </>
  );
};

export default Logo;
