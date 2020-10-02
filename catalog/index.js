import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Style Guide",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  {
    title: "Design",
    path: "/design",
    pages: [
      {
        path: "/colours",
        title: "Colours",
        content: pageLoader(() => import("./COLOURS.md"))
      },
      {
        path: "/typography",
        title: "Typography",
        content: pageLoader(() => import(".TYPOGRAPHY.md"))
      }
    ]
  }
];

ReactDOM.render(
  <Catalog title="Catalog" pages={pages} />,
  document.getElementById("catalog")
);
