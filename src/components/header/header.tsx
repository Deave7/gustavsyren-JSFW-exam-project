import { NavLink } from "react-router-dom";
import { HeaderProps } from "../../types/types";

const Header: React.FC<HeaderProps> = ({
  navOne,
  imageOne,
  navTwo,
  imageTwo,
  label,
}) => {
  return (
    <nav className="header">
      <NavLink to={navOne}>
        <img src={imageOne} />
      </NavLink>
      <h1>{label}</h1>
      <NavLink to={navTwo}>
        <img src={imageTwo} />
      </NavLink>
    </nav>
  );
};

export default Header;
