import { useParams } from 'react-router-dom'
import css from './ParticipantsList.module.css'
import { Pagination } from '../Pagination/Pagination.jsx'
import { getOneEvent } from '../../axios.js'
import { useEffect, useState } from 'react'


export const ParticipantsList = ({list}) => {

const { title } = useParams()
const { eventId } = useParams()

const [event, setEvent] = useState({participants: []})

useEffect(() => {
    const fetchEvent = async () => {
        try {
            const data = await getOneEvent(eventId)
            console.log(data.event)
            setEvent(data.event);
        } catch (error) {
            console.error('Error fetching events:', error)
        }
    };

    fetchEvent();
}, [])

if (!event) {
    return <p>Wait a minute...</p>;
}

    return (
        <div className={css.listDiv}>
            <h2>"{title}" Participants</h2>
            <ul className={css.list}>
                { event.participants.length > 0 ? event.participants.map(item => {
                    return (
                    <li
                    className={css.item}
                    key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                    </li>
                    )
                }) : 
                <p>We do not have any participant...</p> }
            </ul>
            <Pagination/>
        </div>
    )
}
