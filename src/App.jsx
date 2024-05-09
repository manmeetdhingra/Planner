import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './Pages/Homepage/Homepage';
import Contacts from './Pages/Contacts/Contacts';
import Appointments from './Pages/Appointments/Appointments';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/appointments' element={<Appointments />}/>
      </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App
