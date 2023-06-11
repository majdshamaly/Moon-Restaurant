import connectMongo from "../utiles/connectMongo";

import About from "@/components/About";
import Header from "@/components/Header";
import MailIcon from "@/components/icons/MailIcon";
import PersoIcon from "@/components/icons/PersonIcon";
import Mobile from "@/components/icons/Mobile";

import { useRef } from "react";
import Head from "next/head";
import { getApiConnect } from "../helpers/apiFetch";
import classes from "./home.module.css";
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import { bookingPost } from "../helpers/booking";
import Footer from "@/components/general/Footer";

function Home(props) {
  const scrollToBooking = useRef();
  const enteredName = useRef();
  const enteredEmail = useRef();
  const enteredMobile = useRef();
  const enteredGuestes = useRef();
  const bookingHandler = (e) => {
    e.preventDefault();
    const bookingData = bookingPost({
      name: enteredName.current.value,
      email: enteredEmail.current.value,
      mobile: enteredMobile.current.value,
      guestes: enteredGuestes.current.value,
    });
    console.log(bookingData, "success");
  };
  useEffect(() => {
    AOS.init({
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease",
      once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Moon Resturant</title>
        <meta name="Moon Resturant" content="*" />
      </Head>
      <Header scrollToBooking={scrollToBooking} />
      <div className={classes.main} id="booking">
        <h1 className={classes.title} data-aos="fade-right">
          Book Your Table For Private Dinners & Happy Hours
        </h1>
        <p className={classes.paragraph} data-aos="fade-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
          metus tortor, auctor id gravida condimentum, viverra quis sem. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
          metus tortor, auctor id gravida condimentum, viverra quis sem.
          Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur
          convallis porttitor. Aliquam interdum at lacus non blandit.
        </p>
        <div
          className={classes.bookingForm}
          ref={scrollToBooking}
          data-aos="fade-left"
        >
          <form onSubmit={bookingHandler}>
            <div className={classes.person}>
              <PersoIcon />
              <input type="text" placeholder="person" ref={enteredName} />
            </div>
            <div className={classes.person}>
              <MailIcon />
              <input type="email" placeholder="E-mail" ref={enteredEmail} />
            </div>
            <div className={classes.person}>
              <Mobile />
              <input type="tel" placeholder="Mobile" ref={enteredMobile} />
            </div>
            <div className={classes.person}>
              <PersoIcon />
              <input type="number" placeholder="Gustes" ref={enteredGuestes} />
            </div>
            <div className={classes.person}>
              <button type="submit">BOOK NOW</button>
            </div>
          </form>
        </div>
        {/* About & Video */}
        <About />
        <Footer />
      </div>
    </>
  );
}
// export const getServerSideProps = async () => {
//   console.log("CONNECTING TO MONGO");
//   await connectMongo();
//   console.log("CONNECTED TO MONGO");

//   return {
//     props: {},
//   };
// };

export default Home;
