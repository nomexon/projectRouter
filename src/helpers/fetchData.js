export async function getData(url, id = "", err = "error") {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/${url}/${id}`
    );
    if (data.ok) {
      const res = await data.json();
      return res;
    } else {
      alert(err);
      return [];
    }
  } catch (error) {
    alert(error);
  }
}
