let trade=["매매", "전세", "월세"];
let price=["1억 미만","1억~5억","5억~10억","10억~50억","50억~100억"];
let width=["10평 미만","10평~20평","20평~30평","30평~50평","50평~70평","70평~100평"];
let room=["1개","2개","3개","4개 이상"];
$(function(){
    $("#searchInput").on('keyup',search);
    $("#trade").on('change',search);
    $("#price").on('change',search);
    $("#width").on('change',search);
    $("#room").on('change',search);
});
function search(){
    var keyword=$(this).val();
    var t=$("#trade").val();
    var p=$("#price").val();
    var w=$("#width").val();
    var r=$("#room").val()
    $(".itemWrap").filter(function(){
        $(this).toggle($(this).text().indexOf(keyword)!=-1);
    });
}