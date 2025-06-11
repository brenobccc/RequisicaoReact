
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";


function App() {
  let BackgroundAudio = new Audio("zelda_song.mp3");
  BackgroundAudio.loop = true;
  BackgroundAudio.muted = true;

  const [post, setPost] = useState([])
  const qtdPoke = 706
  const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=' + qtdPoke

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(JSON.parse(JSON.stringify(response.data.results)))
    });

  }, []);

  console.log(post)

  return (
    <div className="App">
      {
        post.map((e) => {

          const pokeNumber = e.url.split('pokemon')[1].replaceAll('/', '')
          const pokeName = e.name
          console.log(pokeNumber)
          const urlFoto = 'https://raw.githubusercontent.com/wellrccity/pokedex-html-js/refs/heads/master/assets/img/pokemons/poke_' + pokeNumber + '.gif'
          const sitePoke = 'https://www.pokemon.com/br/pokedex/' + pokeNumber
          return (
            <div onClick={() => {
              alert("clicou")
              const isMutted = BackgroundAudio.muted
              console.log(isMutted)

              if (isMutted) {
                BackgroundAudio = new Audio("zelda_song.mp3");
                BackgroundAudio.muted = false;
                BackgroundAudio.play().catch((e) => {
                  console.log("Falha ao reproduzir o áudio:", e);
                });
              }else{
                BackgroundAudio.muted = true;
              }


            }}>
              <h4>
                {pokeNumber}-<b>{pokeName}</b>
              </h4>
              {/* <a href={sitePoke}>poke</a> */}
              <img src={urlFoto}></img>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
