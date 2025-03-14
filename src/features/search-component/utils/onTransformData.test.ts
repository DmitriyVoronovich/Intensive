import { onTransformData } from './onTransformData.ts';

type DataItem = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
};

type Props = DataItem[];

describe('Transforming input data using the onTransformData function', () => {
  it('should transform data correctly', () => {
    const testData: Props = [
      {
        id: 1,
        name: 'Action',
        slug: 'action',
        games_count: 100,
        image_background: 'https://example.com/action.jpg',
      },
      {
        id: 2,
        name: 'Adventure',
        slug: 'adventure',
        games_count: 80,
        image_background: 'https://example.com/adventure.jpg',
      },
    ];

    const expectedResult = [
      { value: 1, label: 'Action' },
      { value: 2, label: 'Adventure' },
    ];

    const result = onTransformData(testData);

    expect(result).toEqual(expectedResult);
  });

  it('should return an empty array for empty input', () => {
    const emptyData: Props = [];
    const result = onTransformData(emptyData);
    expect(result).toEqual([]);
  });

  it('should handle single item correctly', () => {
    const singleItemData: Props = [
      {
        id: 3,
        name: 'RPG',
        slug: 'rpg',
        games_count: 50,
        image_background: 'https://example.com/rpg.jpg',
      },
    ];

    const expectedResult = [{ value: 3, label: 'RPG' }];

    const result = onTransformData(singleItemData);
    expect(result).toEqual(expectedResult);
  });
});
