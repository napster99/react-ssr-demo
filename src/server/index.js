import express from "express";
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import Page from "../comp/Page";

const app = express();
app.use(express.static("public"));

// 将组件渲染成字符串
const content = renderToString(<Page />);

console.log(content);
app.get("/", (req, res) =>
  res.send(`
    <html>
      <head>
          <title>ssr demo</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <button style="background: tan;" onClick="alert(6)">Server点击</button>
      </body>
      <script src="/index.js"></script>
      <script>
        window.__DATA__ = '${content}'
      </script>
    </html>
`)
);

app.listen(3000, () => console.log("Exampleapp listening on port 3000 ..."));
