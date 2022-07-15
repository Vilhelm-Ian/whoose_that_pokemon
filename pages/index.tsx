import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useState } from "react";

interface AppProps {
  initial_image: string;
  initial_name: string;
}

async function get_data() {
  let random_number = Math.floor(Math.random() * 300);
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random_number}`);
  let data = await res.json();
  return data;
}

const Pokemon: NextPage<AppProps> = ({
  initial_image,
  initial_name,
}: AppProps) => {
  const [image, setImage] = useState(initial_image);
  const [isHidden, setIsHidden] = useState(true);
  const [name, setName] = useState(initial_name);

  async function reload() {
    let data = await get_data();
    let new_image = data.sprites?.front_default;
    let { name } = data;
    setImage(new_image);
    setIsHidden(true);
    setName(name);
  }

  let button;
  if (!isHidden) {
    button = <button onClick={reload}>Reload</button>;
  } else {
    button = <button onClick={() => setIsHidden(false)}>SHOW</button>;
  }

  return (
    <div className="container">
      <img
        src="/background.png"
        alt="whoose that pokemon card tile"
        className="background"
      ></img>
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
      {button}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let data = await get_data();
  let initial_image: string = data.sprites?.front_default;
  let name: string = data.name;

  return { props: { initial_image, initial_name: name } };
};

export default Pokemon;
