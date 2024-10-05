import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.galleryList}>
      {items.map((item) => (
        <li className={css.galleryItem} key={item.id}>
          <ImageCard
          // small={item.urls.small}
          // regular={item.urls.regular}
          // alt={item.alt_description}
          />
        </li>
      ))}
    </ul>
  );
}
