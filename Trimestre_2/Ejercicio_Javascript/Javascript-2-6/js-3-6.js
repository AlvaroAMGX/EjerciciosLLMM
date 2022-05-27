var frases = [
'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
"Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
'God save me from my friends. I can protect myself from my enemies.',
'Bulería Bulería cuando seras mía.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum euismod rhoncus. Nulla fringilla libero in est tincidunt porttitor. Nullam in nisl et felis malesuada eleifend ac non odio.',
'Viva Ucrania',
]

var autor = [
'-Jhon Forstein',
'-Groucho Marx',
'-Stalin',
'-Federico García Lorca',
'-Dios en si mismo',
'-David Bisbal',
'-Poeta que hablaba Latín',
'Putin Joselito',
]

function generador() {
    var  numero = Math.floor(Math.random() * (frases.length));
    document.getElementById("parrafo").innerHTML = frases[numero]
    document.getElementById("autor").innerHTML = autor[numero]
}