const text = "Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет оценить значение дальнейших направлений развития. Таким образом дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий позволяет оценить значение новых предложений. Задача организации, в особенности же реализация намеченных плановых заданий требуют определения и уточнения дальнейших направлений развития.\n" +
  "\n" +
  "Задача организации, в особенности же сложившаяся структура организации представляет собой интересный эксперимент проверки дальнейших направлений развития. Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения соответствующий условий активизации.";



const symbolsPerMinuteElement = document.getElementById("symbols-per-minute");

const completedElement = document.getElementById("completed");
const currentElement = document.getElementById("current");
const textElement = document.getElementById("text");
let timerNotStarted = true;
let secondsFromStart = 0;



const inputElement = document.getElementById("text-input");

let currentLetterNumber = 0;

textElement.textContent = text.slice(1, text.length);
textElement.style.backgroundColor = "#fce";

currentElement.textContent = text[currentLetterNumber];



inputElement.addEventListener('keyup', keyUpListener);

function keyUpListener(event) {
  if(text[currentLetterNumber] === event.key) {
    currentLetterNumber = currentLetterNumber + 1;
    completedElement.textContent =  text.slice(0, currentLetterNumber);
    currentElement.textContent = text[currentLetterNumber];
    textElement.textContent = text.slice(currentLetterNumber + 1, text.length);
  }


  if (timerNotStarted){
    timerNotStarted = false;
    setInterval(tick, 1000);
  }
  if(event.key === " "){
    inputElement.value = "";
  }
}

function tick() {
secondsFromStart ++;
  symbolsPerMinuteElement.textContent = Math.floor((currentLetterNumber/secondsFromStart)*60);
}
