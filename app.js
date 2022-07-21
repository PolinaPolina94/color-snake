const board = document.querySelector('#board')

const colors = ['#FFA07A', '#FF6347', '#F0E68C', '#00FFFF', '#32CD32', '#DC143C', '#1E90FF']

const SQUARES_COUNT = 340

for (let i=0; i < SQUARES_COUNT; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square) )

    square.addEventListener('mouseleave', ()=> 
    removeColor(square)
    )

    board.append(square)
}


function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#FFDE5A'
    element.style.boxShadow = `0 0 2px #FAEBD7`

}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
return colors[index]
}

