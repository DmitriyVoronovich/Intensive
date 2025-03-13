import css from './ScreenshotsContent.module.css';
import {useAppSelector} from "../../../../types";
import {selectGameScreenshots} from "../../../../entities/gameDetails/model/selectors.ts";

export const ScreenshotsContent = () => {
    const screenshots = useAppSelector(selectGameScreenshots);

    return (
        <section className={css.screenshotsWrapper}>
            <h6 className={css.screenshotsTitle}>Скриншоты игры:</h6>
            <div className={css.screenshotsImgWrapper}>
                {
                    screenshots?.results.map((item) => {
                        return (
                            <img src={item.image} key={item.image} alt={'Game screenshots'}
                                 className={css.screenshotsImg}/>
                        )
                    })
                }
            </div>
        </section>
    );
};