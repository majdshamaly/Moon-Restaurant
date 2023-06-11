import classes from "./BlogHeader.module.css";
import Link from "next/link";
import BurgerMenu from "./general/BurgerMenu";
const BlogHeader = () => {
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

      <div className={classes.title}>
        <h1>
          Food <span>Blog</span>
        </h1>
      </div>
    </div>
  );
};

export default BlogHeader;
