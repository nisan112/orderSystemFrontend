import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { OrderObject } from "./OrderObject";  // adjust path as needed

export function RequiredInputChecker() {
  const { order } = useContext(OrderObject);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname !== "/" &&
      (!order.tableNumber || !order.guestNumber)
    ) {
      navigate("/", { replace: true,
         state: { error: "!!!  Please fill Table and Guest Number  !!!" }
      });
    }
  }, [order, navigate, location]);
}
