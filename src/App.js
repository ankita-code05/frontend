import './App.css';
import { useState, useEffect } from "react"
import { LoadImages, SearchImages } from './components/api';
import Image from "./components/image"


function App() {
  const [query, setQuery] = useState([])
  const [searchQ, setSearch] = useState([])
  const data = LoadImages();


  console.log(SearchImages(query))
  const search = () => {
    setSearch(query)


  }
  const searchData = SearchImages(searchQ)
  console.log(searchData)


  return (
    <div className="App">
      <div className='head'>
        <input type='text' onChange={(e) => setQuery(e.target.value)} />
        <button onClick={search}>Search</button>
      </div>
      <div className='main-content'>
        {searchData.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}
        {data.map((img, key) => (
          <Image src={img.urls.thumb} key={key} />
        ))}

      </div>
    </div>
  );
}

export default App;
