function random255() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return `rgb(${random255()},${random255()},${random255()})`;
}

let stage;
let problem;
let correctAnswer;

function nextStage() {
  // 다음 단계에 대한 상태로 전환
  stage++;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}

function draw() {
  // 화면 그리기
  document.querySelectorAll('.box').forEach((el, index) => {
    el.style.backgroundColor = problem[index];
  })
  document.querySelector('.rgb-text').textContent = problem[correctAnswer];
  document.querySelector('.score').textContent = `SCORE: ${stage}`;
}

function init() {
  stage = 0;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}

document.querySelectorAll('.box').forEach((el, index) => {
  el.addEventListener('click', e => {
    el.classList.add('show');
    if (index === correctAnswer) {
      document.querySelector('.correct').classList.add('show');
    } else {
      document.querySelector('.wrong').classList.add('show');
    }
  });
})

document.querySelector('.correct .modal-button').addEventListener('click', function(event) {
  nextStage();
  draw();
  document.querySelector('.correct').classList.remove('show');
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show');
  });
});

document.querySelector('.wrong .modal-button').addEventListener('click', function(event) {
  init();
  draw();
  document.querySelector('.wrong').classList.remove('show');
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show');
  });
});

init();
draw();