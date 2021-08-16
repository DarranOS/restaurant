const createDabo = () => {
  console.log("Weeee Dabo");
  const dabo = document.createElement("img");
  dabo.src = "images/dabo.jpg";
  dabo.setAttribute("id", "dabo");
  dabo.classList.add("img");
  return dabo;
};

const dabo = () => {
  const main = document.getElementById("main");
  while (main.hasChildNodes()) {
    main.removeChild(main.childNodes[0]);
  }
  main.appendChild(createDabo());
  return main;
};

export default dabo;
