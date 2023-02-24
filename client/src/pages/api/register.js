import { strapiUrl } from '@/utils';
import { setCookie } from 'nookies'

export default async function register(req, res) {
  const { firstname, lastname, email, password, gender, dob, address, phone } = req.body;
  if (firstname.trim().lenght === 0 ||
    lastname.trim().lenght === 0 ||
    email.trim().lenght === 0 ||
    password.trim().lenght === 0 ||
    dob.trim().lenght === 0 ||
    address.trim().lenght === 0) {
    res.status(400);
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      username: firstname.toLowerCase(),
      password,
      gender,
      dob,
      address,
      phone,
    })
  };

  try {
    const response = await fetch(`${strapiUrl}/api/auth/local/register`, options);
    console.log('response', response);
    res.status(200).end();
  } catch (e) {
    res.status(400).send(e.response.data.message[0].messages[0]);
  }
}
