import { message, gotcha } from "./messages.js"

const blankSquares = document.getElementsByClassName("square")

export function handleClick(){

    for (let index = 0; index < blankSquares.length; index++) {

        let element = blankSquares[index]

        element.addEventListener('click', function addClass(event){
            event.target.classList.add('clicked')

            if(element.classList.contains('ghost')){
                gotcha() 
                return
                    
    
             } else {
                message()    
                        }   

        })

       
    }


console.log(blankSquares.length)

   
    
}

