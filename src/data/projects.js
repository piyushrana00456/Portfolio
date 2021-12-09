import css1 from "../img/portImages/nykaa.png";
import css2 from "../img/portImages/trivago.png";
import easy from "../img/portImages/easy.png";
// import react1 from "../img/portImages/react_styled.png";
// import img2 from "../img/portImages/maya-4.jpg";
// import img3 from "../img/portImages/maya-3.jpg";

const portfolios = [
  {
    id: 1,
    category: "JavaScript",
    image: css1,
    link1: "https://github.com/sarangKaliyath/Nykaa_Clone",
    link2: "https://u2ubk.netlify.app/",
    title: "Nykaa Clone",
    text: "Created with only HTML and CSS and Javascript.",
  },
  {
    id: 2,
    category: "Ejs",
    image: css1,
    link1: "https://github.com/sarangKaliyath/Nykaa_Clone_V2.0",
    link2: "https://u3-ubk.herokuapp.com/",
    title: "Nykaa Full-Stack",
    text: "Created with Ejs, Javascript, Css, Express, and MongoDb",
  },
  {
    id: 3,
    category: "React",
    image: css2,
    link1: "https://github.com/dhirendra9032/TrivagoClone",
    link2: "https://trivagoclone.netlify.app/",
    title: "Trivago Clone",
    text: "Created with React",
  },
  {
    id: 4,
    category: "React",
    image: easy,
    link1: "https://github.com/piyushrana00456/Almost_human",
    link2: "https://easy-delivery.netlify.app/",
    title: "Easy Delivery",
    text: "Created with React, MongoDb, Express",
  },
];

export default portfolios;
