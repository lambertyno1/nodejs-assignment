const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>TechCrush Assignment</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', sans-serif;
          background: #0f172a;
          color: #e2e8f0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .card {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 16px;
          padding: 48px;
          text-align: center;
          max-width: 520px;
          width: 90%;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }
        .badge {
          background: #0db7ed;
          color: #fff;
          padding: 6px 18px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          display: inline-block;
          margin-bottom: 24px;
        }
        h1 { font-size: 2rem; color: #f8fafc; margin-bottom: 12px; }
        .name { color: #0db7ed; font-size: 1.3rem; font-weight: 600; margin: 16px 0; }
        p { color: #94a3b8; line-height: 1.7; margin-bottom: 10px; }
        .stack {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 24px;
        }
        .tag {
          background: #0f172a;
          border: 1px solid #334155;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.8rem;
          color: #0db7ed;
        }
        .status {
          margin-top: 24px;
          padding: 12px;
          background: rgba(13,183,237,0.08);
          border: 1px solid rgba(13,183,237,0.2);
          border-radius: 8px;
          font-size: 0.85rem;
          color: #4ec9b0;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="badge">🎓 TECHCRUSH COHORT 8</div>
        <h1>Node.js Assignment</h1>
        <div class="name">Lambert Inaku</div>
        <p>A Node.js application built, containerised with Docker, and deployed via Docker Hub.</p>
        <div class="stack">
          <span class="tag">Node.js</span>
          <span class="tag">Express</span>
          <span class="tag">Docker</span>
          <span class="tag">Docker Hub</span>
          <span class="tag">GitHub</span>
          <span class="tag">Linux</span>
        </div>
        <div class="status">
          ✅ Container running successfully on port ${PORT}
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
})
