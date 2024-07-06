import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
   <Wrapper>
    <nav>
       <Logo />
    </nav>
    <div className="container page">
      <div className="info">
        <h1>Job <span>Tracking</span> app</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repudiandae. Rem nulla eligendi expedita a soluta doloremque delectus excepturi? Ea deserunt at eaque perferendis aliquid! Beatae atque ad ut id reprehenderit ipsam repellendus placeat debitis. Labore aperiam, sequi doloremque illum voluptatum repudiandae quos laudantium! Voluptatum!</p>
        <Link to="/register" className="btn register-link">Register</Link>
        <Link to="/login" className="btn">Login | Demo User</Link>
      </div>
      <img src={main} alt="Job hunt image" className="img main-img"/>
    </div>
   </Wrapper>
  )
}
