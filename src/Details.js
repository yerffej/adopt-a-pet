import React from "react";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process / env.API_SECRET
});

class Details extends React.Component {
  render() {
    return <h1>hi lol</h1>;
  }
}

export default Details;
