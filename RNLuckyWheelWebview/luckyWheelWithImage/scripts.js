import sections from "./sections.js";

const turns = document.getElementById("turns"); // Used in webview
const wheel = document.querySelector(".wheel");
const btnSpin = document.querySelector(".btn-spin");
let totalDegree = 0;

const sectionsMapWithDegree = sections.map((section, index) => ({
  ...section,
  degree: ((360 * (sections.length - index) + 180) / sections.length) % 360,
}));

const sectionsSortedByDegree = sectionsMapWithDegree.sort(
  (preSection, nextSection) => preSection.degree - nextSection.degree
);

// const wheelImage =
//   "https://picallow.com/wp-content/uploads/2023/07/2023-07-18_64b6a745d0035_spin6.png";
const wheelImage = "https://gcdnb.pbrd.co/images/WxwCZogaDwT3.png";

wheel.style.backgroundImage = `url(${wheelImage})`;

btnSpin.addEventListener("click", () => {
  /**
   * You can implement logic with probability of each section
   */
  totalDegree += Math.floor(Math.random() * 360 + 720);

  wheel.style.transform = `rotate(${totalDegree}deg)`;

  const sectionSelected =
    sectionsSortedByDegree.find(
      (section) => totalDegree % 360 <= section.degree
    ) ?? sectionsSortedByDegree[0];

  setTimeout(() => {
    window.ReactNativeWebView.postMessage(JSON.stringify(sectionSelected));
  }, 5000);
});
