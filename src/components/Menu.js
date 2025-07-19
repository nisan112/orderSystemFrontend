
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Breakfast from './Breakfast';
import { useContext } from 'react';
import { OrderObject } from './OrderObject';
import { RequiredInputChecker } from './RequiredInputChecker';


function Menu(){
    RequiredInputChecker();
    const{order} = useContext(OrderObject);
    const nav = useNavigate();
    const[showMenu, setShowMenu] = useState(false);
    const fullMenuOpening = () => {
    setShowMenu(!showMenu);
};

    return(
        <div className='container'>
            <div className='infos'>
                 Table: {order.tableNumber}
            guests: {order.guestNumber}

            </div>
            <div className='menuListing'>
                <button onClick={fullMenuOpening}>Breakfasts</button>
                <button>Sandwiches</button>
                <button>Hot Plates</button>
                <button>Sides</button>
                <button>Deli</button>
                <button>Burgers</button>
                {showMenu && <Breakfast />}
            </div>
           
        </div>
    )

}
export default Menu;