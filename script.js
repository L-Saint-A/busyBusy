app = {};

app.init = () => {
    console.log("hello")
}

let filler = $(`.filler`);

console.log(filler)

if (filler.attr(`width:`, `>= 100px`) ) {
    filler.attr(`background-color`, `blue`)
}




$(function(){
    app.init()
});