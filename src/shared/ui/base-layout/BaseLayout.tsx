import {ReactNode, useEffect} from 'react';
import css from './BaseLayout.module.css';
import {useAppDispatch} from "../../../types";
import {getGenres, getPlatforms, logoutUser, setUser} from "../../../entities";
import {getUserFromLS} from "../../utils";

interface Props {
    header?: ReactNode;
    outlet?: ReactNode;
}

export const BaseLayout = ({header, outlet}: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms());
        const storedUser = getUserFromLS();
        if (storedUser) {
            dispatch(setUser(storedUser));
        } else {
            dispatch(logoutUser());
        }
    }, [dispatch, outlet]);

    return (
        <div className={css.page}>
            <div className={css.container}>
                <div className={css.header}>{header}</div>
                <div className={css.outlet}>{outlet}</div>
            </div>
        </div>
    );
};
