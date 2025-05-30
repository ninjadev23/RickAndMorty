import "./CharacterInfo.css";
export function CharacterInfo({ name, status, gender, imageUrl, species, location, episodes, origin, onClick }) {
    const episodesList = []
    episodes.map(e=>{
      const match = e.match(/\/(\d+)$/);
      episodesList.push(match ? match[1] : null)
    })
    
    return (
    <div className="character-info">
      <button className="close-button" onClick={onClick}>
        <img src="/public/close-icon.svg"/>
      </button>
      <img src={imageUrl} alt={name} />
      <div className="character-data">
        <h2>{name}</h2>
        <p><span>Status:</span> {status}</p>
        <p><span>Species:</span> {species}</p>
        <p><span>Gender:</span> {gender}</p>
        <p><span>Last known location:</span></p>
        <p className="character-location">{location}</p>
        <p><span>Origin:</span> {origin}</p>
      </div>
      <div className="episodes">
        <h3>Episodes where this character appears: </h3>
        <div className="episodes-container">
          {episodesList.map((episode, index)=>(
            <div key={index}>{episode}</div>
          ))}
        </div>
      </div>
    </div>
)}