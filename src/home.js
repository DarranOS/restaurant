const createHome = () => {
  console.log("Weeee Home");
  const quark = document.createElement("img");
  quark.src = "images/Quark_DS9.jpg";
  quark.setAttribute("id", "quark");
  quark.classList.add("quark");
  return quark;
};

const home = () => {
  const main = document.getElementById("main");
  while (main.hasChildNodes()) {
    main.removeChild(main.childNodes[0]);
  }
  main.classList.add("home");
  main.appendChild(createHome());
};

export default home;
