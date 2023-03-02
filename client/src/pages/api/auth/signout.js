import cookie from 'cookie';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'POST') {

    res.setHeader('Set-Cookie', [
      cookie.serialize('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 0,
        sameSite: 'strict',
        path: '/',
      }),
      cookie.serialize('userid', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 0,
        sameSite: 'strict',
        path: '/',
      }),
    ]);
    return res.status(200).json({ message: 'success' });
  }
};
