import strapiApi from '@/api';

import cookie from 'cookie';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'GET') {
    const { token } = cookie.parse(req.headers.cookie);
    if (!token) {
      res.status(403).json({ message: 'not authorized' });
    }
    try {
      const apiRes = await strapiApi.get('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });

      res.status(200).json({
        user: apiRes.data.username,
        email: apiRes.data.email,
        id: apiRes.data.id,
      });
    } catch (error) {
      res.status(403).json({ message: 'not authorized' });
    }
  };
};
