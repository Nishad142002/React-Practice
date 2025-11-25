import "./style/card.css";

const Card = ({ user }) => {
  const {
    availability,
    pay,
    pic,
    name,
    designation,
    company,
    tag1,
    tag2,
    tag3,
    expe,
    descr,
  } = user;

  let compny = "aa";

  return (
    <div className="card">
      <div className="top">
        {availability === "available" ? (
          <div className="top-tag available">{availability}</div>
        ) : (
          <div className="top-tag work">{availability}</div>
        )}
        <div className="pic">
          <img src={pic} alt="" />
        </div>
        <div className="top-tag pay">${pay}/hr</div>
      </div>
      <div className="center">
        <div className="info">
          <h2 className="username">{name}</h2>
          <h4 className="designation">{designation}</h4>
          {company === "Freelancer" ? (
            <h4 className="freelancer">
              <i className="ri-user-line"></i>Freelancer
            </h4>
          ) : (
            <h4 className="compny">
              <i className="ri-building-line"></i>
              {company}
            </h4>
          )}
        </div>
        <div className="tags-container">
          <div className="tags">
            <p>{tag1}</p>
            <p>{tag2}</p>
            <p>{tag3}</p>
          </div>
          <div className="exp">
            <p>{expe}</p>
          </div>
        </div>
        <div className="description">{descr}</div>
      </div>
      <div className="btn">
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
