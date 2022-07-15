import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Pokemon: NextPage = () => {
  const [image, setImage] = useState(
    "https://media.istockphoto.com/vectors/loading-icon-vector-illustration-vector-id1335247217?k=20&m=1335247217&s=612x612&w=0&h=CQFY4NO0j2qc6kf4rTc0wTKYWL-9w5ldu-wF8D4oUBk="
  );
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    async function get_pokemon() {
      let random_number = Math.floor(Math.random() * 300);
      let res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${random_number}`
      );
      let data = await res.json();
      let new_image = data.sprites?.front_default;
      setImage(new_image);
    }
    get_pokemon();
  }, []);
  return (
    <div className="container">
      <img src="/background.png" className="background"></img>
      <img
        className={`${isHidden ? "hidden_pokemon" : "visible_pokemon"}`}
        src={image}
        width={500}
        height={500}
        alt="image of a random pokemon"
      ></img>
      <button onClick={() => setIsHidden(false)}>SHOW</button>
    </div>
  );
};

export default Pokemon;
