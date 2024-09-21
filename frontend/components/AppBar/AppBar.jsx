import { NavLink } from "react-router-dom"
import css from './AppBar.module.css'

export const AppBar = () => {

    return (
        <>
        <header className={css.header}>
            <nav>
                <NavLink to={'/'}>List</NavLink>
                <NavLink to={'/myEvents'}>My Events</NavLink>
                <NavLink to={'/createEvent'}>Create Event</NavLink>
            </nav>

            <nav>
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/signup'}>Signup</NavLink>
            </nav>
            
        </header>
        </>
    )
}