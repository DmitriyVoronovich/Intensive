import {GenreResultType, PlatformResultType} from "../../../types";

type Props = [] | PlatformResultType[] | GenreResultType[];

export const onTransformData = (data: Props) => {
    return data.map((item) => {
        return {
            value: item.id,
            label: item.name
        };
    });
};