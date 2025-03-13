import './home.css';
import {HomeCards} from './home_cards';
import {HomeContent} from './home_content';
import {useEffect} from "react";
import {useAppDispatch} from "../../types";
import {getGenres, getPlatforms, setClearSearch} from "../../entities";

export const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(setClearSearch())
    }, []);

    return (
        <div className="home">
            <HomeContent/>
            <HomeCards/>
        </div>
    );
};
