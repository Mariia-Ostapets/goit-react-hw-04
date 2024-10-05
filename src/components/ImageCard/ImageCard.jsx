import css from "./ImageCard.module.css";

export default function ImageCard({
  urls: { small, regular },
  alt,
  onModalOpen,
}) {
  return (
    <img
      className={css.galleryImage}
      src={small}
      alt={altDescription}
      onClick={() => onModalOpen(regular, alt)}
    ></img>
  );
}
