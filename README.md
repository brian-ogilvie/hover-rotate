# 3D Hover Rotation

A UI experiment using CSS and Vanilla JS. 

## The Inspiration

I was inspired by the hover effect on AppleTV. As the user moves their finger over the remote trackpad, the active element responds to the perceived location of their finger within it. I wanted to recreate this effect using CSS (3D rotation and perspective) and JavaScript. Here is the result:

<img src="https://res.cloudinary.com/brian-ogilvie/image/upload/v1578706309/Random%20GitHub/hover_rotate.gif" alt="hover effect demo" />

## The Code

```
// main.js

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

const hoverBox = document.querySelector('.hover-box');
hoverBox.addEventListener('mousemove', transformHoverBox);
```

Part of the effect requires the div containing the box to have a perspective property:

```
/* style.css */

.hover-box-holder {
  perspective: 300px;
}
```