import strapiApi, { nextApi } from '@/api';
import cookie from 'cookie';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === 'POST') {

    const data = req.body;
    let token = null;
    let userId = null;

    if (req.headers.cookie) {
      token = cookie.parse(req.headers.cookie).token;
      userId = cookie.parse(req.headers.cookie).userid;
    }

    if (!token) {
      return res.status(403).json({ message: 'not authorized' });
    }

    try {

      const resp = await strapiApi.put(`/api/users/${userId}`,
        {
          about: data.about,
          educations: data.educations,
          experiences: data.experiences,
          github_url: data.github_url,
          instagram_url: data.instagram_url,
          linkedin_url: data.linkedin_url,
          portfolio_url: data.portfolio_url,
          twitter_url: data.twitter_url,
          website_url: data.website_url,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      res.status(200).json({ message: 'success' });

    } catch (error) {
      res.status(500).json({ message: 'error' });
    }
  };
};
