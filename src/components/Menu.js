
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Breakfast from './Breakfast';
import { useContext } from 'react';
import { OrderObject } from './OrderObject';
import { RequiredInputChecker } from './RequiredInputChecker';
import styles from '../CSS/Menu.module.css';
import Summary from "./Summary";


function Menu(){
    RequiredInputChecker();
    const{order} = useContext(OrderObject);
    const nav = useNavigate();
    const[showMenu, setShowMenu] = useState(false);
    const fullMenuOpening = () => {
    setShowMenu(!showMenu);
};

    return(
        <div className={styles.container}>
            <div className={styles.infos}>
                 <p className={styles.detailed}>Table: {order.tableNumber}</p>
                 <p className={styles.detailed}>Guests: {order.guestNumber}</p>
            

            </div>
            <div className={styles.lowercont}>
                 <div className={styles.menuListing}>
                <button onClick={fullMenuOpening}>Breakfasts</button>
                <button>Sandwiches</button>
                <button>Hot Plates</button>
                <button>Sides</button>
                <button>Deli</button>
                <button>Burgers</button>
                 <button>Salad</button>
                  <button>Drink</button>
      </div>
       {showMenu && <div className={styles.breakfast}><Breakfast /> </div>}
       <div className={styles.summary}>
        <Summary />
      </div>
            </div>
           
            
           
        </div>
    )

}
export default Menu;