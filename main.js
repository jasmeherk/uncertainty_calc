function myFunction() {
  let xVal = parseFloat(document.getElementById("xVal").value);
  let xUnc  = parseFloat(document.getElementById("xUnc").value);
  let yVal = parseFloat(document.getElementById("yVal").value);
  let yUnc  = parseFloat(document.getElementById("yUnc").value);
  let ans;
  let unc_ans;
if (document.getElementById("add").checked){
  ans= xVal + yVal;
  unc_ans = ((xUnc ** 2) + (yUnc ** 2)) ** 0.5 ;
alert(ans + '\xB1' + Number(unc_ans.toPrecision(1)))
}
if (document.getElementById("sub").checked){
   ans = xVal - yVal;
   unc_ans = ((xUnc ** 2) + (yUnc ** 2)) ** 0.5 ;
  alert(ans + '\xB1' + Number(unc_ans.toPrecision(1)));
}
if (document.getElementById("mul").checked){
   ans = xVal * yVal;
   unc_ans = ans * ((((xUnc / xVal) ** 2) + ((yUnc / yVal) ** 2)) ** 0.5);
  alert(ans + '\xB1' + Number(unc_ans.toPrecision(1)));
}
if (document.getElementById("div").checked) {
   ans = xVal / yVal;
   unc_ans = ans * ((((xUnc/xVal)**2) + ((yUnc / yVal)**2))**0.5);
  alert(ans + '\xB1' + Number(unc_ans.toPrecision(1)));
  }
}
