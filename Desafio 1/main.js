// Numeros del 1 al 10 con ciclo FOR

let num = prompt('Ingrese un numero entre el 1 y el 10 (Ciclo FOR)')

document.write('Tabla del ', num, ' con ciclo FOR')
document.write('<br>')

for(i = 0; i <= 10; i++) {
    document.write(`${num} * ${i} = ${num * i}`)
    if(i != 10) {
        document.write('<br>')
    }
}

// Numeros del 1 al 10 con ciclo WHILE

let num2 = prompt('Ingrese un numero entre el 1 y el 10 (Ciclo WHILE)')

document.write('<br>')
document.write('<br>')
document.write('Tabla del ', num2, ' con ciclo WHILE')
document.write('<br>')

j = 0;
while (j <= 10) {
    document.write(`${num2} * ${j} = ${num2 * j}`)
    if(j != 10) {
        document.write('<br>')
    }
    j++
}

// Repetir una palabra con ciclo FOR

let word = prompt('Ingrese una palabra (Ciclo FOR)')
let rep = prompt('Ingrese la cantidad de repeticiones deseada (Ciclo FOR)')

document.write('<br>')
document.write('<br>')
document.write('Palabra ', word, ' con ciclo FOR')
document.write('<br>')

for(k = 0; k < rep; k++) {
    document.write(`${word}`)
    if(k != 10) {
        document.write('<br>')
    }
}

// Repetir una palabra con ciclo WHILE

let word2 = prompt('Ingrese una palabra (Ciclo WHILE)')
let rep2 = prompt('Ingrese la cantidad de repeticiones deseada (Ciclo WHILE)')

document.write('<br>')
document.write('<br>')
document.write('Palabra ', word2, ' con ciclo WHILE')
document.write('<br>')

l = 0;
while (l < rep2) {
    document.write(`${word2}`)
    if(l != 10) {
        document.write('<br>')
    }
    l++
}