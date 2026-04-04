const GalleryCard = ({ item }) => {
  return (
    <div className="card_container">
      <div className="card">
        <div className="card_img_wrapper">
          <img src={item.img} alt={item.title} className="card_img" />
        </div>
        <h4 className="card_title">{item.title}</h4>
        <span className="card_sub_title">{item.subTitle}</span>
      </div>
    </div>
  );
};

export default GalleryCard;
