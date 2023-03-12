import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterDetail, cleanCharacterDetail} from "../../redux/actions";
// import * as actions from "../..redux/actions"

const CharacterDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const {image, name, species, origin, gender, status} = useSelector(state => state.characterDetail);

    useEffect(() => {
        dispatch(getCharacterDetail(id))

        return () => dispatch(cleanCharacterDetail);
    }, [])

    return (
        <div>
            <img src={image} />
            <h1>{name}</h1>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Status: {status}</h3>
            <h3>Origin: {origin?.name}</h3>
        </div>
    )
}

export default CharacterDetail;