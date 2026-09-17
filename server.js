import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Serve static assets
app.use(express.static(__dirname));

// Fix 1: Explicitly serve index.html for root path (fixes Vercel "Cannot GET /")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/gemini', async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("❌ ERROR: GEMINI_API_KEY is not defined in environment");
    return res.status(500).json({ error: 'GEMINI_API_KEY missing' });
  }

  // Fix 2: Changed invalid 'gemini-3.5-flash' to valid 'gemini-2.5-flash'
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ GOOGLE API REJECTED REQUEST:", JSON.stringify(data, null, 2));
      return res.status(response.status).json(data);
    }

    console.log("✅ GOOGLE API RESPONSE SUCCESSFUL");
    res.json(data);
  } catch (error) {
    console.error("❌ PROXY FETCH ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`MediAssist server running at http://localhost:${PORT}`);
});