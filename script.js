const emojis = ['🍒','🍎','🍊','🍋','🍅','🥭','🍏','🍓','🌹','🌸','🌷' ];

function spinStart() {
  const slotsEl = document.querySelectorAll('#slots span');
  const resultEl = document.getElementById("result");

  let result = [];
  for(let i = 0; i < 3; i++){
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    slotsEl[i].innerHTML = randomEmoji;
    result.push(randomEmoji);
  }

  if(result[0] === result[1] && result[1] === result[2]){
    resultEl.innerHTML = "😎 You Win!"
    resultEl.style.color = '#4ade80';
  }
  else{
    resultEl.innerHTML = "😓 Try Agail"
    resultEl.style.color = '#f87171';
  }
}
