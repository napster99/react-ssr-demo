import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

const Page = () => {
  return <h1>This is server page</h1>;
};

const app = express();
const content = renderToString(<Page />);

app.get("/", (req, res) =>
  res.send(`
<html>
   <head>
       <title>ssr demo</title>
   </head>
   <body>
        ${content}
   </body>
</html>
`)
);

app.listen(3000, () => console.log("Exampleapp listening on port 3000!"));
