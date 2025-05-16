
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";


function App() {
  const [post, setPost] = useState([])
  const baseURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(JSON.parse(JSON.stringify(response.data.results)))
    });

  }, []);

  console.log(post)

  return (
    <div className="App">
      {
        post.map((e) => (
          <h1>
            {e.name}
          </h1>
        ))
      }
    </div>
  );
}

export default App;
