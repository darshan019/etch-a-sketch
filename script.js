let grid = document.querySelector('.grid')
let reset = document.getElementById('reset')
let clear = document.getElementById('clear')
let rainbow = document.getElementById('rainbow')
let reload = document.getElementById('reload')

reload.addEventListener('click', () => {
    location.reload()
})


reset.addEventListener('click', () => {
    let num = parseInt(prompt('select grid size number from 1-100'))
    if(typeof(num) !== 'number') {
        alert('ERROR')
    }
    else if(num <= 100) {
        grid.innerHTML = '';
        createGrid(num);
    }
})


function createGrid(num) {
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`

    for(let i = 0; i < num*num; i++) {
        let cell = document.createElement('div')
        cell.classList.add('square')
        cell.style.backgroundColor = 'black'
        cell.style.border = '1px solid lime'
        grid.appendChild(cell)

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'white'
        })
        clear.addEventListener('click', () => {
            cell.style.backgroundColor = 'black'
        })

        rainbow.addEventListener('click',() => {
            cell.addEventListener('mouseover', () => {
                let color = '#'
                let arr = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
                for(let i = 0; i < 6; i++) {
                    color += arr[Math.floor(Math.random()*arr.length)]
                }
                cell.style.backgroundColor = color
            })
        
        })
    }

}
