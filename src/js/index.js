window.addEventListener('load', () => {
  let root = document.getElementById('root');
  let div = document.createElement('div');
  div.setAttribute('class', 'name');
  let text = document.createTextNode('test');
  div.appendChild(text);
  root.appendChild(div);
})