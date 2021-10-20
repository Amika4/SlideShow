let count = 1;
const src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
let min = 1;
let max = 19;
let url;
let timer;
let nowPlaying = false;

function left(){
  count--;
  if (count < min){
    count = max;
    thumbnailsElement.children[0].classList.remove('selected');
  } else{
    thumbnailsElement.children[count].classList.remove('selected');
  }
  if(count < 10){
    url = src + "0" + count + ".jpg";
  }else{
    url = src + count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add('selected');
}

function right(){
  count++;
  if ( count > max){
    count = min;
    thumbnailsElement.children[max-1].classList.remove('selected');
  } else{
    thumbnailsElement.children[count-2].classList.remove('selected');
  }
  if(count < 10){
    url = src + "0" + count + ".jpg";
  }else{
    url = src + count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count-1].classList.add('selected');
}

function play(){
  console.log(!nowPlaying);
  //if (nowPlaying == false){
  if(!nowPlaying){
    nowPlaying = true;
    autPlay();
  }
}
function autPlay(){
  right();
  timer = setTimeout(function(){
    autPlay();
  },1000);
}
function stop(){
  clearTimeout(timer);
  nowPlaying = false;
}
function reset(){
  stop();
  thumbnailsElement.children[count-1].classList.remove('selected');
  url = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg";
  count = 1;
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src', url);
}
