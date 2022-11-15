const advice = document.getElementById("advice");


async function generateAdvice() {
  var slipAdvice = await fetch('https://api.adviceslip.com/advice');
  var convertedSlipAdvice = await slipAdvice.json();
  console.log(convertedSlipAdvice);
}

generateAdvice();

function myAdvice() {
  document.getElementById("advice").innerHTML = generateAdvice()
  .then() ;
}


