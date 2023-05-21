
    var x = 10;
    for(var i = 0;i<x;i++){
    document.querySelectorAll(".child")[i].style.backgroundColor='red';
    }



var p = document.querySelector(".tseat").innerHTML;
var q = document.querySelector(".aseat").innerHTML;
var y = document.querySelector(".perseat").innerHTML;


function result(){
   console.log(p);
   console.log(q);
   var g = (q*100)/p;
   console.log(g)

}
result();