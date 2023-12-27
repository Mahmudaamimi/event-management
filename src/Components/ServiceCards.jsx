import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const ServiceCards = () => {
    const Servicecards = useLoaderData();
    return (
        <div>
            <h1 className="text-center py-5 md:text-4xl font-bold">Our Services</h1>
           
           <div  className="grid md:grid-cols-3 gap-4 py-6">
           {
                Servicecards.map(card => <Card key={card.id} card={card}></Card>)
            }
           </div>
            
        </div>
    );
};

export default ServiceCards;