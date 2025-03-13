import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {clearHistory, getColumnsWithProps, getHistory} from "../utils";
import {
    getGenres,
    getPlatforms,
    getSearchGames,
    selectGenres,
    selectPlatforms,
    setQueryParams
} from "../../../entities";
import {HistoryType, QueryParamsType, useAppDispatch, useAppSelector} from "../../../types";
import {Table} from "antd";
import css from './History.module.css';
import {BaseButton, createParams, PATHS} from "../../../shared";

export const History = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const genresList = useAppSelector(selectGenres);
    const platformsList = useAppSelector(selectPlatforms);
    const [history, setHistory] = useState<HistoryType[]>([]);

    useEffect(() => {
        setHistory(getHistory());
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, []);

    const restoreSearch = ({search, genres, platforms}: QueryParamsType) => {
        const queryParams = {
            search,
            genres,
            platforms,
        };
        const query = createParams(queryParams);
        dispatch(getSearchGames(query));
        dispatch(setQueryParams(queryParams));
        navigate(PATHS.SEARCH);
    };
    const {columns} = getColumnsWithProps({genresList, platformsList, restoreSearch});

    const clearHistoryHandler = () => {
        clearHistory();
        setHistory([]);
    };

    return (
        <div className={css.container}>
            <div className={css.contentWrapper}>
                <h3 className={css.title}>История поисковых запросов</h3>
                {history.length === 0 ? (
                    <p className={css.description}>История поисков пуста.</p>
                ) : (
                    <>
                        <BaseButton onClick={clearHistoryHandler}>
                            Очистить историю
                        </BaseButton>
                        <Table<HistoryType>
                            columns={columns}
                            dataSource={history}
                            pagination={false}
                            className={css.Table}
                            rowKey={'id'}
                        />
                    </>
                )}
            </div>
        </div>
    );
};
