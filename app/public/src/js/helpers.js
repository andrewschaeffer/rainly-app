
/**
 * API Call Function
 * 
 * @param url Url to make API requests 
 * @returns API data
 */
export const AJAX = async function (url) {
  try {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
