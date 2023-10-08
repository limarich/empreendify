import { useNavigate } from "react-router-dom";

import "./styles.css";

import { 
  imagesForNavigation, 
  namesForDescription, 
  navigationLinks 
} from "../../Navbar";

export const NavItem = ({ index, selectedIndex, handleClick }) => {

  const navigate = useNavigate();

  const handleItemClick = (index) => {
    console.log(index);
    navigate(navigationLinks[index]);

    if(handleClick != undefined) {
      handleClick();
    }
  }

  return(
    <li
      key={index}
      className="navigationLi"
      onClick={() => {
        handleItemClick(index);
      }}
      style={
        index === selectedIndex
        ? {
            backgroundColor: 'var(--normal-gray-2)',
            color: 'var(--normal-blue)'
          }
        : {}  
      }
    >
      <img 
        className="logosImage" 
        src={imagesForNavigation[index]} 
        alt="INavigationImage"
      />
      <p>{namesForDescription[index]}</p>
    </li>
  )
}