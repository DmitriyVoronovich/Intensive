import './home.css';
import {HomeCards} from './home_cards';
import {HomeContent} from './home_content';
import {useEffect} from "react";
import {getGenres, getPlatforms, setClearGame} from "../../entities";
import {useAppDispatch} from "../../types";
import { setUser, logoutUser } from '../../entities';
import { STORAGE_KEYS } from '../../shared';

export const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(setClearGame());
        const storedUser = localStorage.getItem(STORAGE_KEYS.USER);
        if (storedUser) {
            dispatch(setUser(JSON.parse(storedUser)));
        } else {
            dispatch(logoutUser());
        }
    }, []);

    return (
        <div className="home">
            <HomeContent/>
            <HomeCards/>
        </div>
    );
};
