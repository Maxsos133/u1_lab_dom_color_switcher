const redbtn = document.querySelector(`.red`)
const whitebtn = document.querySelector(`.white`)
const bluebtn = document.querySelector(`.blue`)
const yellowbtn = document.querySelector(`.yellow`)
const body = document.querySelector(`body`)

const redSwitch = () => {
    body.style.backgroundColor = `red`
    body.style.color = `white`
}
redbtn.addEventListener(`click`, redSwitch)

const whiteSwitch = () => {
    body.style.backgroundColor = `white`
    body.style.color = `black`
}
whitebtn.addEventListener(`click`, whiteSwitch)

const blueSwitch = () => {
    body.style.backgroundColor = `blue`
    body.style.color = `white`
}
bluebtn.addEventListener(`click`, blueSwitch)

const yellowSwitch = () => {
    body.style.backgroundColor = `yellow`
    body.style.color = `black`
}
yellowbtn.addEventListener(`click`, yellowSwitch)

