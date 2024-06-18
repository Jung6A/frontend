const com=["scissors.png","rock.png","paper.png"];
let record=[]; //전적 저장
let comHd=0; //컴퓨터 이미지 보이기 위한 setInterval값
let comSelect=0; //컴퓨터 가위바위보 값

$(function(){ //window.onload 브라우저 화면표시 완료
    //전적 배열 초기화 세팅
    record=[new Array(), new Array(), new Array()];
    //        유저         컴퓨터        결과
    $("#comImg").attr('src','./static/image/'+com[0]);
    $("#game").click(startAndStop);
});
function startAndStop(){
    //$(this)===$("#game")
    if($(this).text()==='종료'){ //가위바위보 진행 중
        $(this).text("시작");
        clearInterval(comHd); //setInterval 종료
        $(".userImg").off('click'); //종료시 유저 가위바위보 클릭 이벤트 해제
    }else{ //가위바위보 시작 전
        $(this).text("종료");
        comStart(); //컴퓨터 이미지 변경(setInterval)
        $(".userImg").click(userSelect); //유저 가위바위보 클릭 이벤트
    }
}
function userSelect(){
    var idx=$(".userImg").index($(this)); //유저가 클릭한 가위바위보 찾기
    //userImg 클래스들을 배열로 가져와 그 중 클릭한 인덱스가 몇 번째인지
    $(this).css('border','1px solid yellow'); //클릭한 가위바위보 이미지 표시
    clearInterval(comHd); //컴퓨터의 가위바위보 이미지 변경 중지(clearInterval)
    //alert("user: "+idx+" com: "+comSelect);
    outcome(idx, comSelect); //결과 띄우기
    setTimeout(function(){
    comStart(); //다시 컴퓨터 가위바위보 이미지 변경되도록(setInterval)
    $(".userImg").eq(idx).css('border',''); //클릭한 가위바위보 이미지 표시 해제
    $(".result").remove();
    }, 3000); //지정된 시간 이후 한 번 실행
}
function outcome(u,c){ //u: 유저 가위바위보 c: 컴퓨터 가위바위보
    //0: 가위 1: 바위 2: 보
    var result="승";
    var minus=u-c;//-2,1 유저 승 0비김 -1,2 유저 패
    switch(minus){
        case 0: result="무"; break;
        case -1:
        case 2: result="패"; break;
    }
    record[0].push(com[u]); //유저 가위바위보 저장
    record[1].push(com[c]); //컴퓨터 가위바위보 저장
    record[2].push(result); //결과 저장
    console.log(record);
    localSave(); //컴퓨터(브라우저)에 저장

    $("body").append(`<div class="result">${result}</div>`);
}
function comStart(){
    comHd=setInterval(function(){
        if(comSelect==2){
            comSelect=-1;
        }
        $("#comImg").attr('src','./static/image/'+com[++comSelect]);
    },50); //지정된 시간에 한 번씩 실행, 시간단위는 밀리세컨드(1000=1초)
}
function localSave(){
    localStorage.setItem("like","banana"); //localStorage: 문자열만 저장 가능
}