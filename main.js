function createCircle(){
    const circleE1 = document.createElement('div')
    circleE1.classList.add('circle')
    circleE1.style.top=Math.random() * innerHeight + "px"
    circleE1.style.left= Math.random() * innerWidth + "px"
    document.body.appendChild(circleE1);

    setTimeout(() => {
        circleE1.remove()
    }, 3000)
}

setInterval(createCircle,300)