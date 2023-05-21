
    var x = 6;
    for(var i = 0;i<x;i++){
    document.querySelectorAll(".test")[i].style.backgroundColor='red';
    }



var total_seat = document.querySelector(".tseat").innerHTML;
var avail_seat = document.querySelector(".aseat").innerHTML;
var percent_seat = document.querySelector(".perseat").innerHTML;


function result(){
   console.log(total_seat);
   console.log(avail_seat);
   var g = (avail_seat*100)/total_seat;
   document.querySelector(".perseat").innerHTML=g.valueOf();

}
result();