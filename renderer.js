let input = document.getElementById('input')
let out = document.getElementById('out')
let button = document.getElementById('button')

function ctg(x) { return 1 / Math.tan(x); }

function condition(x) {
    if(x < 0) return (Math.sin(x+5 ))**2
    else {
        return (((Math.cos(x))**2) + ((Math.sin(x ))**2))/ ((ctg(x))**2)
    }
}




let Count = () =>{
    out.innerHTML = "ВІДПОВІДЬ: " + condition(input.value)
}
 
button.addEventListener("click", Count)
