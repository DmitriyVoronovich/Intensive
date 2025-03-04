import './home.css';
import {HomeCards} from './home_cards';
import {HomeContent} from './home_content';
import {useEffect} from "react";
import {getGenres, getPlatforms, setClearGame} from "../../entities";
import {useAppDispatch} from "../../types";

export const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(setClearGame());
    }, []);

    return (
        <div className="home">
            <HomeContent/>
            <HomeCards/>
        </div>
    );
};
