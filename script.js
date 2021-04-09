window.addEventListener("load", function (event) {
  const links = document.querySelectorAll("a");

  [...links]
    .filter((link) => link.href)
    .forEach((link) => {
      console.log("window.location", window.location.href);
      console.log("link.href", link.href);

      if (window.location.href === link.href) {
        link.classList.add("active-page");
      }
    });
});
