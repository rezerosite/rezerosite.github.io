const imgs = document.querySelectorAll("#girls .features img");
const firstImg = imgs[0];
const secondImg = imgs[1];
const thirdImg = imgs[2];
const fourthImg = imgs[3];
const fifthImg = imgs[4];
const sixthImg = imgs[5];

firstImg.addEventListener("click", () => {
  const mySrc = firstImg.getAttribute("src");
  if (mySrc === "images/emilia.jpg") {
    firstImg.setAttribute("src", "images/emilia2.jpg");
  } else {
    firstImg.setAttribute("src", "images/emilia.jpg");
  }
});
secondImg.addEventListener("click", () => {
  const mySrc = secondImg.getAttribute("src");
  if (mySrc === "images/rem.jpg") {
    secondImg.setAttribute("src", "images/rem2.jpg");
  } else {
    secondImg.setAttribute("src", "images/rem.jpg");
  }
});
thirdImg.addEventListener("click", () => {
  const mySrc = thirdImg.getAttribute("src");
  if (mySrc === "images/echidna.jpg") {
    thirdImg.setAttribute("src", "images/echidna3.jpg");
  } else {
    thirdImg.setAttribute("src", "images/echidna.jpg");
  }
});
fourthImg.addEventListener("click", () => {
  const mySrc = fourthImg.getAttribute("src");
  if (mySrc === "images/shim.jpg") {
    fourthImg.setAttribute("src", "images/shim2.jpg");
  } else {
    fourthImg.setAttribute("src", "images/shim.jpg");
  }
});
fifthImg.addEventListener("click", () => {
  const mySrc = fifthImg.getAttribute("src");
  if (mySrc === "images/crush.jpg") {
    fifthImg.setAttribute("src", "images/crush2.jpg");
  } else {
    fifthImg.setAttribute("src", "images/crush.jpg");
  }
});
sixthImg.addEventListener("click", () => {
  const mySrc = sixthImg.getAttribute("src");
  if (mySrc === "images/priscilla.jpg") {
    sixthImg.setAttribute("src", "images/priscilla2.jpg");
  } else {
    sixthImg.setAttribute("src", "images/priscilla.jpg");
  }
});
