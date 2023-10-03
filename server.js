const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app
  .prepare()
  .then(() => {
    const ip_api = process.env.NEXT_PUBLIC_API;
    const server = express();
    // apply proxy in dev mode
    if (dev) {
      server.use(
        "/v1",
        createProxyMiddleware({
          target: `${ip_api}`,
          changeOrigin: true,
        })
      );
    }

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      const ip_api = process.env.NEXT_PUBLIC_API;
      if (err) throw err;
      console.log(`> Ready on ${ip_api}/v1`);
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });
