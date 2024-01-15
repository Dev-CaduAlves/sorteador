let sorted = document.querySelector('#pSorted')
let res = document.getElementById('divRes')
let sort = document.querySelector('#numSorteados')
let btn_retry = document.querySelector("#retry")
let list = []
let arr = [];
var signal = true;

btn_retry.addEventListener("click",()=>{
    window.location.reload();
})

function randomNum(min, max) {
    return Math.floor((Math.random() * max + 1) + min)
}

function sortear() {
    let numMin = document.getElementById('idOfNumber');
    let numMax = document.getElementById('idAte');
    res.style.display = 'block';
    for (let i=0; i<=100; i++){
        arr.push(i);
    }

    numMin.disabled = true;
    numMax.disabled = true;
    btn_retry.disabled = false;
    btn_retry.classList.value = "btn_enabled";
    let NumSorted = randomNum(numMin.value, numMax.value).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    for (let i = 0; i < list.length; i++) {
        if (NumSorted == list[i]) {
            NumSorted = randomNum(numMin.value, numMax.value).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            i = -1;
            if (list.length == numMax.value) {
                window.alert('Todos os Números foram sorteados!')
                window.location.reload();
                break;
            }
        }
    }
    list.push(NumSorted)
    animation(sorted,arr,3,NumSorted);
    sorted.innerHTML += `<p id="pNumSorted"><span>${NumSorted}</span></p>`;
    setTimeout(() => {
        sort.innerHTML = `Números sorteados:<br>`;
        sort.innerHTML += `${list}`;
    },3*numMax.value+500);

}

function animation(el,num,interval,Sorted){
    signal = false;
    const typer = setInterval(() => {
        if (!num.length){
            clearInterval(typer);
            signal = true;
            return el.innerHTML = `<p id="pNumSorted"><span>${Sorted}</span></p>`;
        }
        const next = num.pop();
        el.innerHTML = `<p id="pNumSorted"><span>${next}</span></p>`;
    }, interval);

}