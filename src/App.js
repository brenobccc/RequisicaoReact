
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";


function App() {
  const [post, setPost] = useState([])
  const qtdPoke = 706
  const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit='+qtdPoke

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

          const pokeNumber = e.url.split('pokemon')[1].replaceAll('/','')
          console.log(pokeNumber)
          const urlFoto = 'https://raw.githubusercontent.com/wellrccity/pokedex-html-js/refs/heads/master/assets/img/pokemons/poke_'+pokeNumber+'.gif'
          // const sitePoke = 'https://www.pokemon.com/br/pokedex/'+pokeNumber
          return (
            <div style={{
              width: '300px',
              height: '300px',
              backgroundColor: 'orange',
              margin: '5px'
            }}>
              <h4>
                {pokeNumber}
              </h4>
              {/* <a href={sitePoke}>poke</a> */}
              <img src={urlFoto} style={{
                width: '40%',
                position: 'cover'
              }}></img>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
