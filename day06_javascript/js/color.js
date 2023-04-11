var tag = document.querySelector('#test'); /*id가 test 인 친구를 가져온다*/
tag.onclick = function() {  /*클릭했을때 실행 될것들*/
    console.log("클릭했습니다.");
    tag.style.color = "red";
    tag.style.fontSize = "50px";        /* 카멜표기법으로 */
    tag.style.fontWeight = "50px";
}
console.log(tag);