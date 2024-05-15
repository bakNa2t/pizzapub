export async function getPosition({ latitude, longitude }) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );

  // check for errors if fetch fails
  if (!res.ok) throw Error("Could not get position");

  const data = await res.json();
  return data;
}
