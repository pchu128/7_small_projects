let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

iconPlus = '<i class = "fa fa-plus-circle up"></i>'
iconMinus = '<i class = "fa fa-minus-circle down"></i>'

function displayPlayerList(players) {
  players.forEach( players => {
    dataPanel.innerHTML += `
      <tr>
        <td> <span>${players.name}</span> </td>
        <td> <span>${players.pts}</span> ${iconPlus} ${iconMinus}</td>
        <td> <span>${players.reb}</span> ${iconPlus} ${iconMinus}</td>
        <td> <span>${players.ast}</span> ${iconPlus} ${iconMinus}</td>
        <td> <span>${players.stl}</span> ${iconPlus} ${iconMinus}</td>
        <td> <span>${players.blk}</span> ${iconPlus} ${iconMinus}</td>
      </tr>
    `
  }
 )
}

const dataPanel = document.querySelector('#data-panel')
displayPlayerList(players)

// write your code here

dataPanel.addEventListener('click', function(event) {
  //從加減符號去抓到前面數字的元素
  let score = event.target.parentElement.children[0]
  let scoreNumber = Number(score.innerHTML)
  //設定加減分條件式
  if (event.target.matches('.fa-plus-circle')) {
    scoreNumber += 1
    score.innerHTML = scoreNumber
  } else {
    scoreNumber -= 1
    score.innerHTML = scoreNumber
    if (Number(score.innerHTML) < 0 ) {score.innerHTML = 0}
  }
})