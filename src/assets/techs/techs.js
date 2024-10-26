// techs.js
import vueImage from "./vue.svg";
import reactImage from "./react.svg";
import jsImage from "./js.svg";
import tsImage from "./typescript.svg";
import pythonImage from "./python.svg";
import gitImage from "./git.svg";
import cssImage from "./css.svg";
import htmlImage from "./html.svg";
import flaskImage from "./flask.svg";
import nodeImage from "./Node.js.svg";
import sqlImage from "./sql.svg";

const languages = [
  {
    name: "JavaScript",
    image: jsImage,
  },
  {
    name: "TypeScript",
    image: tsImage,
  },
  {
    name: "Python",
    image: pythonImage,
  },
  {
    name: "CSS",
    image: cssImage,
  },
  {
    name: "HTML",
    image: htmlImage,
  },
  {
    name: "Git",
    image: gitImage,
  },
  {
    name: "SQL",
    image: sqlImage,
  },
];

const frameworks = [
  {
    name: "React",
    image: reactImage,
  },
  {
    name: "Node.js",
    image: nodeImage,
  },
  {
    name: "Vue",
    image: vueImage,
  },
  {
    name: "flask",
    image: flaskImage,
  },
];

export { languages, frameworks };
