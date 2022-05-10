var comp = { 
    "dell": 10,
    "hp":3,
    "lenovo": 20,
    "sony": 4,
 };
 
 function checkComputer(checkComp){
   if (comp.hasOwnProperty(checkComp)){
     return comp[checkComp];
   }
   else{
     return "Not found";
   }
 }

 console.log(checkComputer("hp"));