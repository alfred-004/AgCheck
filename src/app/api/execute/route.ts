// src/app/api/execute/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// Handler for POST requests
const POSTHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { code, lang } = req.body;
  const clientId = "33cd582c7a510cefbed34c024d43fa8c";
  const clientSecret = "64879a3d8a3ca1a5cccfa0879e69b09db99289c0dd327a7c868cb0a1f915a8b";
  const url = 'https://api.jdoodle.com/v1/execute';

  try {
    const response = await axios.post(url, {
      script: code,
      language: "python3",
      versionIndex: "0",
      clientId,
      clientSecret
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

// Handler for GET requests
const GETHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(405).json({ error: 'GET Method Not Allowed' });
}

// Export API route handlers
export const POST = (req: NextApiRequest, res: NextApiResponse) => POSTHandler(req, res);
export const GET = (req: NextApiRequest, res: NextApiResponse) => GETHandler(req, res);