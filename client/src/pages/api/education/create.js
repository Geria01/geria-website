import strapiApi from '@/api';
import cookie, { parse } from 'cookie';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'POST') {
    const educationArray = req.body;
    let token = null;
    let userId = null;

    if (educationArray.length === 0) {
      res.status(200).json({ message: 'no education submitted' });
    }

    if (req.headers.cookie) {
      token = cookie.parse(req.headers.cookie).token;
      userId = cookie.parse(req.headers.cookie).userid;
    }

    if (!token) {
      return res.status(403).json({ message: 'not authorized' });
    }

    try {

      const idArray = [];

      for (let i = 0; i < educationArray.length; i++) {

        const data = {
          institution: educationArray[i].institution,
          degree: educationArray[i].degree,
          start_date: educationArray[i].startDate,
          end_date: educationArray[i].endDate,
          User: [parseInt(userId)],
        };

        const resp = await strapiApi.post('/api/educations', {
          headers: { Authorization: `Bearer ${token}` },
          data
        });

        idArray.push(resp.data.data.id);

      }

      res.status(200).json({ idArray });

    } catch (error) {
      res.status(403).json({ message: error });
    }
  };
};
