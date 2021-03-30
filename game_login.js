function login(){
    player1name=document.getElementById("p1").value;
    player2name=document.getElementById("p2").value;
    localStorage.setItem("player1",player1name);
    localStorage.setItem("player2",player2name);
    window.location="game_page.html"
}