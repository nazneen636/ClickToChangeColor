// ------------project 1---------------
// const root= document.querySelector('body')
// const btn= document.querySelector('#btn')

// window.onload=()=>{
//     main()
// }

// function main(){
//     btn.addEventListener('click', function(){
//         root.style.backgroundColor= color()
//     })
// }

// function color(){
//     const red= Math.floor(Math.random()*255)
//     const green= Math.floor(Math.random()*255)
//     const blue= Math.floor(Math.random()*255)
//     return `rgb(${red}, ${green}, ${blue})`
// }
// ------------project 1---------------




// ------------project 2---------------
// const root= document.querySelector('body')
// const btn= document.querySelector('#btn')
// const output= document.querySelector('#output')


// window.onload=()=>{
//     main()
// }

// function main(){
//     btn.addEventListener('click', function(){
//         root.style.backgroundColor= color()
//         output.value= color()
//     })
// }

// function color(){
//     const red= Math.floor(Math.random()*255)
//     const green= Math.floor(Math.random()*255)
//     const blue= Math.floor(Math.random()*255)
//     return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
// }
// ------------project 2---------------




// ------------project 3---------------
// const root= document.querySelector('body')
// const changeBtn= document.querySelector('#btn')
// const output= document.querySelector('#output')
// const copyBtn= document.querySelector('#copy')

// window.onload=()=>{
//     main()
// }

// function main(){
//     changeBtn.addEventListener('click', function(){
//         root.style.backgroundColor= color()
//         output.value= color()
//     })


//     copyBtn.addEventListener('click', function(){
//         navigator.clipboard.writeText(output.value)
//     })
// }

// function color(){
//     const red= Math.floor(Math.random()*255)
//     const green= Math.floor(Math.random()*255)
//     const blue= Math.floor(Math.random()*255)
//     return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
// }
// ------------project 3---------------


// ------------project 4---------------
// const root= document.querySelector('body')
// const changeColorBtn= document.querySelector('#change-btn')
// const copyBtn= document.querySelector('#copy-btn')
// const output= document.querySelector('#hex-input')
// let div= null


// window.onload =()=>{
//     main()
// }

// function main(){
//     changeColorBtn.addEventListener('click', function(){
//         root.style.backgroundColor= generateColor()
//         output.value= generateColor()
//     })

//     copyBtn.addEventListener('click', function(){
//         navigator.clipboard.writeText(output.value)

//         if(div!= null){
//             div.remove(0)
//             div= null
//         }
//         generateToastMsg(`${output.value} Copied`)
//     })

    
// }

// function generateColor(){
//     const red= Math.floor(Math.random()*255)
//     const green= Math.floor(Math.random()*255)
//     const blue= Math.floor(Math.random()*255)
//     return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}` 
// }

// function generateToastMsg(msg){
//     div= document.createElement('div')
//     div.innerText= msg
//     div.className= 'toast-msg toast-msg-slide-in'
    
//     div.addEventListener('click', function(){
//         div.classList.remove('toast-msg-slide-in')
//         div.classList.add('toast-msg-slide-out')

//         div.addEventListener('animationend', function(){
//             div.remove()
//             div= null
//         })
//     })

    

//     document.body.appendChild(div)
// }
// // ------------project 4---------------

// // // ------------project 5---------------
// const root= document.querySelector('body')
// const changeColorBtn= document.querySelector('#change-btn')
// const copyBtn= document.querySelector('#copy-btn')
// const output= document.querySelector('#hex-input')
// let div= null


// window.onload =()=>{
//     main()
// }

// function main(){
//     changeColorBtn.addEventListener('click', function(){
//         root.style.backgroundColor= generateColor()
//         output.value= generateColor()
//     })

//     copyBtn.addEventListener('click', function(){
//         navigator.clipboard.writeText(output.value)

//         if(div!= null){
//             div.remove(0)
//             div= null
//         }

//         if(isValidHex(output.value)){
//             generateToastMsg(`${output.value} Copied`)
//         }else{alert('Invalid Color Code')}
        
//     })

//     output.addEventListener('keyup', function(e){
//         const color=e.target.value

//         if(color && isValidHex(color)){
//             root.style.backgroundColor= color
//         }
//     })
// }

// function generateColor(){
//     const red= Math.floor(Math.random()*255)
//     const green= Math.floor(Math.random()*255)
//     const blue= Math.floor(Math.random()*255)
//     return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}` 
// }

// function generateToastMsg(msg){
//     div= document.createElement('div')
//     div.innerText= msg
//     div.className= 'toast-msg toast-msg-slide-in'
    
//     div.addEventListener('click', function(){
//         div.classList.remove('toast-msg-slide-in')
//         div.classList.add('toast-msg-slide-out')

//         div.addEventListener('animationend', function(){
//             div.remove()
//             div= null
//         })
//     })
//     document.body.appendChild(div)
// }

// function isValidHex(color){
//     if(color.length!=7) return false
//     if(color[0]!='#') return false

//     color= color.substring(1)
//     return /^[0-9A-Fa-f]{6}$/i.test(color)
// }
// // ------------project 5---------------



