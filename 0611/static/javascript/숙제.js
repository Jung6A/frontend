//while문: 반복 횟수가 정해져 있지 않은 경우
//for문: 반복 횟수가 정해져 있는 경우

//innerHTML은 변수와 유사
//a=10; a=20;인 경우 변수 a에 10이 남아있지 않음
function print(){
    let div=document.getElementById("result");

    div.innerHTML=makeRandom;
}
function makeRandom(){
    let content='';
    for(let i=0; i<5; i++){ //5줄 표현 위한 반복
        let line='';
        for(let j=0; j<4; j++){ //한 줄에 4개씩 표현 위한 반복
            let randomNumber = Math.floor(Math.random() * 50) + 1; //1~50 랜덤값
            line=line+' '+randomNumber;
        }
        content=content+line+'<br>'
    }
    return content;
}

window.onload=function(){}

