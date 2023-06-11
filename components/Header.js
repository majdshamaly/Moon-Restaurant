import Link from "next/link";
import classes from "./Header.module.css";
import Sidebar from "./Sidebar";
import BurgerMenu from "./general/BurgerMenu";
const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          Burger <span>King</span>
        </Link>
      </div>
      <BurgerMenu />
      <div className={classes.navMenu}>
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

      {/* Title */}

      <div className={classes.title} data-aos="fade-up">
        <h1>
          Best <span>Quality</span> Ingredients
        </h1>
        <p>
          Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus
          egestas eleifend dui ac consequat at lectus in malesuada
        </p>
        <Link href="/recipies" className={classes.viewMenu}>
          <button>View Menu</button>
        </Link>
        <Link href="#booking" className={classes.bookTable}>
          <button>Book Table</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
