const createGagh = () => {
  console.log("Weeee gagh");
  const gagh = document.createElement("img");
  gagh.src = "images/gagh.jpg";
  gagh.setAttribute("id", "gagh");
  gagh.classList.add("img");
  return gagh;
};

const gagh = () => {
  const main = document.getElementById("main");
  while (main.hasChildNodes()) {
    main.removeChild(main.childNodes[0]);
  }
  main.appendChild(createGagh());
  return main;
};

export default gagh;
