
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Breakfast from './Breakfast';
import { useContext } from 'react';
import { OrderObject } from './OrderObject';
import { RequiredInputChecker } from './RequiredInputChecker';
import styles from '../CSS/Menu.module.css';
import Summary from "./Summary";


function Menu(){
    const [selectedCategory, setSelectedCategory] = useState(null);
    RequiredInputChecker();
    const{order} = useContext(OrderObject);
    const nav = useNavigate();
    const[showMenu, setShowMenu] = useState(false);
    const fullMenuOpening = (category) => {
        console.log("catrgory is",{category});
        setSelectedCategory(category)
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
                <button onClick={() => fullMenuOpening("Breakfasts")}>Breakfasts</button>
<button onClick={() => fullMenuOpening("BreakfastSandwiches")}>Breakfast Sandwiches</button>
<button onClick={() => fullMenuOpening("Sandwiches")}>Sandwiches</button>
<button onClick={() => fullMenuOpening("HotPlates")}>Hot Plates</button>
<button onClick={() => fullMenuOpening("SideOrders")}>Sides</button>
<button onClick={() => fullMenuOpening("DeliSandwiches")}>Deli Sandwiches</button>
<button onClick={() => fullMenuOpening("DeliPlates")}>Deli Plates</button>
<button onClick={() => fullMenuOpening("Salads")}>Salads</button>
<button onClick={() => fullMenuOpening("Beverages")}>Drinks</button>

      </div>
      {showMenu && selectedCategory && (
  <div className={styles.menuContainer}>
    <Breakfast category={selectedCategory} />
  </div>
)}
       <div className={styles.summary}>
        <Summary />
      </div>
            </div>
           
            
           
        </div>
    )

}
export default Menu;