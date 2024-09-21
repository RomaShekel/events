import css from './EventsList.module.css'
import { EventCard } from '../EventCard/EventCard.jsx'
import { Pagination } from '../Pagination/Pagination.jsx'
export const EventsList = ({name, arrayOfDta}) => {
    const onChange = (e) => {
        console.log('deidar')
    }

    return (
        <>
        <h1>Here is event list</h1>
        <div className={css.listDiv}>
            <h2>{name}</h2>
            <ul className={css.eventsList}>
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
                <EventCard title={'Title'} description={'Description'} eventId={'someId'} />
            </ul>

            <div className={css.pagination}>
            <Pagination
            className={css.pagination}
            activePage={2}
            itemsCountPerPage={12}
            pageCount={6}
            totalItemsCount={99}
            pageChange={onChange}
              />
            </div>
        </div>
        </>
    )
}