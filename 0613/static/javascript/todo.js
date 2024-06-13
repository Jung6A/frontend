$(function(){
    $("#save").attr('disabled','disabled');

    $("#work").keyup(check);
    $("#time").change(check);
    $("#state").keyup(check);
});


function check(){
    var work=$("#work").val();
    var time=$("#time").val();
    var state=$("#state").val();
    if(work!='' && time!='' && state!=''){
        $("#save").removeAttr('disabled');  
    }else{
        $("#save").attr('disabled','disabled');
    }
}