var button = document.getElementById('btn')
var heading = document.getElementById('heading')

console.log(button)

button.addEventListener('click', ()=> {
    alert("Button per click huwa")
    heading.style.display= "inline-block"
})

button2.addEventListener('click', ()=> {
    heading.style.backgroundColor = ""
})