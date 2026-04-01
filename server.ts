import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Enable compression
  app.use(compression());

  // API routes can go here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve static files from dist
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static files with long-term caching
    app.use(express.static(distPath, {
      maxAge: '1y',
      immutable: true,
      index: false // Don't serve index.html from here, we handle it below
    }));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  console.log(`Starting server in ${process.env.NODE_ENV || 'development'} mode...`);

  app.listen(Number(PORT), () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
