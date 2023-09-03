const MaiorNumeroDeDois = () => {
    let primero_numero = parseFloat(prompt("Qual é o primeiro numero?"))
    let segundo_numero = parseFloat(prompt("Qual é o segundo numero?"))

    let maiorNumero = primero_numero > segundo_numero ? primero_numero : segundo_numero;

    alert(`O maior número é ${maiorNumero}`)
}


const PositivoOuNegativo = () => {
    let numero = parseFloat(prompt("Por favor, me diga o valor"))
    let resultado = numero >= 0 ? "Positivo" : "Negativo"

    alert(`O número é ${resultado}`)
}


const MaiorDeTresNumeros = () => {
    let primero_numero = prompt("Qual é o primeiro numero?")
    let segundo_numero = prompt("Qual é o segundo numero?")
    let terceiro_numero = prompt("Qual é o terceiro numero?")

    const OrgNumbers = OrdenarNumerosCrescente(primero_numero, segundo_numero, terceiro_numero)

    alert(`O maior número é ${OrgNumbers.get(0)}`)
}

const SomaDosDoisMaioresNumeros = () => {
    let primero_numero = prompt("Qual é o primeiro numero?")
    let segundo_numero = prompt("Qual é o segundo numero?")
    let terceiro_numero = prompt("Qual é o terceiro numero?")

    const OrgNumbers = OrdenarNumerosCrescente(primero_numero, segundo_numero, terceiro_numero)

    alert(`A soma dos maiores números é ${OrgNumbers.get(0) + OrgNumbers.get(1)}`)
}

const MediaAritmetica = () => {
    let posicoes = ["primeiro", "segundo", "terceiro", "quarto", "quinto", "sexto"]
    let somaDeTodos = 0

    for(let i = 0; i < 6; i++) {
        let frase = `Qual é o ${posicoes[i]} número?`
        somaDeTodos += parseFloat(prompt(frase))
    }

    alert(`A média dos valores é ${somaDeTodos / 6}`)
}

const PriUltMaior = () => {
    let posicoes = ["primeiro", "segundo", "terceiro", "quarto"]
    let numeros = []
    let maiorNumero
    
    for(let palavra of posicoes) {
        let frase = `Qual é o ${palavra} número?`
        numeros.push(parseFloat(prompt(frase)))
    }

    for(let num of numeros) {
        let maior = false 
        for(let numA of numeros) {
            if(num >= numA) maior = true
            else {
                maior = false
                break
            }
        }

        if(maior === true) {
            maiorNumero = num
            break
        }
    }


    alert(`O primeiro número informado foi: ${numeros[0]}, o ultimo foi: ${numeros[numeros.length - 1]} e o maior foi ${maiorNumero}`)
}



const SomaLimitada = () => {
    let posicoes = ["primeiro", "segundo", "terceiro", "quarto", "quinto", "sexto"]
    let numeros = ''
    let somaDeTodos = 0

    for(let i = 0; i < 6; i++) {
        let frase = `Qual é o ${posicoes[i]} número?`
        let valor = parseFloat(prompt(frase))

        if(i == 5) {
            numeros += `${valor}`
        } else {
            numeros += `${valor}, `
        }
       
        if(valor < 72) somaDeTodos += valor
    }

    alert(`A soma de todos números inferiores a 72 deu ${somaDeTodos}, e os números informados foram [ ${numeros} ]`)
}


const MediaTeste = () => {
    let posicoes = ["primeiro", "segundo", "terceiro", "quarto"]
    let somaDeTodos = 0

    for(let palavra of posicoes) {
        let frase = `Qual é o ${palavra} número?`
        let valor = parseFloat(prompt(frase))
     
        if(valor < 10 && valor > 0) somaDeTodos += valor;
    }

    if((somaDeTodos / 4) > 5) {
        alert(`Você passou no teste com a média de ${somaDeTodos / 4}`) 
    } else if((somaDeTodos / 4) <= 5) {
        alert(`Lamento, você reprovou no teste com a média de ${somaDeTodos / 4}`) 
    } else {
        alert(`Tente novamente`) 
    }

 
}

const PodeVotar = () => {
    let anoNasc = prompt("Em que ano você nasceu?")
    let anoAtual = new Date().getFullYear()

    if((anoAtual - anoNasc) >= 18 ) alert("Párabens você pode votar ^-^")
    else alert("Lamento você não pode votar T-T")
 
}


const PesoIdeal = () => {
    let sexo = prompt("Qual teu sexo? responda 1 para feminino e 2 para masculino")
    let altura = parseFloat(prompt("Ótimo!, qual é a sua altura?"))
    let pesoIdeal

    if(sexo === "1") pesoIdeal = (62.1 * altura) - 44.7
    else if(sexo === "2") pesoIdeal = (72.7 * altura) - 58
    else return alert("O sexo inserido está incorreto")

    alert("O peso ideal não existe, se aceite <3")
    alert(`Mas a saúde existe ( risada malefica ), o teu peso ideal seria ${pesoIdeal}`)

    if((anoAtual - anoNasc) >= 18 ) alert("Párabens você pode votar ^-^")
    else alert("Lamento você não pode votar T-T")
 
}

const Calculadora = () => { 
    let opcao = prompt("Digite 1 para Adição, 2 para subtração, 3 para Divisão, 4 para multiplicação")
    let primero_numero = parseInt(prompt("Qual é o primeiro número?"))
    let segundo_numero = parseInt(prompt("Qual é o segundo número?"))

    let resultado

    switch(opcao) {    
        case "1":
            resultado = primero_numero + segundo_numero
            break
        case "2": 
            resultado = primero_numero - segundo_numero
            break
        case "3": 
            resultado = primero_numero / segundo_numero
            break
        case "4": 
            resultado = primero_numero * segundo_numero
            break
        default: 
            return alert("Insira uma opção valida")
    }

    alert(`O resultado é ${resultado}`)
}


function OrdenarNumerosCrescente(primeiro, segundo, terceiro) {
    let data = [parseFloat(primeiro), parseFloat(segundo), parseFloat(terceiro)]

    let newData = new Map()

    for(let num of data) {
        if(num >= data[0] && num >= data[1] && num >= data[2]) newData.set(0, num)
        else if(num > data[0] || num > data[1] || num > data[2]) newData.set(1, num)
        else newData.set(2, num)
    }

    return newData
}