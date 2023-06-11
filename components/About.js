import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes.about} id="about">
      <h1>About Us</h1>
      <div className={classes.videoContainer} data-aos="fade-right">
        <img src="https://cdn.pixabay.com/photo/2017/01/14/10/57/woman-1979272_960_720.jpg" />
      </div>
      <div className={classes.aboutScript} data-aos="fade-left">
        <h1>Cooking Since 1990</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
          metus tortor, auctor id gravida condimentum, viverra quis sem. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam
          metus tortor, auctor id gravida condimentum, viverra quis sem.
          Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur
          convallis porttitor. Aliquam interdum at lacus non blandit.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
