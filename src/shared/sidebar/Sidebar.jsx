/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";
import SidebarItems, { IconMappings } from "./SidebarItems";
import { SidebarHeader } from "../SidebarHeader";
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

function Sidebar({ defaultActive }) {
  const location = useLocation();
  const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
  const lastActiveIndex = Number(lastActiveIndexString);
  const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

  function changeActiveIndex(newIndex) {
    localStorage.setItem("lastActiveIndex", newIndex);
    setActiveIndex(newIndex);
  }
  function getPath(path) {
    if (path.charAt(0) !== "/") {
      return "/" + path;
    }
      return path;
    }

  useEffect(() => {
    const activeItem = SidebarItems.findIndex(
      (item) => getPath(item.route) === getPath(location.pathname)
    );
    changeActiveIndex(activeItem);
  }, [location]);

  function getIcon(iconName) {
    return IconMappings[iconName] || null; // Use the utility file
  }

  return (
    <>
      <StyleSheetManager shouldForwardProp={prop => isPropValid(prop)}>
        <SidebarParent className="bg-[#4b1717]">
          <div style={{ position: 'fixed' }}>
            <SidebarHeader className="mb-8"/>
            {SidebarItems.map((item, index) => (
              <Link to={item.route} key={item.name}>
                <SidebarItem
                  active={index === activeIndex ? "true" : "false"}
                >
                  {getIcon(item.icon)}
                  <p>{item.name}</p>
                </SidebarItem>
              </Link>
            ))}
          </div>
          <div className="behind-the-scenes" />
        </SidebarParent>
      </StyleSheetManager>
    </>
  );
}

export default Sidebar;

const SidebarParent = styled.div`
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 250px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 250px;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active === "true" ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin-left: 12px;
  }
  
  &:hover {
    cursor: pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;
