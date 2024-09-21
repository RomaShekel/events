
import { NavLink } from 'react-router-dom'
import css from './EventCard.module.css'

export const EventCard = ({ title, description, eventId}) => {

    return (
        <li className={css.eventCard}>
        <h3>{title}</h3>
        <p>{description}</p>
        
        <nav className={css.eventCardNav}>
            <NavLink to={`/event/${eventId}`}>Register</NavLink>
            <NavLink>View</NavLink>
        </nav>
        </li>
    )
}