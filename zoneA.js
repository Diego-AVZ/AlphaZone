var walletBut = document.getElementById("wallet");
var connectedAddress;
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");

walletBut.addEventListener("click", async()=>{
    if (typeof window.ethereum !== "undefined") {
      try {
        const Accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("MTMSK Connected");
        connectedAddress = Accounts[0];
        console.log(connectedAddress);
        walletBut.innerText = "Connected";
        walletBut.style.paddingLeft = "3vw";
        walletBut.style.background ="linear-gradient(90deg, rgb(14 116 18), rgb(2, 165, 45), rgba(0, 24, 2, 0.541))";
        msg1.style.display = "none";
        seeIfIsAlpha();
      } catch (error) {
        console.log("ERROR al Conectar MTMSK");
      }
    } else {
      console.log("MTMSK Not Detected");
    }
});


//CONNECT CONTRACT
const conAddress = "0x77F5D9d255053262e2C97A837fb70dC6cEF4F0B2";
const ABI = [ ];

const web3Instance = new Web3(window.ethereum);

const contract = new web3Instance.eth.Contract(ABI, conAddress);

const seeIfIsAlpha = async () => {
    try {
        var isAlphaBool = await contract.methods.seeAlphaProvsList(connectedAddress).call();
        if(isAlphaBool == true) {
            alphaZone.style.display = "block";
        } else {
            msg2.style.display = "flex";
        }
    } catch(error){console.log(error)}
}

