function addUser() {
    player1_name=document.getElementById ("player1_name_input").Value;
    player2_name=document.getElementById ("player2_name_input").Value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location="game_page.html";
    }
    
    question_turn = player1
    answer_turn = player2
    
    function check()
    
    get_answer = document.getElementById("input_check_box")
    if(get_answer == actual_answer)
      {
       update_player1_score = player1_score +1;
        document.getElementById("player1_score")
      }
    else
      {
        update_player2_score = player1_score +1;
      }
