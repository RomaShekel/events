import 'normalize.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { AppBar } from './components/AppBar/AppBar.jsx'
import { CreateEvent } from './components/CreateEvent/CreateEvent.jsx'
import { EventsList } from './components/EventsList/EventsList.jsx'
import { RegistrationInEvent } from './components/RegistrationInEvent/RegistrationInEvent.jsx';
import { LoginPage } from './components/LoginPage/LoginPage.jsx';
import { SignupPage } from './components/SignupPage/SignupPage.jsx';
import { ParticipantsList } from './components/ParticipantsList/ParticipantsList.jsx';
function App() {

  return (
    <>
    <AppBar/>
    <Routes>
      <Route path='/' element={<EventsList name={'Events'}/>} />
      <Route path='/event/:eventId' element={<RegistrationInEvent/>} />
      <Route path='/event/:eventId/:title/participants' element={<ParticipantsList list={"ss"} />} />
      <Route path='/myEvents' element={<EventsList name={'Events where You are participant'}/>} />
      <Route path='/createEvent' element={<CreateEvent />} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
    </Routes>
    </>
  )
}

export default App
