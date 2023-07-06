
const imagearr =[
    "car.jpg",
    "cat.jpg",
    "nat.jpg",
    "bd.jpg",
    "boat.jpg",
    "nature.jpg",
    "dog.jpg",
    "sham.jpg",
    "greatnat.jpg",
    "dawn.jpg",
    "desert.jpg"
];
let photoname = [
 "A Lonely Car",
 "Cat Walk",
 "Frog",
 "Two Animals",
 "Night Boat",
 "Nature",
 "Dog",
 "Beach Sunset",
 "Trees And Water",
 "Dawn At Japan",
 "Desert"
];

let i = 1;

function imgchg(){
let name1 = document.getElementById("name1");

let main = document.getElementById("main");

let len = imagearr.length;

main.style.backgroundImage=`url(${imagearr[i]})`;
name1.innerHTML=photoname[i];
i++;

if(i==len){
    i=0;
         }

}
setInterval(imgchg,3000);

function hide(){

    document.getElementById("glass").classList.add("hide");

}
function show(){
    document.getElementById("glass").classList.remove("hide");
}