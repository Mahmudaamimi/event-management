import { Link, useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const {Id} = useParams();
    const carddetails = useLoaderData()
    console.log(Id,carddetails)
    const findDetails = carddetails.find(card => card.id == Id);
    const { id,image, title, price, description } = findDetails;
    return (
        <div className="card lg:card-side bg-base-100 basis-1/4">
        <figure><img className="" src={image} alt="Album"/></figure>
        <div className="card-body basis-1/2">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
           <Link to = '/'><button className="btn bg-green-500 text-white mt-4">Go Home</button></Link>
          </div>
        </div>
      </div>
    
    );
};

export default CardDetails;