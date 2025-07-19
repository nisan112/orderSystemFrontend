import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderObject } from './OrderObject';


function Home(){
     const { setOrder } = useContext(OrderObject);
    const[tableNumber,settableNumber] = useState('');
    const[guestNumber,setguestNumber] = useState('');
    const navigate = useNavigate();
    const submission = ()=> {
      setOrder(prev => ({
      ...prev,
      tableNumber,
      guestNumber
    }));
    navigate('/menu');
  };

    
    return(
        <div className="container">
            <p>Enter table number:</p>
                <input type="number" className="tabelNumber" value={tableNumber} onChange={(e)=>settableNumber(e.target.value)}></input>
            <p>Number of Guests:
                <input type="number" className="guestNumber" value={guestNumber} onChange={(e)=> setguestNumber(e.target.value)}></input>
            </p>
            <button type="button" onClick={submission}>Confirm</button>
        </div>
    )
}

export default Home;
