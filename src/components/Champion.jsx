const Champion = ({ champion, deleteChamp }) => {
  const { name, imgUrl, years, country } = champion;
  return (
    <div className="col">
      <div
        style={{ borderRadius: "15px", boxShadow: "0 0 20px #ccc" }}
        className="card h-100"
      >
        <img
          style={{ borderRadius: "15px" }}
          src={imgUrl}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{years}</h6>
          <p className="card-text">{country}</p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={deleteChamp}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Champion;
