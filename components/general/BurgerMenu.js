import Link from "next/link";
import React, { useState, useEffect } from "react";
// import styles from './burgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="burgerMenu">
      <button className="burgerButton" onClick={handleToggle}>
        {/* <span className="burgerIcon" /> */}
        <img src="/img/menuIcon.svg" />
      </button>
      {isOpen && (
        <div className="menuItems">
          <Link
            href="/"
            onClick={() =>
              props.scrollToBooking.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Home
          </Link>

          <Link href="/#about">About</Link>

          <Link href="/#booking" class="nav-item nav-link">
            Booking
          </Link>

          <Link
            href="/recipies"
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
          >
            Recipies
          </Link>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
