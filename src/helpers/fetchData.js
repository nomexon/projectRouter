export async function getData(url, id = "", err = "error") {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/${url}/${id}`
    );
    if (data.ok) {
      const res = await data.json();
      return res;
    }
  } catch (error) {
    alert(error);
  }
}
