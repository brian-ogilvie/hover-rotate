const box = document.getElementById('box');
const inputs = document.querySelectorAll('input');
const hoverBoxes = document.querySelectorAll('.hover-box');

const boxStyle = {
  x: 0,
  y: 0,
  z: 0,
  angle: 0
};

function handleSliderChange() {
  const { name, value } = this;
  boxStyle[name] = Number(value);
  const { x, y, z, angle } = boxStyle;
  box.style.transform = `rotate3d(${x}, ${y}, ${z}, ${angle}deg)`;
}

function transformHoverBox(e) {
  const { pageX, pageY } = e;
  const { x, y, width, height } = e.target.getBoundingClientRect();
  const midX = x + width / 2;
  const midY = y + height / 2;
  const percentX = (pageX - midX) / (0.5 * width);
  const percentY = (midY - pageY) / (0.5 * height);
  const rotateX = `rotateX(${5 * percentY}deg)`;
  const rotateY = `rotateY(${5 * percentX}deg)`;
  e.target.style.transform = `${rotateX} ${rotateY}`;
}

function restoreHoverBox(e) {
  e.target.classList.add('transition');
  e.target.style.transform = 'none';
  setTimeout(() => {
    e.target.classList.remove('transition');
  }, 200);
}

function enterHoverBox(e) {
  e.target.classList.add('transition');
  setTimeout(() => {
    e.target.classList.remove('transition');
  }, [200]);
}

inputs.forEach(input => input.addEventListener('input', handleSliderChange));
hoverBoxes.forEach(hoverBox => {
  hoverBox.addEventListener('mouseenter', enterHoverBox);
  hoverBox.addEventListener('mousemove', transformHoverBox);
  hoverBox.addEventListener('mouseleave', restoreHoverBox);
});
