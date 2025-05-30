import { Character } from './Components/Character'
import { useRef, useState } from 'react'
import useFetch from './useFetch'
import { CharacterInfo } from './Components/CharacterInfo'
function App() {
  const search = useRef("")
  const [query, setQuery] = useState("")
  const url = `https://rickandmortyapi.com/api/character/?name=${query}`
  const { data, loading, error } = useFetch(url)
  const [selectedCharacter, setSelectedCharacter] = useState(undefined)
  return (
    <>
      <header>
        <nav>
          <img className="logo" src="/Rick_and_Morty.svg" alt="Ricky and morty" />
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
      {selectedCharacter && 
          <CharacterInfo
          name={selectedCharacter.name}
          status={selectedCharacter.status}
          location={selectedCharacter.location.name}
          species={selectedCharacter.species}
          gender={selectedCharacter.gender}
          imageUrl={selectedCharacter.image}
          episodes={selectedCharacter.episode}
          origin={selectedCharacter.origin.name}
          onClick={() => setSelectedCharacter(undefined)}
          />
        }
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
            className={`character${selectedCharacter ? ' modal-open' : ''}`}
            onClick={() => setSelectedCharacter(character)}
          />
        ))}
      </div>
      <footer>
        <hr />
        <p>Made By Jansel Roa</p>
        <p>Github: <a href="https://github.com/ninjadev23/RickAndMorty">ninjadev23</a></p>
        <p>API: <a href="https://rickandmortyapi.com/">Rick and Morty API</a></p>
        <p>2025</p>
      </footer>
    </>
  )
}

export default App
