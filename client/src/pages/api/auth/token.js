import strapiApi from '@/api';

import cookie from 'cookie';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'GET') {
    const { token } = cookie.parse(req.headers.cookie);
    res.status(200).json({ token });
  };
};
