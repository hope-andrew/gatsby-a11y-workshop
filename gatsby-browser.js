let liveRegion = null;

exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector(".route.SkipLink");

    if (skipLink) {
      skipLink.focus();
    }

    if (location.pathname === "/") {
      liveRegion.textContent = "home page";
    } else {
      liveRegion.textContent = location.pathname.split("/")[1] + " page";
    }
  }
};

exports.onClientEntry = () => {
  liveRegion = document.createElement("div");
  liveRegion.setAttribute("role", "status");
  liveRegion.classList.add("visually-hidden");
  liveRegion.id = "routing-region";

  document.body.appendChild(liveRegion);
};
