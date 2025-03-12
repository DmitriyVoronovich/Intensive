import './home.css';
import {HomeCards} from './home_cards';
import {HomeContent} from './home_content';
import {useEffect} from "react";
import {useAppDispatch} from "../../types";
import {getGenres, getPlatforms} from "../../entities";

export const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, []);

    return (
        <div className="home">
            <HomeContent/>
            <HomeCards/>
        </div>
    );
};
