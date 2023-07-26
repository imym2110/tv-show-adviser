import s from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div className={s.container}>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_show_item}>
              <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
