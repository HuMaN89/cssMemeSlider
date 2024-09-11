const texts = {
  img1: "1",
  img2: "2",
  img3: "3",
  img4: "4",
  img5: "5",
  img6: "6",
  img7: "7",
  img8: "8",
  img9: "9",
  img10: "10",
};

const checkBoxs = document.querySelectorAll("input[type=radio]");
const imgs = document.querySelector(".imgs");
const desc = document.querySelector(".desc");
desc.innerHTML = texts.img1;

checkBoxs.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    console.log(e.target.id);
    imgs.innerHTML = "";
    const newImg = document.createElement("img");
    newImg.src = `assets/${e.target.id}.png`;
    imgs.append(newImg);
    desc.innerHTML = texts[e.target.id];
  });
});
