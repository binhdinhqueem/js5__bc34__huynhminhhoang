document.getElementById("btnTotal").onclick = function () {
    // input
    var score = document.getElementById("score").value * 1;
    var score1 = document.getElementById("score1").value * 1;
    var score2 = document.getElementById("score2").value * 1;
    var score3 = document.getElementById("score3").value * 1;
    var area = document.getElementById("area").value;
    var object = document.getElementById("object").value;
    // xử lý
    var selectAre = area;
    var selectObject = object;
  
    switch (selectAre) {
      case "A":
        selectAre = 2;
        break;
      case "B":
        selectAre = 1;
        break;
      case "C":
        selectAre = 0.5;
        break;
      default:
        selectAre = 0;
    }
  
    switch (selectObject) {
      case "1":
        selectObject = 2.5;
        break;
      case "2":
        selectObject = 1.5;
        break;
      case "3":
        selectObject = 1;
        break;
      default:
        selectObject = 0;
    }
    var sumScore = score1 + score2 + score3 + selectAre + selectObject;
  
    var totalScore;
    if (sumScore >= score) {
      totalScore = "Bạn đã đậu" + "," + "Tổng điểm: " + sumScore;
    } else {
      totalScore = "Bạn đã rớt" + "," + "Tổng điểm: " + sumScore;
    }
    // output
    document.getElementById("notifiCation").innerHTML = totalScore;
  };