function score(){
  
if (clock_global > "0:0" && clock_global < "1:0") {
   console.log("compasso 1");
 }
if (clock_global > "3:0" && clock_global < "6:0") {
   console.log("compasso 2");
  region.start = 10; 
  region.end = 30;
  region.update("");
  region.playLoop();
   }
if (clock_global > "10:0" && clock_global < "12:0") {
   console.log("compasso 3");
  region.start = 50; 
  region.end = 60;
  region.update("");
  region.playLoop();
   }
}
