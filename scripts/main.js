import { Header, Footer, style } from "./elementos_reaproveitaveis.js";


document.head.innerHTML +=
  `<style>
    ${style}
  </style>`;

const header = new Header();
const footer = new Footer();
header.showElements();
footer.showElements();
