const messages = ['Está salvo!', 'Você ainda vive', 'Teve sorte, hein?', 'Estou cada vez mais perto de você.','Já disse adeus para a família?','Ah, não foi dessa vez!']



export function message(){

    let randomPosition = Math.floor(Math.random() * 6);

    return alert(messages[randomPosition])
}

export function gotcha(){

    let response = "Peguei você! HAHAHAHA *risada maléfica*"

    return alert(response)
}

