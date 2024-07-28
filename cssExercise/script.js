let $ = document
let withoutSmallerSymbol = $.querySelectorAll(".container p")
let withSmallerSymbol = $.querySelectorAll(".container>p")

console.log("with symbol", withSmallerSymbol)
console.log("without symbol", withoutSmallerSymbol)
