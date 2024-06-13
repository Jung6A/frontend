//키보드를 누르면 눌렀다는 신호만 전달
//키보드를 떼어야 키값 전달
//계속 키보드를 눌러도 키가 입력이 되는 것은 눌렀다는 신호가 여러번 전달되면 입력처리로 변경
$(function(){
    $("#detail").keyup(function(){ //keypress: 특수키에는 반응하지 않음 한글도 안 되네 영어+숫자에만 반응하는듯?
        if($("#detail").val().length>=5){
            $("#save").removeAttr('disabled');
        }else{
            $("#save").attr('disabled','disabled');
        }
    });
    $("#save").click(function(){
        let text=$("#detail").val();
        addlist(text); //input 태그에 입력값 ul에 넣기
        //input 태그에 아무것도 입력하지 않았다면
        // if(text===''){
        //     alert("내용이 비어 있습니다.")
        //     $("#detail").focus();
        //     return;
        // }
    });
});

function addlist(text){
    $("#list").append('<li>'+text+'</li>');
}