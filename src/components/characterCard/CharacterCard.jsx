import { Link } from "react-router-dom";

const CharacterCard = ({id, name, gender, image}) => {
    return(
        <div style={{justifyContent: 'center', padding:'2 rem'}}>
            <img src={image} alt={name} />

            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>

            <h3>Gender: {gender}</h3>
        </div>
    )
}

export default CharacterCard;