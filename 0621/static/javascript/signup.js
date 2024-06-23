$(function(){
    //회원가입 버튼 클릭 이벤트 등록
    //$("#signup").on('click',requiredCheck);

    //체크박스 선택 값
    $("#signup").on('click',function(){
        let interest=$("input[name:interest]:checked").val();
        alert(interest);
       // $("#signupForm").submit();
    });
});
function requiredCheck(){ //필수입력을 모두 입력했는가
    var id=$("#userID");
    var pw=$("#userPW");
    var re=$("#pwRe");
    var email=$("#email");
    var tel=$("#tel");
    var addr=$("#addr");

    if(id.val()==''){
        alert("아이디를 입력하세요.");
        id.focus();
    }else if(pw.val()==''){
        alert("비밀번호를 입력하세요.");
        pw.focus(); re.val('');
    }else if(re.val()==''){
        alert("비밀번호를 한 번 더 입력하세요.");
        re.focus();
    }else if(pw.val()!=re.val()){
        alert("비밀번호가 잘못되었습니다.");
        pw.val(''); re.val('');
        pw.focus();
    }else if(email.val()==''){
        alert("이메일을 입력하세요.");
        email.focus();
    }else if(tel.val()==''){
        alert("연락처를 입력하세요.");
        tel.focus();
    }else if(addr.val()==''){
        alert("주소를 입력하세요.");
        addr.focus();
    }else{ //모든 조건이 거짓=다 입력함
        $("#signupForm").submit();
    }
}