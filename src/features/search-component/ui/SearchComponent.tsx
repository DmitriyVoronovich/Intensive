import Search from 'antd/es/input/Search';
import {BaseSelect, PATHS} from '../../../shared';
import {SearchProps} from 'antd/es/input';
import {
    getSearchGames,
    selectGenres,
    selectPlatforms, selectQueryParams,
    setQueryParams
} from '../../../entities';
import {useAppDispatch, useAppSelector} from '../../../types';
import css from './SearchComponent.module.css';
import './SearchComponent.css';
import { useCallback, useEffect, useState} from 'react';
import {SelectItemWrapper} from './select-item-wrapper';
import {onTransformData, onTransformValue} from "../model";
import {useDebounce} from "use-debounce";
import {useLocation, useNavigate} from "react-router-dom";

type ValueType = number[];
type OnSearchFunction = SearchProps['onSearch'];

export const SearchComponent = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const locate = useLocation();
    const queryParams = useAppSelector(selectQueryParams);
    const genresList = useAppSelector(selectGenres);
    const platformsList = useAppSelector(selectPlatforms);

    const [platforms, setPlatforms] = useState<ValueType>(queryParams.platforms || []);
    const [genres, setGenres] = useState<ValueType>(queryParams.platforms || []);
    const [searchTerm, setSearchTerm] = useState(queryParams.search || '');

    const [debouncedSearchTerm] = useDebounce(searchTerm, 1500);

    const createSearchParams = useCallback(() => {
        const params: {
            search?: string;
            genres?: string;
            platforms?: string;
        } = {};

        if (debouncedSearchTerm && debouncedSearchTerm.trim() !== '') {
            params.search = debouncedSearchTerm.trim();
        }

        if (genres && genres.length !== 0) {
            params.genres = onTransformValue(genres);
        }

        if (platforms && platforms.length !== 0) {
            params.platforms = onTransformValue(platforms);
        }

        return params;
    }, [debouncedSearchTerm, genres, platforms]);

    const performSearch = (searchParams: ReturnType<typeof createSearchParams>) => {
        if (Object.keys(searchParams).length > 0) {
            dispatch(getSearchGames(searchParams));
        }
    };

    useEffect(() => {
        const searchParams = createSearchParams();
        performSearch(searchParams);
    }, [createSearchParams]);

    const onSearch: OnSearchFunction = useCallback(() => {
        const searchParams = createSearchParams();
        dispatch(setQueryParams({
            search: searchTerm,
            genres: genres,
            platforms: platforms,
        }))
        if (locate.pathname !== PATHS.SEARCH) {
            return navigate(PATHS.SEARCH)
        }
        performSearch(searchParams);
    }, [createSearchParams]);

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

    const onSelectGenres = (value: ValueType) => setGenres(value);
    const onSelectPlatforms = (value: ValueType) => setPlatforms(value);

    return (
        <div className={css.searchWrapper}>
            <Search
                placeholder="Искать игру по названию"
                allowClear
                enterButton="Поиск"
                size="large"
                onSearch={onSearch}
                onChange={onSearchChange}
                value={searchTerm}
            />
            <div className={css.selectWrapper}>
                <SelectItemWrapper name={'Выберите жанр игры'}>
                    <BaseSelect
                        options={onTransformData(genresList)}
                        placeholder={'Выберите жанр'}
                        onChange={onSelectGenres}
                        defaultValue={queryParams.genres}
                        value={genres}
                    />
                </SelectItemWrapper>
                <SelectItemWrapper name={'Выберите платформу'}>
                    <BaseSelect
                        options={onTransformData(platformsList)}
                        placeholder={'Выберите платформу'}
                        onChange={onSelectPlatforms}
                        defaultValue={queryParams.platforms}
                        value={platforms}
                    />
                </SelectItemWrapper>
            </div>
        </div>
    );
};
