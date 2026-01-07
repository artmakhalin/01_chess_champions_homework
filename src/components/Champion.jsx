const Champion = ({ name, imgUrl, years, country }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={imgUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{years}</h6>
          <p className="card-text">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default Champion;