// // ------------project 6---------------
// const root= document.querySelector('body')
// const changeColorBtn= document.querySelector('#change-btn')
// const copyBtn= document.querySelector('#copy-btn')
// const output= document.querySelector('#hex-input')
// let div= null


// window.onload =()=>{
//     main()
// }

// function main(){
//     changeColorBtn.addEventListener('click', function(){
//         const bgColor= generateColor()
//         root.style.backgroundColor= bgColor
//         output.value= bgColor.substring(1)
//     })

//     copyBtn.addEventListener('click', function(){
//         navigator.clipboard.writeText(`#${output.value}`)

//         if(div!= null){
//             div.remove(0)
//             div= null
//         }

//         if(isValidHex(output.value)){
//             generateToastMsg(`#${output.value} Copied`)
//         }else{alert('Invalid Color Code')}
        
//     })

//     output.addEventListener('keyup', function(e){
//         const color=e.target.value
//         if(color){
//             output.value=e.target.value.toUpperCase()

//             if(isValidHex(color)){
//                 root.style.backgroundColor= `#${color}`
//             }
//         }

        
//     })
// }

// function generateColor(){
//     const red= Math.floor(Math.random()*255)
//     const green= Math.floor(Math.random()*255)
//     const blue= Math.floor(Math.random()*255)
//     const rgb= `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    
//     return rgb.toUpperCase()
// }

// function generateToastMsg(msg){
//     div= document.createElement('div')
//     div.innerText= msg
//     div.className= 'toast-msg toast-msg-slide-in'
    
//     div.addEventListener('click', function(){
//         div.classList.remove('toast-msg-slide-in')
//         div.classList.add('toast-msg-slide-out')

//         div.addEventListener('animationend', function(){
//             div.remove()
//             div= null
//         })
//     })
//     document.body.appendChild(div)
// }

// function isValidHex(color){
//     if(color.length!=6) return false
//     return /^[0-9A-Fa-f]{6}$/i.test(color)
// }
// ------------project 6---------------



// ------------project 7---------------

const root= document.querySelector('body')
const changeColorBtn= document.querySelector('#change-color-btn')
const copyHex= document.querySelector('#copy-hex')
const copyRgb= document.querySelector('#copy-rgb')
const outputHex= document.querySelector('#hex-input')
const outputRgb= document.querySelector('#rgb-input')
let div= null

window.onload=()=>{
    main()
}

function main(){
    changeColorBtn.addEventListener('click', function(){
        let color= generateColorDecimal()
        let hex= generateHexColor(color)
        let rgb= generateRgbCOlor(color)
       root.style.backgroundColor= hex
       outputHex.value= hex.substring(1)
       outputRgb.value= rgb 
    })}
outputHex.addEventListener('keyup', function(e){
    color= e.target.value
    root.style.backgroundColor= `#${color}`

    if(color){
        if(isValidHex(color)){
            root.style.backgroundColor= `#${color}`
            outputRgb.value= hexToRgb(color) 
        }
    }
})

copyHex.addEventListener('click', function(){
    navigator.clipboard.writeText(`#${outputHex.value}`)
    if(div!==null){
        div.remove()
        div= null
    }
    generateToastMsg(`#${outputHex.value} Copied`)
})

copyRgb.addEventListener('click', function(){
    navigator.clipboard.writeText(`#${outputRgb.value}`)
    if(div!==null){
        div.remove()
        div= null
    }
    generateToastMsg(`${outputRgb.value} Copied`)
})

function generateColorDecimal(){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    return {
        red,
        green,
        blue
    }
}

function generateHexColor({red, green, blue}){
    // const {red, green, blue}= generateColorDecimal() 
    // const twoCodeRed= red<=9?`0${red}`:red.toString(16)
    // const twoCodeGreen= green<=9?`0${green}`:green.toString(16)
    // const twoCodeBlue= blue<=9?`0${blue}`:blue.toString(16)
    

    const getTwoCode =(value)=>{
        const hex= value.toString(16)
        return hex.length==1? `0${hex}`:hex
    }

    return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase()
}


function generateRgbCOlor({red, green, blue}){
    // const {red, green, blue}= generateColorDecimal() ------No Need

    return `rgb(${red}, ${green}, ${blue})`
}


function isValidHex(){
    if(color.length !== 6) return false
    return /^[0-9A-Fa-f]{6}$/i.test(color)
    
}

function generateToastMsg(msg){
    div= document.createElement('div')
    div.innerText= msg
    div.className= 'toast-msg toast-msg-slide-in'

   div.addEventListener('click', function(){
    div.classList.remove('toast-msg-slide-in')
    div.classList.add('toast-msg-slide-out')


    div.addEventListener('animationend', function(){
        div.remove()
        div= null
       })
   })

    root.appendChild(div)
}


function hexToRgb(hex){
    const red= parseInt(hex.slice(0,2), 16)
    const green= parseInt(hex.slice(2,4),16)
    const blue= parseInt(hex.slice(4),16)

    let rgb= `rgb(${red}, ${green}, ${blue})`
    return rgb.toUpperCase()
}


// ------------project 7---------------

/**
 * @param
 * @returns
 */