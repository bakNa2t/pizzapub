const URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${URL}/menu`);

  // check for errors if fetch fails
  if (!res.ok) throw new Error("Could not fetch menu");

  const { data } = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${URL}/order/${id}`);

  // check for errors if fetch fails
  if (!res.ok) throw new Error(`Could not retrieve order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // check for errors if fetch fails
    if (!res.ok) throw new Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Could not create order");
  }
}

export async function updateOrder(id, updateOrder) {
  try {
    const res = await fetch(`${URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // check for errors if fetch fails
    if (!res.ok) throw new Error();
  } catch (error) {
    throw Error("Could not update order");
  }
}
