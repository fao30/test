function Card({ nameProps, ageProps }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Competition Card</h2>
        <p>NAMA PESERTA: {nameProps}</p>
        <p>AGE: {ageProps}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Hire Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
