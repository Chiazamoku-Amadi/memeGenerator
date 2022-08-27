import React, { useState, useEffect } from "react";
import "./Meme.css";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = useState([]);

  // Using promise
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((memeData) => setAllMemes(memeData.data.memes));
  }, []);

  // Using async function
  // useEffect(() => {
  //   async function getMemes() {
  //     const response = await fetch("https://api.imgflip.com/get_memes");
  //     const memeData = await response.json();
  //     setAllMemes(memeData.data.memes);
  //   }
  //   getMemes();
  // }, []);

  function getMemeImage(event) {
    event.preventDefault();

    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: allMemes[randomNumber].url,
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main className="meme">
      <form className="form">
        <fieldset className="input-area">
          <input
            type="text"
            className="input-text"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input-text"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </fieldset>
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </form>
      <div className="memeImage">
        <img src={meme.randomImage} alt="" className="image" />
        <h2 className="topText">{meme.topText}</h2>
        <h2 className="bottomText">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
