function myFunction() {
  let xVal = parseFloat(document.getElementById("xVal").value);
  let xUnc  = parseFloat(document.getElementById("xUnc").value);
  let yVal = parseFloat(document.getElementById("yVal").value);
  let yUnc  = parseFloat(document.getElementById("yUnc").value);
if (document.getElementById("add").checked == true){
  let ans_add = xVal + yVal;
  let unc_add = ((xUnc ** 2) + (yUnc ** 2)) ** 0.5 ;
alert(ans_add  + '\xB1' + Number(unc_add.toPrecision(1)))
}
if (document.getElementById("sub").checked == true){
  let ans_sub = xVal - yVal;
  let unc_sub = ((xUnc ** 2) + (yUnc ** 2)) ** 0.5 ;
  alert(ans_sub  + '\xB1' + Number(unc_sub.toPrecision(1)));
}
if (document.getElementById("mul").checked == true){
  let ans_mul = xVal * yVal;
  let unc_mul = ans_mul * ((((xUnc / xVal) ** 2) + ((yUnc / yVal) ** 2)) ** 0.5);
  alert(ans_mul  + '\xB1' + Number(unc_mul.toPrecision(1)));
}
if (document.getElementById("div").checked == true) {
  let ans_div = xVal / yVal;
  let unc_div = ans_div * ((((xUnc/xVal)**2) + ((yUnc / yVal)**2))**0.5);
  alert(ans_div  + '\xB1' + Number(unc_div.toPrecision(1)));
  }
}
