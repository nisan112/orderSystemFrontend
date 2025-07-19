// src/services/orderService.js

export async function Submission(order) {
  try {
    console.log(order);
    const response = await fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error("Failed to submit order");
    }

    const data = await response.json();
    return data; // return data on success
  } catch (error) {
    throw error; // throw error to be handled by caller
  }
}
