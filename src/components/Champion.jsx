const Champion = ({ name, imgUrl, years, country }) => {
  return (
    <div className="card">
        <img src={imgUrl} className="card-img-top" alt="Champion" />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{years}</h6>
            <p className="card-text">{country}</p>
        </div>
    </div>
  )
}

export default Champion