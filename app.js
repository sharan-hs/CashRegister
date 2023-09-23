const billAmount = document.querySelector("#bill-amount");
const cash = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const notes = document.querySelectorAll(".no-of-notes");
const table = document.querySelector(".change");
const cashlabel = document.querySelector("#cash-label");
const nextButton = document.querySelector("#next-button");


const denomination = [2000, 500, 100, 20, 10, 5, 1]


function hideCashGivenAndTable(){
    
    cash.style.display = "none";
    table.style.display = "none";
    cashlabel.style.display = "none";
    message.style.display = "none";
    checkButton.style.display = "none";
}


hideCashGivenAndTable(message);


nextButton.addEventListener("click", function validateBillAmount(){
    
    
    if(Number(billAmount.value) > 0){
        
        showCashGivenAndTable();
        nextButton.style.display = "none";
        checkButton.style.display = "block";
        
    }
        
    else{
        showMessage("Invalid bill amount!!"); 
    }
});


checkButton.addEventListener("click", function validateCashGiven(){
    let cashvalue = Number(cash.value)
    let billValue = Number(billAmount.value)
        
        if(cashvalue >= billValue){
            showTable();
            const amount = Number(cash.value) - Number(billAmount.value);
            calculateChange(amount); 
        }
        else{
            showMessage("Cash given should be greater than bill");
            table.style.display = "none";
            }
});




function calculateChange(amount){
    
    for(let i=0; i<denomination.length; i++){
        const noOfNotes = Math.trunc(amount / denomination[i]);
        amount = amount % denomination[i];
        notes[i].innerText = noOfNotes;
    }
    
}

function showCashGivenAndTable(){
    cash.style.display  = "block";
    cashlabel.style.display = "block";

}

function showTable(){
    
    table.style.display = "block";
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}