type Props = number | number[];

export const onTransformValue = (data: Props): string => {
    return Array.isArray(data) ? data.join(',') : `${data}`;
};