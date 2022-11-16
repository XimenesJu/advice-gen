const advice = document.getElementById("advice")
const slipid = document.getElementById("slipid")

async function generateAdvice() {
  var slipAdvice = await fetch('https://api.adviceslip.com/advice');
  var convertedSlipAdvice = await slipAdvice.json();
  return convertedSlipAdvice;
}

async function myAdvice() {
  var getid = await generateAdvice() 
  var getadvice = await generateAdvice() 
  slipid.innerHTML = getid.slip.id
  advice.innerHTML = getadvice.slip.advice
  console.log(getadvice.slip.advice)
  console.log(getid.slip.id)
}



