import { Title, Image } from "../styles";
import Figure from "./Figure";
import React from "react";

const Home = (props) => {
  return (
    <div>
      <Title>Hangman!</Title>
      <h4>Guess a number between 1 and 30</h4>
      <Figure attempts={props.attempts} />
      {/* <Image src="https://i.pinimg.com/736x/56/21/55/5621553db7eedebcad64bf185be3d7e6.jpg" /> */}
    </div>
  );
};

export default Home;
