let res = document.querySelector('p#divRes')
let list = []
function randomNum(min, max) {
    return Math.floor((Math.random() * max + 1) + min)
}

function sortear() {
    let numMin = document.getElementById('idOfNumber').value
    let numMax = document.getElementById('idAte').value
    let NumSorted = randomNum(numMin, numMax).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

    for (let i = 0; i < list.length; i++) {
        if (NumSorted == list[i]) {
            NumSorted = randomNum(numMin, numMax).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

            i = -1;
            if (list.length == numMax) {
                window.alert('Todos os Números foram sorteados!')
                window.location.reload();
                break;
            }
        }
    }
    list.push(NumSorted)
    res.innerHTML = '';
    res.innerHTML += '<p>Resultado</p>';
    res.innerHTML += '<p>O número sorteado foi:</p><br>';
    res.innerHTML += `<p><span>${NumSorted}</span></p>`;
    res.innerHTML += `Números sorteados: ${list}`
}
