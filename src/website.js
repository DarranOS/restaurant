import home from "./home";
import dabo from "./dabo";
import gagh from "./gagh";

const createHeader = () => {
  const header = document.createElement("div");

  const title = document.createElement("h1");
  title.innerText = "Quark's Bar";
  title.classList.add("header");

  const image = document.createElement("img");
  image.src = "images/STDS9.jpg";
  image.setAttribute("id", "ds9");
  image.classList.add("quark");

  const nav = document.createElement("nav");
  nav.classList.add("nav");

  const navHome = document.createElement("button");
  navHome.setAttribute("id", "home");
  navHome.textContent = "Home";
  navHome.addEventListener("click", (e) => {
    home();
  });
  nav.appendChild(navHome);
  const navMenu = document.createElement("button");
  navMenu.setAttribute("id", "menu");
  navMenu.textContent = "Menu";
  navMenu.addEventListener("click", (e) => {
    dabo();
  });
  nav.appendChild(navMenu);
  const navCont = document.createElement("button");
  navCont.setAttribute("id", "contactUs");
  navCont.textContent = "Contact Us";
  navCont.addEventListener("click", (e) => {
    gagh();
  });

  nav.appendChild(navCont);

  header.appendChild(title);
  header.appendChild(image);
  header.appendChild(nav);
  return header;
};

const createMain = () => {
  const main = document.createElement("div");
  main.setAttribute("id", "main");
  main.classList.add("main");
  return main;
};

const createFooter = () => {
  const footer = document.createElement("div");
  const copyright = document.createElement("p");
  copyright.classList.add("footer");
  copyright.textContent = "@2021";
  footer.appendChild(copyright);
  return footer;
};

const initialiseSite = () => {
  const container = document.getElementById("content");
  container.appendChild(createHeader());
  container.appendChild(createMain());
  container.appendChild(createFooter());
};

export default initialiseSite;
