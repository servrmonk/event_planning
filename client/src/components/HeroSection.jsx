import restaurant from "../assets/restaurant.jpg";
import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section className="hero">
      <img src={restaurant} alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the small details
          </p>
          <Link to="contact" span={true} smooth={true} duration={500}>BOOK NOW</Link>
        </div>
      </div>
    </section>
  );
}
