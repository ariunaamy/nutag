import "./ImageWithText.scss";

const ImageWithText = ({
  imageUrl,
  altText,
  overlayText,
}: {
  imageUrl: string;
  altText: string;
  overlayText: string;
}) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={altText} className="background-image" />
      <div className="overlay-text">{overlayText}</div>
    </div>
  );
};

export default ImageWithText;
