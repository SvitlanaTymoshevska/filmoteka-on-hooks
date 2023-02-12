import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchCast } from "services/api-films-service";
import { List, Item, Img, Plug, Accent } from "components/Cast/Cast.styled";

const getUniqueCast = (cast) => {
    let actors = cast.reduce((acc, actor) => {
        if (acc.map[actor.id]) // если данный актер уже был
        return acc; // ничего не делаем, возвращаем уже собранное

        acc.map[actor.id] = true; // помечаем актера, как обработанный
        acc.actors.push(actor); // добавляем объект в массив актеров
        return acc; // возвращаем собранное
    }, {
        map: {}, // здесь будут отмечаться обработанные актеры
        actors: [] // здесь конечный массив уникальных актерев
    }).actors; // получаем конечный массив
    
    return actors;
};

const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState(null);

    let uniqueCast = null;

    if (cast) {
        uniqueCast = getUniqueCast(cast);
    }
    
    useEffect(() => {
        fetchCast(id).then(filmCast => {
            setCast(filmCast);
        });
    }, [id]);

    return (
        uniqueCast && (
            <List>
                {uniqueCast.map(({ id, character, name, profile_path }) => { 
                    return (
                        <Item key={id}>
                            {profile_path ? (<Img
                                src={`https://image.tmdb.org/t/p/w1280/${profile_path}`}
                                alt={`Poster of ${name}`}
                                loading="lazy"
                            />) :  <Plug>Poster not found</Plug>}
                            
                            <Accent>{name}</Accent>
                            <p>Character: {character}</p>
                        </Item>
                    )
                })}   
            </List>  
        )
    );
};

export default Cast;