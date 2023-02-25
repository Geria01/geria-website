import { strapiUrl } from '@/utils';
import strapiApi from '@/api';
import cookie from 'cookie';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const data = { identifier: email, password };

    try {
      const apiRes = await strapiApi.post('/api/auth/local/', data);
      const jwt = apiRes.data.jwt;
      const id = apiRes.data.user.id;

      res.setHeader('Set-Cookie', [
        cookie.serialize('token', jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        }),
        cookie.serialize('userid', id, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: 'strict',
          path: '/',
        }),
      ]).json({ message: "success", user: apiRes.data.user });
    } catch (error) {
      if (!error.response.data.error.message) {
        return res.status(500).json({ message: 'Internal server error' });
      } else {
        const messages = error.response.data.error.message;
        console.log('next api ======= ', error.response.data);
        return res.status(400).json({ message: messages });
      }
    }
  }
}
