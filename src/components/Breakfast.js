import { useContext, useState } from "react";
import { OrderObject } from "./OrderObject";
import { useNavigate } from "react-router-dom";
import { RequiredInputChecker } from "./RequiredInputChecker";
import styles from '../CSS/Breakfast.module.css';

function Breakfast() {
  RequiredInputChecker();
  const { order, setOrder } = useContext(OrderObject);
  const navigate = useNavigate();

  const [showChild, setShowChild] = useState(false);
  const [note, setNote] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const breakfastItems = [
    { name: "Egg", price: "$12" },
    { name: "Bacon", price: "$15" },
    { name: "Sausage", price: "$14" },
    { name: "Peameal Bacon", price: "$16" },
    { name: "Steak", price: "$25" },
    { name: "Smoked Meat", price: "$18" },
    { name: "Western Omlette", price: "$13" },
    { name: "Dutch Omlette", price: "$13" },
  ];

  const mods = (itemName, price) => {
    if (selectedItem && selectedItem.name === itemName) {
      setShowChild(false);
      setSelectedItem(null);
      setNote('');
    } else {
      setSelectedItem({ name: itemName, price });
      setShowChild(true);
    }
  };

  const confirmFood = () => {
    if (!selectedItem) return;

    const numericPrice = parseFloat(selectedItem.price.replace('$', ''));

    setOrder(prev => ({
      ...prev,
      items: [
        ...prev.items,
        {
          name: selectedItem.name,
          price: numericPrice,
          note: note.trim() || undefined
        }
      ]
    }));

    setNote('');
    setSelectedItem(null);
    setShowChild(false);
  };

  return (
    <div className={styles.container}>
      {/* Render clickable menu items */}
      {breakfastItems.map(item => (
  <div
    key={item.name}
    className={styles.items}
    onClick={() => mods(item.name, item.price)}
  >
    <p>{item.name}</p>

    {/* Show note input only if this is the selected item */}
    {selectedItem && selectedItem.name === item.name && showChild && (
      <div>
        <label>
          Note:
          <input
            type="text"
            className="enteredMods"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onClick={e => e.stopPropagation()} // prevent div's onClick triggering again
          />
        </label>
        <button onClick={(e) => { e.stopPropagation(); confirmFood(); }}>
          OK
        </button>
        </div>
      )}
        </div>
      ))}

     
      

      
    </div>
  );
}

export default Breakfast;
