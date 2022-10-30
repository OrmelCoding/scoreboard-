let hscoreEl = document.getElementById("hscore-el")
let gscoreEl = document.getElementById("gscore-el")

let points = 0
let guestNum = 0
let reset = points * guestNum


function home1(){
  points += 1
  hscoreEl.textContent = points
} 

function home2(){
  points += 2
  hscoreEl.textContent = points
}

function home3(){
  points += 3  
  hscoreEl.textContent = points
}

function guest1(){
  guestNum += 1
  gscoreEl.textContent = guestNum
}

function guest1(){
  guestNum += 1
  gscoreEl.textContent = guestNum
}

function guest2(){
  guestNum += 2
  gscoreEl.textContent = guestNum
}

function guest3(){
  guestNum += 3
  gscoreEl.textContent = guestNum 
}
    