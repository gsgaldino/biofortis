const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScOUiFaaK14E_A_34azKIM8-8TODVs5MYrebB6g-kV3N487Tw/formResponse';

export async function sendForm({ name, email, phone }) {
  const payload = new FormData();
  payload.append('entry.1003152132', name);
  payload.append('entry.1461062719', email);
  payload.append('entry.886383623', phone);

  const headers = new Headers();
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  try {
    await fetch(formUrl, {
      mode: 'no-cors',
      method: 'post',
      body: payload,
    });
  } catch (error) {
    console.log('error', error);
  }
}
