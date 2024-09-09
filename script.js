// Mapeando todos os botões '-'
let calcList = document.getElementById('listaDeCalculo');
let result = document.getElementById('resultado');
let zero = document.getElementById('zero');
let um = document.getElementById('um');
let dois = document.getElementById('dois');
let tres = document.getElementById('tres');
let quatro = document.getElementById('quatro');
let cinco = document.getElementById('cinco');
let seis = document.getElementById('seis');
let sete = document.getElementById('sete');
let oito = document.getElementById('oito');
let nove = document.getElementById('nove');
let add = document.getElementById('adicao');
let subtract = document.getElementById('subtracao');
let multiply = document.getElementById('multiplicacao');
let divide = document.getElementById('divisao');
let dot = document.getElementById('ponto');
let percent = document.getElementById('porcentagem');
let switchSign = document.getElementById('maisOuMenos');
let remove = document.getElementById('deletar');
let clear = document.getElementById('limpar');
let calculate = document.getElementById('calcular');

const comptNumbers = [];

// Um bazilhão de coisas pra checar os botões '-'
zero.addEventListener('click', () => {
    comptNumbers.push(0)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
um.addEventListener('click', () => {
    comptNumbers.push(1)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
dois.addEventListener('click', () => {
    comptNumbers.push(2)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
tres.addEventListener('click', () => {
    comptNumbers.push(3)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
quatro.addEventListener('click', () => {
    comptNumbers.push(4)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
cinco.addEventListener('click', () => {
    comptNumbers.push(5)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
seis.addEventListener('click', () => {
    comptNumbers.push(6)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
sete.addEventListener('click', () => {
    comptNumbers.push(7)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
oito.addEventListener('click', () => {
    comptNumbers.push(8)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
nove.addEventListener('click', () => {
    comptNumbers.push(9)
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
add.addEventListener('click', () => {
    comptNumbers.push('+')
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
subtract.addEventListener('click', () => {
    comptNumbers.push('-')
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
multiply.addEventListener('click', () => {
    comptNumbers.push('*')
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
divide.addEventListener('click', () => {
    comptNumbers.push('/')
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath
});
percent.addEventListener('click', () => {
    const finalMath = comptNumbers.join(''); 
    const numRecebido = eval(finalMath)
    result.innerHTML = numRecebido/100
})
dot.addEventListener('click', () => {
    comptNumbers.push('.')
    const finalMath = comptNumbers.join(''); 
    calcList.innerHTML = finalMath  
});
remove.addEventListener('click', () => {
    comptNumbers.pop()
    const finalMath = comptNumbers.join('');
    calcList.innerHTML = finalMath  
});
clear.addEventListener('click', () => {
    comptNumbers.splice(0, comptNumbers.length)
    const finalMath = comptNumbers.join('');
    calcList.innerHTML = finalMath
    result.innerHTML = finalMath
});
calculate.addEventListener('click', () => {
    const finalMath = comptNumbers.join('');
    const numRecebido = eval(finalMath)
    result.innerHTML = numRecebido
});
switchSign.addEventListener('click', () => {
    para: for (let i = comptNumbers.length; i > 0; i--) {
        if (comptNumbers[i] == '+' || comptNumbers[i] == '*' || comptNumbers[i] == '/') {
            comptNumbers.splice(i + 1, 0, '-')
            break para
        } else if (comptNumbers[i] == '-') {
            comptNumbers.splice(i + 1, 1, '+')
            break para
        } else if (comptNumbers[0] == 0 ||
            comptNumbers[0] == 1 ||
            comptNumbers[0] == 2 ||
            comptNumbers[0] == 3 ||
            comptNumbers[0] == 4 ||
            comptNumbers[0] == 5 ||
            comptNumbers[0] == 6 ||
            comptNumbers[0] == 7 ||
            comptNumbers[0] == 8 ||
            comptNumbers[0] == 9 &&
            !(comptNumbers[0] == '-')) {
            comptNumbers.splice(i - 1, 0, '-')
            break para
        } 
        console.log(comptNumbers)
    }
    const finalMath = comptNumbers.join('');
    calcList.innerHTML = finalMath
});
