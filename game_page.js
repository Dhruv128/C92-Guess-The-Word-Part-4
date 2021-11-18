player1_name= localStorage.getItem("player_1_name");
player2_name= localStorage.getItem("player_2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" :";
document.getElementById("player2_name").innerHTML=player2_name+" :";

document.getElementById("score_player_1").innerHTML= player1_score;
document.getElementById("score_player_2").innerHTML= player2_score;

document.getElementById("player_question").innerHTML="Question turn : "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn : "+ player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("Word in lower case is "+word);

    charAt1=word.charAt(1);
    console.log(charAt1);
    
    len_div_2=Math.floor(word.length/2);

    charAtMid=word.charAt(len_div_2);
    console.log(charAtMid);

    len_minus_1=word.length-1;
    charAtLast=word.charAt(len_minus_1);
    console.log(charAtLast);

    word_1=word.replace(charAt1,"_");
    word_2=word_1.replace(charAtMid,"_");
    word_3=word_2.replace(charAtLast,"_");
    console.log(word_3);

    q_word="<h4 id='word_display'>Q."+word_3+"</h4>";
    i_box="<br>Answer : <input type='text' id='checkBox'>";
    btn_check="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=q_word+i_box+btn_check;
    document.getElementById("answer_area").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="Player1";
answer_turn="Player2";

function check(){
    ansOfPlayer= document.getElementById("checkBox").value;
    lowerCaseAnsOfPlayer=ansOfPlayer.toLowerCase();
    console.log("The lower case answer is: "+lowerCaseAnsOfPlayer);
    if (word==lowerCaseAnsOfPlayer){
        if (answer_turn=="Player1"){
            player1_score=player1_score+1;
            document.getElementById("score_player_1").innerHTML=player1_score;
        }
        else {
            player2_score=player2_score+1;
            document.getElementById("score_player_2").innerHTML=player2_score;
        }
    }
    if (question_turn=="Player1"){
        question_turn="Player2";
        document.getElementById("player_question").innerHTML="Question Turn: "+player2_name;
    }
    else {
        question_turn="Player1";
        document.getElementById("player_question").innerHTML="Question Turn: "+player1_name;
    }
    if (answer_turn=="Player1"){
        answer_turn="Player2";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player2_name;
    }
    else {
        answer_turn="Player1";
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player1_name;
    }
    document.getElementById("answer_area").innerHTML="";
}