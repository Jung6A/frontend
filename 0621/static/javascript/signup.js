$(function(){
    $("#portrait").on("change",function(e){
        //console.log($(this).val());
        console.log(e.target.files);
        var file=e.target.files[0]; //input 태그로 선택한 파일의 정보. 파일명, 파일 유형, 수정일자, 크기
        var reader=new FileReader(); //파일 열기용 객체 생성
        reader.onload=function(e){ //파일 열기가 완료되면
            console.log(e.target.result);
            var path=e.target.result;
            $("#preview").css("background","url("+path+") no-repeat center");
            $("#preview").css("background","contain");
            //이미지 태그일 경우: 태그.attr("src",경로);
        }
        reader.readAsDataURL(file);
    });
    //회원가입 버튼 클릭 이벤트 등록
   $("#signup").on('click' , requiredCheck );
   //체크박스들을 선택하였을 경우 값이 어떻게 나오나
//     $("#signup").on('click',function(){
//     // jquery에서 checkbox중 체크한 것만 가져오려면 $("input[name=interest]:checked")
//     //alert($("input[name=interest]:checked").length);
//     // 체크한 value 값 전부 확인하려면
//     let itr = $("input[name=interest]:checked");
//     let value=[]; 
//     for( var i=0;i<itr.length;i++){
//         value.push($(itr[i]).val());
//     }
//     alert("체크한 관심분야: "+value);
//          // let interest = $("input[name=interest]:checked").val();
//         // alert( interest );
//         //$("#signupForm").submit();
//    });
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
    }else{ //모든 조건이 거짓=다 입력함->동작
        //localstorage에 저장
        //아이디=id, 비밀번호=pw, 이메일=email, 연락처=tel, 주소=addr
        var user={id:id.val(),pw:pw.val(),email:email.val(),tel:tel.val(),addr:addr.val()}
        localStorage.setItem("user",JSON.stringify(user)); //객체를 문자열로 바꾸어 저장
        $("#signupForm").submit();
    }
}