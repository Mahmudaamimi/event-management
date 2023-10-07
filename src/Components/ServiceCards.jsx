import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const ServiceCards = () => {
    const Servicecards = useLoaderData();
    return (
        <div className="grid md:grid-cols-3 gap-4 py-6">
            {
                Servicecards.map(card => <Card key={card.id} card={card}></Card>)
            }
            
        </div>
    );
};

export default ServiceCards;