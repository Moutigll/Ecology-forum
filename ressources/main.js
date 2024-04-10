let isDown = false;
let startY;

var container=document.getElementById("scroll-box")

container.addEventListener('mousedown', (e) => {
    isDown = true;
    startY = e.pageY - container.offsetTop;
    scroll = container.scrollTop
});

container.addEventListener('mouseleave', () => {
    isDown = false;
});

container.addEventListener('mouseup', () => {
    isDown = false;
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    container.scrollTo(0, -((e.pageY - container.offsetTop) - startY) + scroll)
});