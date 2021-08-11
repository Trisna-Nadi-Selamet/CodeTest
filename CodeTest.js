/*
 - Your puzzle input is still 245182-790572.
 - Get Number password Answare : 1099 
 - with this I get gold value *(Star)
 
 
 - My name : Trisna Nadi S
*/
const pwd_first = 245182;
const pwd_final = 790572;

function isExplore(pwd) {
  return pwd.split('').every((digit, index) => index === 0 || digit >= pwd[index - 1]);
}
function FrmtGroup(pwd) {
  return /(\d)\1/.test(pwd); //For Formated
}
function getNumberPwd(pwd) {
  return FrmtGroup(pwd) && isExplore(pwd);
}
let Valid = 0;
for (let pwd = pwd_first; pwd <= pwd_final; pwd++) {
  Valid += getNumberPwd(String(pwd));
}
console.log(Valid);