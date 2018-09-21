module.exports = function solveEquation(equation) {
   // var a = parseInt(equation,10);
   // var b =
   var arr = (equation.split(" "));
   var b =  arr[3] + arr[4];
   var a = arr[0];
   var c = arr[7] + arr[8];

   var solution = [];
   var x1 = Math.round((-b+(Math.sqrt(b*b - 4*a*c)))/(2*a));
   var x2 = Math.round((-b-(Math.sqrt(b*b - 4*a*c)))/(2*a));
   if (x1>x2){
       solution[1] = x1;
       solution[0] = x2;
   }
   else {
       solution[1] = x2;
       solution[0] = x1;
   }
    return solution;
}
