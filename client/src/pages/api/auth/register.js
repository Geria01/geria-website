import strapiApi from '@/api';
import { strapiUrl } from '@/utils';

export default async function register(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await strapiApi
        .post(`${strapiUrl}/api/auth/local/register`,
          {
            ...req.body,
            username: req.body.firstname.toLowerCase()
          });
      console.log('response', response);
      response.status === 200 ?
        res.status(200).json({ message: 'success', token: `${response.data.jwt}` }) :
        res.status(200).json({ message: `${response}` });
    } catch (error) {
      if (!error.response.data.error.message) {
        return res.status(500).json({ message: 'Internal server error' });
      } else {
        const messages = error.response.data.error.message;
        return res.status(403).json({ message: messages });
      }
    }
  }
}
