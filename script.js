const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
// const colors = ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed','#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0']


const container  = document.getElementById("container")

const SQUARES = 500 //800 squares

for(let i=0;i<SQUARES;i++){
    const square = document.createElement("div")
    square.classList.add("square") // div chya aat square takla

    square.addEventListener("mouseover",()=> setColor(square)) // Change the colour when cursor enters square box
    square.addEventListener("mouseout",()=> removeColor(square)) // Back to original position when cursor goes out of square box

    container.appendChild(square)
}

function setColor(element){
    const color = randomColor()

    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element){
    element.style.background = "#1d1d1d"
    element.style.boxShadow = "0 0 2px #000"
}
function randomColor(){
    const index = Math.floor(Math.random()*colors.length) //It will give us any random colour 
    return colors[index]
}