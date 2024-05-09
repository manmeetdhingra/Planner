import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import { PiFolderUserLight } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const [quote, setQuote] = useState();
    const [author, setAuthor] = useState();

    useEffect(() => {
      axios.get(`https://stoic-quotes.com/api/quote`)
      .then(res => (console.log(res.data), 
      setQuote(res.data.text,
      setAuthor(res.data.author)
      )))
      .catch(err => console.log(err))
    }, []);

    const navigate = useNavigate()

  return (
    <div className='main-container'>
        
        {/* <h1 style={{marginBottom: '30px', display: 'flex', justifyContent: 'center'}}> Your daily&nbsp;</h1>  */}
          <h1><Typewriter 
        options={{
          strings: ['Appointment Planner', 'Contact Diary'],
          autoStart: true,
          loop: true,
        }}
        />
        </h1>
        
        <hr/>
        <div className='stoic-container'>
        <h3>A nugget of Stoic Wisdom:</h3>
        {quote ? <h4>&#39; {quote} &#39;</h4> : "Loading..."}
        {author && <h4 style={{fontStyle: 'italic'}}>- {author}</h4>}
        </div>

        <div className='icon-container'>
        <PiUserCircleLight className='icon' style={{fontSize: '150px'}}/>
        <button onClick={() => navigate("/contacts")}>Contacts</button>
        </div>
        
        <br/>
        
        <div className="icon-container">
        <PiFolderUserLight className='icon' style={{fontSize: '150px'}}/>
        <button onClick={() => navigate("/appointments")}>Appointments</button>
        </div>


     
    </div>
  )
}
