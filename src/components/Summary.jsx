import React, { useContext, useState } from "react";
import { OrderObject } from "./OrderObject";
import { Submission } from "./Submission";

function Summary() {
  const { order, setOrder } = useContext(OrderObject);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Edit states
  const [editingIndex, setEditingIndex] = useState(null);
  const [editNote, setEditNote] = useState("");

  const handleDelete = (index) => {
    setOrder((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditNote(order.items[index].note || "");
  };

  const saveEdit = () => {
    setOrder((prev) => {
      const newItems = [...prev.items];
      newItems[editingIndex] = {
        ...newItems[editingIndex],
        note: editNote.trim() || undefined,
      };
      return {
        ...prev,
        items: newItems,
      };
    });
    setEditingIndex(null);
    setEditNote("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditNote("");
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
  const result = await Submission(order);
  console.log("Order submitted successfully:", result);
  setSuccess(result.message || "Order submitted successfully!"); // use backend message if present
  
   setTimeout(() => {
    setOrder({
      tableNumber: '',
      guestNumber: '',
      items: [],
    });

    // Optionally navigate after reset
    // navigate('/');
  }, 2000);
} catch (err) {
  console.error("Error submitting order:", err);
  setError("Failed to submit order. Please try again.");
} finally {
  setLoading(false);
}

  };

  return (
    <div>
      <h2>Order Summary</h2>
      <p>
        <strong>Table Number:</strong> {order.tableNumber || "Not set"}
      </p>
      <p>
        <strong>Guest Number:</strong> {order.guestNumber || "Not set"}
      </p>

      <h3>Items Ordered:</h3>
      {order.items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {order.items.map((item, index) => (
            <li key={index} style={{ marginBottom: "12px" }}>
              <strong>{item.name}</strong>
              <br />
              {editingIndex === index ? (
                <>
                  <textarea
                    value={editNote}
                    onChange={(e) => setEditNote(e.target.value)}
                    rows={3}
                    style={{ width: "100%" }}
                  />
                  <div>
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={cancelEdit} style={{ marginLeft: "8px" }}>
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {item.note && (
                    <em
                      style={{
                        color: "red",
                        display: "block",
                        marginTop: "4px",
                      }}
                    >
                      {item.note}
                    </em>
                  )}
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{ marginLeft: "8px" }}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Submitting..." : "Done"}
      </button>
    </div>
  );
}

export default Summary;

