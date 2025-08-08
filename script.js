const body = document.getElementsByTagName("body")[0]


function setColor(name){
    body.style.backgroundColor = name
}

function randomColor(){
    // R G B(values){0 - 255}
    const r = Math.round(Math.random() * 255)
    const g = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)
    
    const color =`rgb(${r}, ${g}, ${g}, ${b})`

    body.style.backgroundColor= color
}

// randomColor()