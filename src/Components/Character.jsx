import "./Character.css"
export function Character({name, status, gender, imageUrl, species, location}){
    return (
        <div className="character">
            <img src={imageUrl} alt={name} />
            <div className="character-data">
                <h2>{name}</h2>
                <p><span>Status:</span> {status}</p>
                <p><span>Species:</span> {species}</p>
                <p><span>Gender:</span> {gender}</p>
                <p><span>Last known location:</span></p>
                <p className="character-location">{location}</p>
            </div>
        </div>
    )
}