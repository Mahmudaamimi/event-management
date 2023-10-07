
const Card = ({ card }) => {
    const { image, title, price, description } = card;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn bg-green-500 text-white">Read more...</button>
                </div>
            </div>
        </div>
    );
};

export default Card;