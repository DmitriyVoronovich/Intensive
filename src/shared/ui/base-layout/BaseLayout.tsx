import {ReactNode, useEffect} from 'react';
import css from './BaseLayout.module.css';
import {useAppDispatch} from "../../../types";
import {getGenres, getPlatforms} from "../../../entities";

interface Props {
    header?: ReactNode;
    outlet?: ReactNode;
}

export const BaseLayout = ({header, outlet}: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, []);

    return (
        <div className={css.page}>
            <div className={css.container}>
                <div className={css.header}>{header}</div>
                <div className={css.outlet}>{outlet}</div>
            </div>
        </div>
    );
};
