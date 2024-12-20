let i=0, imgArr=new Array();
imgArr[0] ="https://attach.setn.com/newsimages/2023/07/21/4248876-PH.jpg";
imgArr[1] = "https://media.zenfs.com/ko/setn.com.tw/a1e008dc6873152b220101e888cb83f8";
imgArr[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRot-gDYQ1DHRuZ5XM3nSUTQ6TVYQ6xnNm7SHcJSQjp-bwpzDilzhkXAOuLXwsqOvAZr6A&usqp=CAU";

function showImg() {
  document.getElementById('ico').src = imgArr[i];
  i = (i+1) %3;
}
function show() {
  setInterval(showImg, 1000);
}