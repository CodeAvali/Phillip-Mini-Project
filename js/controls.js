function fn_test(){
    check=document.forms[0].control.value;
    if(check==="2"){
        fn_retest();
    }
    document.forms[0].control.value="1";
    var formLength=document.forms[1].elements.length;
    var questionLength=document.forms[1].length;
    score = 0;
    for (i = 0; i < formLength; i++){
        user_input=document.forms[0].elements[i].value;
        app_answer=document.forms[1].elements[i].value;
        response=document.getElementById("id_answer"+i);
        if(user_input === app_answer){
            score++;                
            response.innerHTML = "&#10004";                                   
            response.style.visibility="visible";                    
            response.style.color = "green";                    
        }
        if(user_input !== app_answer){
            response.innerHTML = "&#10006";                                   
            response.style.visibility="visible";
            response.style.color = "red";
        }
    }
    document.getElementById("id_score").innerHTML = score;
    document.getElementById("id_question_no").innerHTML = questionLength;
    document.getElementById("id_result").style.visibility="visible";
}
function fn_retest(){
    var formLength=document.forms[1].elements.length;
    document.forms[0].control.value="0";
    document.getElementById("id_result").style.visibility="hidden";           
    for (i = 0;i < formLength; i++){
        document.forms[0].elements[i].value="";
        document.forms[1].elements[i].value="";
        document.getElementById("id_answer"+i).style.visibility="hidden";
        document.getElementById("id_correct"+i).style.visibility="hidden";
    }
    fn_random();
}
function fn_show(){
    check=document.forms[0].control.value;
    if(check==="1"){
        var formLength=document.forms[1].elements.length;         
        for (i = 0;i < formLength; i++){
            document.getElementById("id_correct"+i).style.visibility="visible";
            document.getElementById("id_correct"+i).style.color="#00f";
            binary=document.forms[1].elements[i].value;
            document.getElementById("id_correct"+i).innerHTML=binary;
        }          
    }
    if(check==="0"){
        document.getElementById("id_result").style.visibility="visible";
        document.getElementById("id_result").style.color="#f00";
        document.getElementById("id_result").innerHTML="Answers are only shown after the questions have been attempted";
    }
    document.forms[0].control.value="2";
}

