import type { EventsDto } from "../../pages/home/App";
import './card.css';

interface CardDto {
    event: EventsDto;
}

const Card = ({event}: CardDto) => {
    return (
        <div className="card-container">
            <img src={event.image} alt="logo-card" />
            <div className="card-infos">
                <h4 className="theme">{event.theme.name}</h4>
                <p className="date">{event.date.toLocaleDateString('pt-BR')}</p>
                <p className="title">{event.title}</p>
                <p></p>
            </div>
        </div>
    )
}

export default Card;