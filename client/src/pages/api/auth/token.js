import strapiApi from '@/api';

import cookie from 'cookie';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  if (req.method === 'GET' && req.headers.cookie) {
    const { token } = cookie.parse(req.headers.cookie);
    return res.status(200).json({ token });
  };
  res.status(200).json({ token: null });
};
