const img_src = ["header1.JPG", "header2.JPG", "header3.JPG", "header4.JPG"];
let num = 0;

function slide_time() {
  if (num === 3) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide_img").src = img_src[num];
}

setInterval(slide_time, 15000);