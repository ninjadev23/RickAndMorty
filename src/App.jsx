import { Character } from './Components/Character'
import { useRef, useState } from 'react'
import useFetch from './useFetch'
function App() {
  const search = useRef("")
  const [query, setQuery] = useState("")
  const url = `https://rickandmortyapi.com/api/character/?name=${query}`
  const { data, loading, error } = useFetch(url)
  return (
    <>
      <header>
        <nav>
          <img className="logo" src="/public/Rick_and_Morty.svg" alt="Ricky and morty" />
        </nav>
      </header>
      <h1>Characters Of Ricky And Morty</h1>
      <div className="input-container">
        <input
          ref={search}
          className="search-character"
          placeholder="Search Of Name Character"
          type="search"
          onChange={()=>setQuery(search.current.value)}
        />
      </div>
      <div className="characters">
        <div className="message-container">
          {loading && <p className="loading-message">Loading...</p>}
          {error && <p className="error-message">Error loading data</p>}
        </div>
        {!error && !loading && data?.results?.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            status={character.status}
            location={character.location.name}
            species={character.species}
            gender={character.gender}
            imageUrl={character.image}
          />
        ))}
      </div>
    </>
  )
}

export default App
