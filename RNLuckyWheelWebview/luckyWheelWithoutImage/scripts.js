const sections = [
  {
    id: 1,
    type: 1,
    bgColor: "#3b3c36",
    color: "white",
    image: "./images/animals/dog.png",
    name: "Sữa rửa mặt cho các chị em phụ nữ",
  },
  {
    id: 2,
    type: 1,
    bgColor: "#999950",
    color: "white",
    image: "./images/animals/dog1.png",
    name: "Nước rửa chén",
  },
  {
    id: 3,
    type: 1,
    bgColor: "#592321",
    color: "white",
    image: "./images/animals/dog2.png",
    name: "Thẻ cào 100k",
  },
  {
    id: 4,
    type: 1,
    bgColor: "#2c5545",
    color: "white",
    image: "./images/animals/dog3.png",
    name: "Thẻ cào 200k",
  },
  {
    id: 5,
    type: 1,
    bgColor: "#00bb2d",
    color: "white",
    image: "./images/animals/cat.png",
    name: "Thẻ cào 500k",
  },
  {
    id: 6,
    type: 1,
    bgColor: "#434b4d",
    color: "white",
    image: "./images/animals/cat1.png",
    name: "Tất chân giáng sinh",
  },
  {
    id: 7,
    type: 1,
    bgColor: "#c2b078",
    color: "white",
    image: "./images/animals/cat2.png",
    name: "Mũ bảo hiểm",
  },
  {
    id: 8,
    type: 1,
    bgColor: "#b5b8b1",
    color: "white",
    image: "./images/animals/cat3.png",
    name: "Áo chống nắngg",
  },
];
const wheel = document.querySelector(".wheel");
const btnSpin = document.querySelector(".btn-spin");
let isWheelStopped = true;
let totalDegree = 0;

sections.forEach((section, index) => {
  section.degree =
    ((360 * (sections.length - index) + 180) / sections.length) % 360;
});

const sectionsSortedByDegree = JSON.parse(JSON.stringify(sections)).sort(
  (preSection, nextSection) => preSection.degree - nextSection.degree
);

const onDocumentLoad = () => {
  wheel.innerHTML = sections
    .map((section, index) => {
      let sectionHTML = `<span
        class="section"
        style="
          --i:${index};
          --bgColor:${section.bgColor};
          --color:${section.color};
          --number-of-sections:${sections.length}
        "
      ><div class="gift-content">
      `;

      if (section.type === 1) {
        sectionHTML += `
          <span class="gift-name">${section.name}</span>
          <img src="${section.image}" alt="Gift" class="gift-image" />
        `;
      }

      sectionHTML += `</div></span>`;
      return sectionHTML;
    })
    .join("");
};

btnSpin.addEventListener("click", () => {
  if (isWheelStopped) {
    isWheelStopped = false;
    value += Math.floor(Math.random() * 360 + 720);
    wheel.style.transform = `rotate(${value}deg)`;
    setTimeout(() => {
      isWheelStopped = true;
      const sectionSelected =
        sectionsSortedByDegree.find(
          (section) => value % 360 <= section.degree
        ) ?? sectionsSortedByDegree[0];

      console.log("sectionSelected: ", sectionSelected);

      // React Native app will receive this message by onMessage event
      window.ReactNativeWebView.postMessage(JSON.stringify(sectionSelected));
    }, 5000);
  }
});
