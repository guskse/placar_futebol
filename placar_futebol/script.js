let countA = 0
let countB = 0
let countElA = document.getElementById("count-el-A")
let countElB = document.getElementById("count-el-B")


function scoreA(){
    countA += +1
    countElA.innerText = countA
}


function scoreB(){
    countB += +1
    countElB.innerText = countB 
}

function reset(){
    countA += -countA
    countB += -countB
    countElA.innerText = countA
    countElB.innerText = countB
}