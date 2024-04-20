let data = [
    {color:"red",text:"Hello"},
    {color:"orange",text:"hey"},
    {color:"blue",text:"hi"},
]
let clutter = ""
data.forEach(function (elem) {
    clutter += `<div style="background-color: ${elem.color};" class="box">
    <h2>${elem.text}</h2>
            <div class="add"></div>
        </div>`;
        document.querySelector(".container").innerHTML = clutter;
})

