const btn = document.getElementById('btn')
const min = 50
const max = 206
const colorBox = document.getElementById('colorBox')
const resetBtn = document.getElementById('resetBtn')


btn.onclick = ()=>{
    
    
    r = Math.floor(Math.random() * max) + min
    g = Math.floor(Math.random() * max) + min
    b = Math.floor(Math.random() * max) + min

    document.getElementById('myH2').textContent = `rgb(${r}, ${g}, ${b})`
    
    btn.style.color = (r + g + b) / 3 < 128 ? 'white' : 'black';
    
    btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    
    
    navigator.clipboard.writeText(document.getElementById('myH2').textContent)
    
}

resetBtn.onclick = ()=>{
    r = 255;
    g = 255;
    b = 255;
    
    resetBtn.style.color = (r + g + b) / 3 < 128 ? 'white' : 'black';
    resetBtn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    document.getElementById('myH2').textContent = `rgb(${r}, ${g}, ${b})`
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
