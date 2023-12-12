import React, { useState, useRef, useEffect } from "react";
import "./index.sass";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const navElement = useRef();
  const location = useLocation();

  const handleLinkClick = (event) => {
    const linkLeft = event.target.getBoundingClientRect().left;
    const navLeft = navElement.current.getBoundingClientRect().left;
    const linkWidth = event.target.getBoundingClientRect().width;
    const singleLinkLeft = linkLeft - navLeft;
    setIndicatorPosition(singleLinkLeft);
    setIndicatorWidth(linkWidth);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    const links = navElement.current.querySelectorAll("li a");
    const linkIndex = location.pathname === "/" ? 0 : 1;
    const selectedLink = links[linkIndex];
    handleLinkClick({ target: selectedLink });
  }, [location.pathname]);

  return (
    <nav>
      <ul ref={navElement}>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/menu`}>Menu</Link>
        </li>
        <li>
          <Link to={`https://www.youtube.com/`}>Sklep</Link>
        </li>
      </ul>
      <span
        style={{ width: indicatorWidth, left: indicatorPosition }}
        className="indicator"
      ></span>
    </nav>
  );
};

export default Nav;
