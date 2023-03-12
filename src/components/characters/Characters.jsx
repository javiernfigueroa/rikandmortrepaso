// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getAllCharacters } from "../../redux/actions";
// import CharacterCard from "../characterCard/CharacterCard";

// const Characters = () => {
//     const dispatch = useDispatch();
//     const characters = useSelector(state => state.characters);

//     useEffect(() => {
//         dispatch(getAllCharacters())
//     },[]);

//     console.log(characters)

//     return(
//         <>
//             {
//                 characters.map(character => {
//                     return <CharacterCard
//                        key={character.id}
//                        name={character.name}
//                        id={character.id}
//                        image={character.image}
//                        gender={character.gender}
//                     />
//                 })
//             }
//         </> 
//     )
// }

// export default Characters;

//usa el codigo de arriba o el de abajo, no los dos, abajo es con componente de clases.

import React from "react";
import { connect } from "react-redux"
import { getAllCharacters } from "../../redux/actions";
import CharacterCard from "../characterCard/CharacterCard";

class Characters extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getAllCharacters();
    }

    render() {
        return(
            <>
                {
                    this.props.characters.map(character => {
                        return <CharacterCard
                           key={character.id} 
                           id={character.id}
                           name={character.name}
                           image={character.image}
                           gender={character.gender}
                        />
                    })
                }
            </>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCharacters: () => dispatch(getAllCharacters())
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(Characters)

