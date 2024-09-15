const texts = {
  img1: "Постоянство",
  img2: "Взаимосвязь",
  img3: "Pixel perfect",
  img4: "Бахнет?",
  img5: "Везде",
  img6: "Професиональная династия",
  img7: "Прокрастинация",
  img8: "Продуманность",
  img9: "Професиональный пользователь ПК",
};

const checkBoxs = document.querySelectorAll("input[type=radio]");
const imgs = document.querySelector(".imgs");
const desc = document.querySelector(".desc");
desc.innerHTML = texts.img1;

checkBoxs.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    console.log(e.target.id);
    const newImg = document.createElement("img");
    newImg.src = `assets/${e.target.id}.png`;
    imgs.innerHTML = "";
    imgs.append(newImg);
    desc.innerHTML = `<p class='show'> ${texts[e.target.id]}</p>`;
  });
});
