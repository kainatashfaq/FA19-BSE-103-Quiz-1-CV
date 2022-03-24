function btnClicked() 
{
    console.log("button CLicked");
    var btn = document.querySelector("button");
    btn.onclick = ()=>{
            window.print();
        }
}
function doBindings() {
            var btn = document.getElementById("button");
            console.log(btn);
            btn.onclick = btnClicked;
          }

window.onload = doBindings;
console.log("Time Out Called");