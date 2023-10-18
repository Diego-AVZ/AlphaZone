var walletBut = document.getElementById("wallet");
var connectedAddress;
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var formDiv = document.getElementById("formDiv");



function seeIfConnected() {
    if(connectedAddress == undefined){
        autoConnect();
        msg2.style.display = "flex";
        formDiv.style.display = "flex";
    } else {
        msg2.style.display = "flex";
        formDiv.style.display = "flex";
    }
}

const autoConnect = async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const Accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("MTMSK Connected");
      connectedAddress = Accounts[0];
      console.log(connectedAddress);
      showEthAddress();
    } catch (error) {
      console.log("ERROR al Conectar MTMSK");
    }
  } else {
    console.log("MTMSK Not Detected");
  }
};

seeIfConnected();



walletBut.addEventListener("click", async () => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const Accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("MTMSK Connected");
      connectedAddress = Accounts[0];
      console.log(connectedAddress);
      msg1.style.display = "none";
      showEthAddress();
      msg2.style.display = "flex";
      formDiv.style.display = "flex";

    } catch (error) {
      console.log("ERROR al Conectar MTMSK");
    }
  } else {
    console.log("MTMSK Not Detected");
  }
});

function showEthAddress(){
    var start = connectedAddress.slice(0, 6);
    var end = connectedAddress.slice(-4);

    document.getElementById("address").innerText = `${start}...${end}`;
}

//CONNECT CONTRACT
const conAddress = "0x77F5D9d255053262e2C97A837fb70dC6cEF4F0B2";
const ABI = [];

const web3Instance = new Web3(window.ethereum);

const contract = new web3Instance.eth.Contract(ABI, conAddress);

//FORM

var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var congrats = document.getElementById("congrats");
const questList = [q1, q2, q3, congrats];
var i = 0;
var a = 0;

document.getElementById("next").addEventListener("click", function(){

    if(i < 3 ){
        document.getElementById("back").style.display = "block";
        i++;
        if(a<2){a++;}
        q1.style.display = "none";
        q2.style.display = "none";
        q3.style.display = "none";
        congrats.style.display = "none";
        questList[i].style.display= "block";
        
        ans1[a].addEventListener("click", function () {
          ans1[a].style.backgroundColor = "blue";
          ans2[a].style.backgroundColor = "black";
          ans3[a].style.backgroundColor = "black";
          
        });
        ans2[a].addEventListener("click", function () {
          ans2[a].style.backgroundColor = "blue";
          ans1[a].style.backgroundColor = "black";
          ans3[a].style.backgroundColor = "black";
          if(a == 1) {pointsB = 1}
        });
        ans3[a].addEventListener("click", function () {
          ans3[a].style.backgroundColor = "blue";
          ans2[a].style.backgroundColor = "black";
          ans1[a].style.backgroundColor = "black";
          if(a == 2) {pointsC = 1}
        });
    }
    if (i == 3) {
      document.getElementById("next").style.display = "none";
      if (pointsA == 1 && pointsB == 1 && pointsC == 1) {
        document.getElementById("correct").style.display = "block";
      } else {
        console.log("points fallasn");
      }
    } else {console.log("i no es == 3 " + i);}
});

document.getElementById("back").addEventListener("click", function () {
    if(i <= 3){
        document.getElementById("next").style.display = "block";
        i--;
        if (a > 0) {
          a--;
        }
        q1.style.display = "none";
        q2.style.display = "none";
        q3.style.display = "none";
        congrats.style.display = "none";
        questList[i].style.display = "block";

        ans1[a].addEventListener("click", function () {
          ans1[a].style.backgroundColor = "blue";
          ans2[a].style.backgroundColor = "black";
          ans3[a].style.backgroundColor = "black";
        });
        ans2[a].addEventListener("click", function () {
          ans2[a].style.backgroundColor = "blue";
          ans1[a].style.backgroundColor = "black";
          ans3[a].style.backgroundColor = "black";
        });
        ans3[a].addEventListener("click", function () {
          ans3[a].style.backgroundColor = "blue";
          ans2[a].style.backgroundColor = "black";
          ans1[a].style.backgroundColor = "black";
        });
    }
    if (i == 0) {
      document.getElementById("back").style.display = "none";
    }
});

var ans1 = document.getElementsByClassName("ans1");
var ans2 = document.getElementsByClassName("ans2");
var ans3 = document.getElementsByClassName("ans3");
var pointsA = 0;
var pointsB = 0;
var pointsC = 0;

ans1[0].addEventListener("click", function () {
  document.getElementById("next").style.display = "block";
  ans1[0].style.backgroundColor = "blue";
  ans2[0].style.backgroundColor = "black";
  ans3[0].style.backgroundColor = "black";
});

ans2[0].addEventListener("click", function () {
    document.getElementById("next").style.display = "block";
  ans2[0].style.backgroundColor = "blue";
  ans1[0].style.backgroundColor = "black";
  ans3[0].style.backgroundColor = "black";
});
ans3[0].addEventListener("click", function () {
    document.getElementById("next").style.display = "block";
  ans3[0].style.backgroundColor = "blue";
  ans2[0].style.backgroundColor = "black";
  ans1[0].style.backgroundColor = "black";
  pointsA = 1;
});


