import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Pokemon: NextPage = ({ new_image, name }) => {
  const [image, setImage] = useState(new_image);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="container">
      <img src="/background.png" className="background"></img>
      <div className="data">
        <img
          className={`${isHidden ? "hidden_pokemon" : "visible_pokemon"}`}
          src={image}
          width={500}
          height={500}
          alt="image of a random pokemon"
        ></img>
        {!isHidden ? <p>{name}</p> : ""}
      </div>
      <button onClick={() => setIsHidden(false)}>SHOW</button>
    </div>
  );
};

export async function getServerSideProps() {
  let random_number = Math.floor(Math.random() * 300);
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random_number}`);
  let data = await res.json();
  let new_image = data.sprites?.front_default;
  let { name } = data;
  return { props: { new_image, name } };
}

export default Pokemon;
