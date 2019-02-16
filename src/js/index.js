const testerPureJavaScriptFunction = () => {
  const subtext = document.getElementsByClassName('subtext')[0];
  subtext.setAttribute('style', "background-color: blue" );
}


window.addEventListener('onload', () => {
  console.log('loading')
  testerPureJavaScriptFunction();
})


// const testerJQueryFunction = () => {
//   $(document).ready(() => {
//       $('.subtext').css('color', 'red');
//       $('.subtext').css('background-color', 'blue');
//   })
// }

// testerJQueryFunction();

