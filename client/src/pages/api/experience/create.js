import cookie from 'cookie';
import strapiApi from '@/api';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

  if (req.method === 'POST') {

    const experienceArray = req.body;
    let token = null;
    let userId = null;

    if (experienceArray.length === 0) {
      res.status(200).json({ message: 'no experience submitted' });
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

      for (let i = 0; i < experienceArray.length; i++) {

        const data = {
          employer: experienceArray[i].employer,
          job_title: experienceArray[i].jobTitle,
          currently_work_here: experienceArray[i].currentlyWorkHere,
          description: experienceArray[i].description,
          start_date: experienceArray[i].startDate,
          end_date: experienceArray[i].endDate,
          User: [parseInt(userId)],
        };

        const resp = await strapiApi.post('/api/experiences', {
          headers: { Authorization: `Bearer ${token}` },
          data,
        });

        idArray.push(resp.data.data.id);

      }

      res.status(200).json({ idArray });

    } catch (error) {
      res.status(403).json({ message: 'error' });
    }
  };
};
