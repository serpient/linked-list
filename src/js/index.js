// DOM Manipulation with Pure JavaScript
const testerPureJavaScriptFunction = () => {
  const subtext = document.getElementsByClassName('subtext')[0];
  subtext.setAttribute('style', "background-color: blue" );
}

window.addEventListener('load', () => {
  testerPureJavaScriptFunction();
})
