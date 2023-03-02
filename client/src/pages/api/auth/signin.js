import { strapiUrl } from '@/utils';
import strapiApi from '@/api';
import cookie from 'cookie';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const resp = await strapiApi.post('/api/auth/local/',
      { identifier: email, password });
      const { jwt } = resp.data;
      const { id } = resp.data.user;

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
      ]).json({ message: "success", user: resp.data.user });
    } catch (error) {
      if (!error.response.data.error.message) {
        return res.status(500).json({ message: 'Somthing went wrong, please try again!' });
      } else {
        const messages = error.response.data.error.message;
        return res.status(400).json({ message: 'Invalid login. Please try again.' });
      }
    }
  }
}
