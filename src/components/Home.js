import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { OrderObject } from './OrderObject';
import styles from '../CSS/Home.module.css';

function Home() {
  const { setOrder } = useContext(OrderObject);
  const [tableNumber, settableNumber] = useState('');
  const [guestNumber, setguestNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check if redirected with an error message
  useEffect(() => {
    if (location.state?.error) {
      setErrorMsg(location.state.error);
      // Clear state so the error doesn't show after refresh
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const submission = () => {
    setOrder(prev => ({
      ...prev,
      tableNumber,
      guestNumber
    }));
    navigate('/menu');
  };

  return (
    <div className={styles.container}>
     

      <div className={styles.input}>
        {errorMsg && <p className={styles.error}>{errorMsg}</p>}

        <p className={styles.instruction}>Table Number:</p>
        <input
          type="number"
          className={styles.tablenumber}
          value={tableNumber}
          onChange={(e) => settableNumber(e.target.value)}
        />

        <p className={styles.instruction}>Guest:</p>
        <input
          type="number"
          className={styles.guestnumber}
          value={guestNumber}
          onChange={(e) => setguestNumber(e.target.value)}
        />

        <button
          type="button"
          onClick={submission}
          className={styles.confirmbutton}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Home;

