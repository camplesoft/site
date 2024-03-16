class HTMLElement {
  constructor() {
    if (this.constructor === HTMLElement) {
      throw new TypeError("Esta classe não pode ser instânciada");
    } else {
      this.body = document.body;
      this.head = document.head;
      this.siteTitle = "Yucane Marketing";

      this.logo = {
        src: "images/logo.jpg",
        alt: "logo-yucane",
      };
      this.navBarLinks = [
        {
          text: "início",
          href: "home.html",
        },
        {
          text: "sobre nós",
          href: "#sobre-nos",
        },
        {
          text: "serviços",
          href: "#servicos",
        },
        {
          text: "contato",
          href: "#contato",
        },
        {
          text: "lista de preços",
          href: "#lista-de-precos",
        },
      ];
    }
  }
}

const style = `

@charset "UTF-8";

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
    --default-color: #252525;
    --secundary-color: #038C8C;
}

::-webkit-scrollbar {
    width: 9px;
    background-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
    background-color: var(--secundary-color);
}

* {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    border: none;
    outline: none;
    list-style-position: inside;
    text-decoration: none;
}

strong {
    color: var(--default-color);
    font-weight: bold;
}

.shadow {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

main h1 {
    color: var(--default-color);
    font-size: 2.5rem;
}

h2 {
    color: var(--default-color);
    font-size: 2rem;
}

p {
    text-align: justify;
    font-size: 14px;
    font-weight: 400;
    margin: 15px 0px;
}

body {
  position: relative;
}

header,
footer {
  width: 100%;
  color: white;
  background-color: var(--default-color);
}

header {
  padding: 6px 10px;
  height: 90px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-auto-rows: 1fr;
  align-items: center;
  justify-items: center;

  @media (min-width: 800px) {
    grid-template-columns: 80px 1fr !important;
    column-gap: 20px;

    & h1 {
      display: none;
    }

    & i {
      display: none !important;
    }

    & > .nav-bar {
      align-self: center;
      justify-self: stretch;

      display: flex !important;
      align-items: center;
      flex-flow: row nowrap;

      & a {
        margin: 0 20px;
        color: white;
        cursor: pointer;
        font-weight: 500;
        font-size: 1rem;
        text-transform: uppercase;

        transition: all 300ms ease-in-out;
      }

      & a:hover {
        margin: 0 20px;
        color: var(--corAzul);
      }

      overflow: hidden;
    }
  }

  & a img {
    height: 70px;
  }

  & h1 {
    padding-left: 20px;
    justify-self: start;
    text-align: right;
    word-wrap: break-word;
    font-size: 0.9rem;
    font-weight: 600;
  }

  & i {
    cursor: pointer;
    font-weight: lighter;
    font-size: 1.2rem;
  }

  & > .nav-bar {
    display: none;
  }

  & .shadow {
    z-index: 3;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    min-height: 100vh;

    display: none;

    transition: all 1s ease-in-out;
    background-color: rgba(0, 0, 0, 0.596);
    overflow: hidden;

    transition: display 1s ease-in-out;

    & .nav-bar {
      width: 100%;
      max-width: 414px;
      height: 100%;

      background-color: white;

      position: absolute;
      top: 0;
      right: -500px;

      display: grid;
      grid-template-rows: 90px 1fr 70px;

      transition: right 2s ease-in-out;
      animation: exit-to-the-right 600ms ease-in-out;

      & .head-nav-bar {
        padding: 20px;
        color: black;
        border-bottom: 1px solid #e6e9ed;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & h2 {
          font-weight: bold;
          font-size: 1.8rem;
        }

        i {
          color: var(--secundary-color);
        }
      }

      & .body-nav-bar {
        display: grid;
        grid-auto-columns: 94%;
        grid-auto-rows: 50px;

        align-items: stretch;
        align-content: start;
        justify-content: center;

        & a {
          display: flex;
          align-items: center;
          color: #5c5c5c;
          border-bottom: 1px solid #e6e9ed;

          &:hover {
            color: var(--secundary-color);
          }
        }

        &::-webkit-scrollbar {
          width: 10px;
          background-color: rgba(128, 128, 128, 0.253);
        }

        &::-webkit-scrollbar-thumb {
          background-color: var(--secundary-color);
        }

        overflow-x: hidden;
        overflow-y: auto;
      }

      & .foot-nav-bar {
        display: flex;
        align-items: center;
        justify-content: center;

        & button {
          display: none;
          padding: 10px;
          color: white;
          width: 300px;
          border-radius: 6px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
          background-color: var(--secundary-color);
        }
      }

      overflow: hidden;
    }
  }

  & .shadow.show {
    display: block;

    & .nav-bar {
      animation: enter-on-the-right 600ms ease-in-out;
      right: 0;
    }
  }

  overflow: hidden;
}

footer {
  padding: 10px 10px;
  width: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr 50px;
  overflow: hidden;

  & .head-footer {
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    & img {
      width: 60px;
    }

    & p {
      width: 100%;
      text-align: center;
      word-wrap: break-word;
    }
  }

  & .main-footer {
    padding: 20px;

    display: grid;
    align-content: center;
    justify-content: start;
    align-items: center;
    justify-items: start;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 400px));

    & .card {
      width: 100%;
      height: 100%;

      & h3 {
        margin: 12px 0;
        font-size: 1.5rem;
        text-transform: uppercase;
      }

      & ul {
        list-style: none;

        & li {
          margin: 10px 0;
          color: white;
        }

        & li:hover {
          opacity: 0.8;
        }
      }

      & .form {
        width: 100%;
        max-width: 400px;

        & input {
          width: 90%;
          max-width: 260px;
          height: 40px;
          margin: 5px 0;
          border-radius: 2px;
        }

        & input[type="email"] {
          padding: 0 10px;
          color: white;
          font-size: 0.9rem;
          background-color: rgba(0, 0, 0, 0.116);
          outline: 1px solid white;
        }

        & input[type="email"]::placeholder {
          font-size: 0.9rem;
          color: white;
          opacity: 0.6;
        }

        & input[type="submit"] {
          cursor: pointer;
          font-weight: bolder;
          color: var(--secundary-color);
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          background-color: white;
        }

        & input[type="submit"]:active {
          box-shadow: none;
          opacity: 0.9;
        }
      }

      & .redes-sociais {
        margin: 10px 0;
        display: grid;
        align-content: center;
        justify-content: start;
        align-items: center;
        justify-items: center;
        column-gap: 10px;

        grid-template-columns: repeat(auto-fit, 35px);
        grid-auto-rows: 35px;

        & a {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;
          height: 100%;
          border: 1px solid white;
          border-radius: 5px;
          transition: all 0.3s ease-in-out;

          & i {
            font-size: 1.2rem;
            color: white;
          }
        }

        & a:hover {
          border-radius: 50%;
          background-color: white;
          & i {
            color: var(--secundary-color);
          }
        }
      }

      & iframe {
        height: 200px;
        width: 100%;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      }
    }

    @media (min-width: 1300px) {
      & .card:last-child {
        width: auto;
        justify-self: end;
      }
    }
  }

  & .foot-footer {
    border-top: 1px solid white;
    padding: 10px;
    width: 100%;
    align-self: center;
    justify-self: center;

    display: flex;
    align-items: center;
    justify-content: center;

    & p {
      text-align: center;
      font-size: 0.7rem;
      & a {
        color: white;
        font-size: 1em;
      }

      & a:hover {
        text-decoration: underline;
      }
    }
  }
}


@keyframes enter-on-the-right {
  0% {
    right: -500px;
  }

  100% {
    right: 0;
  }
}

@keyframes exit-to-the-right {
  0% {
    right: 0;
  }

  100% {
    right: -500px;
  }
}

`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  showElements() {
    this.header = document.createElement("header");

    const containerImg = document.createElement("div");
    containerImg.setAttribute("class", "container-img");
    containerImg.innerHTML = `<a href="${this.navBarLinks[0].href}"><img src="${this.logo.src}" alt="${this.logo.alt}" /></a>`;
    this.header.appendChild(containerImg);

    const titulo = document.createElement("h1");
    titulo.innerHTML = this.siteTitle;
    this.header.appendChild(titulo);

    const btnOpenNavBar = document.createElement("i");
    btnOpenNavBar.setAttribute("class", "fa-solid fa-bars");
    btnOpenNavBar.addEventListener("click", this.toggleNavBarVisibility);
    this.header.appendChild(btnOpenNavBar);

    const navBarDesktop = document.createElement("div");
    navBarDesktop.setAttribute("class", "nav-bar");

    this.navBarLinks.forEach((link) => {
      const newLink = document.createElement("a");
      newLink.setAttribute("href", link.href);
      newLink.innerHTML = link.text;
      navBarDesktop.appendChild(newLink);
    });
    this.header.appendChild(navBarDesktop);

    const shadow = document.createElement("div");
    shadow.setAttribute("class", "shadow");

    const navBarPhone = document.createElement("div");
    navBarPhone.setAttribute("class", "nav-bar");

    const headNavBarPhone = document.createElement("div");
    headNavBarPhone.setAttribute("class", "head-nav-bar");

    const tituloNavBarPhone = document.createElement("h2");
    tituloNavBarPhone.innerHTML = "Menu";
    headNavBarPhone.appendChild(tituloNavBarPhone);

    const btnCloseNavBar = document.createElement("i");
    btnCloseNavBar.setAttribute("class", "fa-solid fa-xmark");
    btnCloseNavBar.addEventListener("click", this.toggleNavBarVisibility);
    headNavBarPhone.appendChild(btnCloseNavBar);
    navBarPhone.appendChild(headNavBarPhone);

    const bodyNavBarPhone = document.createElement("div");
    this.navBarLinks.forEach((link) => {
      const newLink = document.createElement("a");
      newLink.setAttribute("href", link.href);
      newLink.innerHTML = link.text;
      bodyNavBarPhone.appendChild(newLink);
    });
    bodyNavBarPhone.setAttribute("class", "body-nav-bar");
    navBarPhone.appendChild(bodyNavBarPhone);

    const footNavBarPhone = document.createElement("div");
    footNavBarPhone.setAttribute("class", "foot-nav-bar");

    const btnSingIn = document.createElement("button");
    btnSingIn.setAttribute("class", "btn-sign-in");
    btnSingIn.innerHTML = "Iniciar Sessão";
    footNavBarPhone.appendChild(btnSingIn);
    navBarPhone.appendChild(footNavBarPhone);

    shadow.appendChild(navBarPhone);
    this.header.appendChild(shadow);

    this.body.prepend(this.header);
  }

  toggleNavBarVisibility() {
    const divShadow = document.querySelector(".shadow");
    divShadow.classList.toggle("show");
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  showElements() {
    this.footer = document.createElement("footer");
    this.footer.innerHTML += `
      <div class="head-footer">
        <img src="${this.logo.src}" alt="${this.logo.alt}" />
        <p>${this.siteTitle}</p>
      </div>
    `;

    const mainFooter = document.createElement("div");
    mainFooter.setAttribute("class", "main-footer");

    mainFooter.innerHTML += `
    `;
    let firstCard = `
      <div class="card">
        <h3>Obter ajuda</h3>
        <ul>
    `;
    this.navBarLinks.forEach(function (link) {
      firstCard += `<a href="${link.href}"><li>${link.text}</li></a>`;
    });
    firstCard += `
        </ul>
      </div>
    `;
    mainFooter.innerHTML += `
      ${firstCard}

      <div class="card">
        <h3>Junte-se à nós:</h3>
        <div class="form" method="get" autocomplete="on">
        <input type="email" name="email" id="email" placeholder="Informe seu email">
        <input type="submit" value="enviar">
      </div>

      <div class="redes-sociais">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-solid fa-phone"></i></a>
        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    `;

    this.footer.appendChild(mainFooter);

    this.footer.innerHTML += `
      <div class="foot-footer">
        <p>2024 <a href="camplesoft@gmail.com">CampleSoft</a> | Todos direitos reservados</p>
      </div>
    `;

    this.body.appendChild(this.footer);
  }
}

export { Header, Footer, style };
