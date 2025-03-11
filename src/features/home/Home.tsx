import './home.css';
import {HomeCards} from './home_cards';
import {HomeContent} from './home_content';

export const Home = () => {

    return (
        <div className="home">
            <HomeContent/>
            <HomeCards/>
        </div>
    );
};
