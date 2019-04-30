const height = document.getElementById('h');
const width = document.getElementById('w');

function getSize(){
let screenH = document.documentElement.clientHeight;
let screenW = document.documentElement.clientWidth;




height.textContent='';
height.textContent=screenH;
width.textContent='';
width.textContent=screenW;

}