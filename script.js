'use strict'

let finish = document.body.querySelector('#finish');
let step = document.body.querySelector('span');
let field = document.querySelector('#table');
let state = 'X';
let status, scoreX, scoreO;
status = scoreX = scoreO = 0;

field.addEventListener('click', setSymbol);

function setSymbol() {
   if (status === 0) {
        if (event.target.innerHTML === '') {
            step.innerHTML = `Ход: ${state}`;
            (state === 'O') ? state = 'X' : state = 'O';
            event.target.innerHTML = state;
            let x = checkOnX('XXX');
            let o = checkOnX('OOO');
            if (x || o) {
                x ? scoreX++ : scoreO++;
                document.body.querySelector('#stat2').innerHTML = `\nX:-${scoreX} O:-${scoreO}\n`
                finish.classList.remove('hidden');
                console.log("Ok");
                status = 1;
            }
        }
    }
}

function restart() {
    finish.classList.add('hidden');
    status = 0;
    let tdClear = field.getElementsByTagName('td');
    for (let i = 0; i < tdClear.length; i++) {
        tdClear[i].innerHTML = '';
    }
}

function checkOnX(item) {
    let td = field.getElementsByTagName('td');
    let index = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < index.length; i++) {
      let deep =  td[index[i][0]].innerHTML + td[index[i][1]].innerHTML + td[index[i][2]].innerHTML;
      if (deep === item) return true;
    }
    
   return false;
}

