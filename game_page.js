var p1=localStorage.getItem("player1");
var p2=localStorage.getItem("player2");
document.getElementById("p1name").innerHTML=p1;
document.getElementById("p2name").innerHTML=p2;

var p1score=0;
 var p2score=0;
 document.getElementById("p1score").innerHTML=p1score;
 document.getElementById("p2score").innerHTML=p2score;

 document.getElementById("q_turn").innerHTML="Question turn- " +p1;
 document.getElementById("answer").innerHTML="Answer turn- " +p2;
 
function send(){
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
  correct_answer=n1*n2
   


questiontag="<h4 id='word_display'>Q. "+n1+" x "+n2+"</h4>"
inputtag="<br> Answer . <input id='input_check_box' type='text'>"
buttontag="<br> <button onclick='check()' class='btn btn-success'>Check</button>"
display=questiontag+inputtag+buttontag
document.getElementById("output").innerHTML=display;
document.getElementById("n1").value=""
document.getElementById("n2").value=""

}

var question_turn="p1"
var answer_turn="p2"
function check(){
   answer=document.getElementById("input_check_box").value;
    console.log(answer);
if(answer==correct_answer){
    if(answer_turn=='p1'){
        p1score=p1score+1;
        document.getElementById("p1score").innerHTML=p1score;
        
        answerturn='p2';
        question_turn="p1";
        document.getElementById("q_turn").innerHTML=p1;
        document.getElementById("answer").innerHTML=p2;
    }
    else{
        p2score=p2score+1;
        document.getElementById("p2score").innerHTML=p2score;
        answerturn='p1';
        question_turn='p2'
       document.getElementById("answer").innerHTML=p1;
       document.getElementById("q_turn").innerHTML=p2;
    }
}
document.getElementById("output").innerHTML="";
}



