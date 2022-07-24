document.getElementById("btnCalc").onclick = function () {
    // input
    var kwNumber = document.getElementById("kwNumber").value * 1;
    var fullName = document.getElementById("fullName").value;
    // Xử lý
    var calcMoney;
    if (kwNumber <= 50) {
        calcMoney = kwNumber * 500;
    }
    
    else if (kwNumber > 50 && kwNumber <= 100) {
        calcMoney = 50 * 500 + (kwNumber - 50) * 650;
    }
    
    else if (kwNumber > 100 && kwNumber <= 200) {
        calcMoney = 50 * 500 + 50 * 650 + (kwNumber - 100) * 850;
    }
    
    else if (kwNumber > 200 && kwNumber <= 350) {
        calcMoney = 50 * 500 + 50 * 650 + 100 * 850 + (kwNumber - 200) * 1100;
    } 
    
    else if (kwNumber > 350) {
        calcMoney =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwNumber - 350) * 1300;
    }
    
    else {
      confirm("Vui lòng nhập kw > 0");
    }
  
    // format vnđ
    var format = new Intl.NumberFormat("vn-VN");
    var calcMoneyVnd = format.format(calcMoney) + " vnd";
  
    var result = "Họ tên: " + fullName + "; " + "Tiền điện: " + calcMoneyVnd;
    // output
    document.getElementById("notifiCation").innerHTML = result;
  };