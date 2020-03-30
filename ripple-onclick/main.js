const btn = document.querySelector('.sandip-btn')

btn.onclick = (e) => {
  let x = e.clientX - e.target.offsetLeft,
  y = e.clientY - e.target.offsetTop
  
  let ripples = document.createElement('span');
  btn.appendChild(ripples)
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";

  setTimeout(() => {
    ripples.remove()
  }, 5000);
}