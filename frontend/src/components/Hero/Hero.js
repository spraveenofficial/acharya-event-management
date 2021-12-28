import Styles from "./Hero.module.css";
import HabbaImage from '../../images/habba.png';
import Button from "../ColorButton/Button";
const Hero = () => {
  return (
    <div className={Styles.div}>
      <div className={Styles.left}>
        <h3>Acharya Habba 2022 is Here! </h3>
        <h1>Are you Excited? </h1>
        <div className={Styles.roller}>
          <span id={Styles.rolltext}>
            Hurry Up! Book Your Slots Now <br /> Get E-tickets <br /> 100% covid
            protocols
            {/* <span id={Styles.sparetime}>too much spare time? </span> */}
          </span>
        </div>
          <Button color="rgb(46, 110, 223)" text="Book Now"/>
          {/* <p>Note: This is non refundable Event.</p> */}
      </div>
      <div className={Styles.right}>
          <img className={Styles.logo} src={HabbaImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
