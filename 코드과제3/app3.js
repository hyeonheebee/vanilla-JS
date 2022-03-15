const playForm = document.querySelector("#playGameForm");
const playButton = document.querySelector("button");
const maxNumber = document.querySelector("#playGameForm h2 input");
const guessNumber = document.querySelector("#playGameForm h4 input");
const userChoseText = document.querySelector(".userText");
const machineChoseText = document.querySelector(".machineText");
const LOSTTEXT = document.querySelector(".Lost");
const WINTEXT = document.querySelector(".Win");

function handlePlayGame(event) {
  event.preventDefault();
  const maxNumberValue = parseInt(maxNumber.value);
  const randomNumber = Math.ceil(Math.random() * maxNumberValue);
  const guessNumberValue = parseInt(guessNumber.value);
  userChoseText.classList.remove("hidden");
  machineChoseText.classList.remove("hidden");

  userChoseText.innerText = `you chose: ${guessNumberValue}`;
  machineChoseText.innerText = `machine chose: ${randomNumber}`;

  if (randomNumber === guessNumberValue) {
    WINTEXT.classList.remove("hidden");
    LOSTTEXT.classList.add("hidden");
  } else {
    LOSTTEXT.classList.remove("hidden");
    WINTEXT.classList.add("hidden");
  }
}

playForm.addEventListener("submit", handlePlayGame);

//CTRL + D : 같은 명령어 한꺼번에 수정
// 커서를 올려놓고 CTRL + D ⇒ 같은 단어에 커서올라감

// CTRL + H : 단순 텍스트 치환

// ⇒ 대체 F2 :

// CTRL + ALT + 마우스 좌클릭 : 들여쓰기 코드 폼

// ALT + CLICK : ALT 누르고 원하는 곳에 커서 ⇒ 한꺼번에 수정가능

// ALT + 방향키(UP/DOWN) : 코드 라인 이동

// ALT + 방향키 좌우 : 커서 위치 되돌리기

// ALT + SHIFT 방향키(UP/DOWN) : 코드 복사해 라인 이동

// CTRL + / : SEMANTIC 에 맞게 자동 코멘트 처리

//  ALT + SHIFT  + I : 내가 블록 처리한 곳에 모두 커서처리 함

// ALT + SHIFT + DRAG : 내가 커서를 위치한 곳기준으로 세로로 모두 커서처리

// CTRL + HOME / END : 한번에 코드 맨 위로, 코드 아래로 이동

// CTRL + B : 사이드 바 숨김처림

// CTRL+ K + F : 정렬하고자 하는 코드영역 드래그 시 자동정렬

// CTRL + SHIFT + ENTER : 커서가 있는 줄부터 그 아래줄 내리기

// TAP : 선택영역 우측으로 한칸 들여쓰기

// SHIFT + TAP : 선택영역 좌측으로 한칸 들여쓰기
