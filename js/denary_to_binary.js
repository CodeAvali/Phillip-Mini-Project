function fn_random(){
    document.getElementById("id_result").style.visibility="hidden";
    var formLength=document.forms[0].elements.length;
    var ans = new Array(formLength);             
    var answer = new Array(formLength);
    for(i=0;i<128;i++){
        answer[i]=i+128;
    }
    for (i = 0;i < formLength - 1 ; i++){
        temp=answer[i];
        swap = Math.floor(Math.random()*128);
        answer[i] = answer[swap];
        answer[swap] = temp;
        document.getElementById("id_denary"+i).innerHTML=answer[i];
        temp = answer[i];              
        ans[i] = fn_answer(temp);
        document.forms[1].elements[i].value=ans[i];
    }
}
function fn_answer(temp){
    var r="";
    while(temp > 0){
        r = temp % 2 +r;
        temp = Math.floor(temp / 2);
        document.forms[1].elements[i].value=r;
    }
    return r;
}

