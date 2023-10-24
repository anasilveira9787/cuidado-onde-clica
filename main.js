import './style.css'
import "@phosphor-icons/web/light";
import "@phosphor-icons/web/bold";
import {handleClick } from "./actions.js"

import createBoard from './createBoard.js'



document.querySelector('#app').innerHTML = `

    ${createBoard(30)}

`

handleClick()



