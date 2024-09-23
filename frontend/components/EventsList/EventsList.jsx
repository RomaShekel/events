import css from './EventsList.module.css'
import { EventCard } from '../EventCard/EventCard.jsx'
import { Pagination } from '../Pagination/Pagination.jsx'
import { useEffect, useState } from 'react'
import { getAllEvents } from '../../axios.js'

export const EventsList = ({name, arrayOfDta}) => {

    const [events, setEvents] = useState({
        data: [],
        page: 1,
        perPage: 10,
        totalPage: 0,
        count: 0,
    })

    useEffect(() => {
        const fetchEvents = async (page, perPage, fields) => {
            try {
                const data = await getAllEvents(page, perPage, fields)
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error)
            }
        };

        fetchEvents();
    }, [events.page])

    const handlePageChange = (newPage, setFunction) => {
        setEvents((prevState) => ({
            ...prevState,
            page: newPage,
        }));
    };

    if (!events.data || !Array.isArray(events.data)) {
        return <p>Wait a minute...</p>;
    }

    return (
        <>
        <div className={css.listDiv}>
            <h2>{name}</h2>
            <ul className={css.eventsList}>
                {events.data.map(event => {
                    return (
                        <EventCard 
                        key={event._id} 
                        title={event.name}  
                        description={event.description}
                        eventId={event._id} />
                    )
                })}
                
            </ul>

            <div className={css.pagination}>
            <Pagination
            setEvents={setEvents}
            className={css.pagination}
            activePage={events.page}
            itemsCountPerPage={events.perPage}
            pageCount={events.totalPage}
            totalItemsCount={events.count}
            pageChange={handlePageChange}
              />
            </div>
        </div>
        </>
    )
}