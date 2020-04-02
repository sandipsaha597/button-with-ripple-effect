const btn = document.querySelector('.sandip-btn')

btn.onclick = (e) => {
  let x = e.clientX - e.target.getBoundingClientRect().top,
  y = e.clientY - e.target.getBoundingClientRect().left
  
  let ripples = document.createElement('span');
  btn.appendChild(ripples)
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";

  setTimeout(() => {
    ripples.remove()
  }, 5000);
}