let currentBalance=document.querySelector(".currentbalance")
let expenseDes =document.querySelector(".expensedescription")
let amount=document.querySelector(".amount")
let button=document.querySelector(".btn")
let expenseList=document.querySelector(".expenselist")
let totalExpense = document.querySelector(".totalexpenses")
let remainingBal = document.querySelector(".remainingbalance")

// onload

// calculation
let initialamount=50000;
let sumofexpense=0;


window.onload = function () {
    let savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    savedExpenses.forEach(item => {
        addexpenses(item.amount, item.description);
        sumofexpense += parseFloat(item.amount);
    });

    currentBalance.textContent = `Current Balance : $${initialamount - sumofexpense}`;
    remainingBal.textContent = `Remaining Balance: $${initialamount - sumofexpense}`;
    totalExpense.textContent = `Total Expenses: $${sumofexpense}`;
};

// onload fun
// addexpenses
const addexpenses=(newExp,newDes,index)=>{
// add 
console.log(newExp)
console.log(newDes)
let d1=document.createElement("div")
d1.className="d1"
let d2=document.createElement("div")
let p2=document.createElement("p")
d2.className="d2"
let d3=document.createElement("div")
let p3=document.createElement("p")
d3.className="d3"
let d4=document.createElement("div")
let p4=document.createElement("button");
d4.className="d4"
let p5=document.createElement("p")





// assinging values

p2.innerText=`${newDes.toUpperCase()}`
p3.innerHTML=`$ ${newExp}.00`
p4.innerHTML="[X]"

// apending
expenseList.appendChild(d1)
d1.appendChild(d2)
d2.appendChild(p2)
d1.appendChild(d3)
d3.appendChild(p3)

d1.appendChild(d4)
d4.appendChild(p4)
d1.appendChild(p5)



//Delete button:-->

p4.addEventListener('click',deleteit=()=>{
    d1.remove();
    let savedExpenses=JSON.parse(localStorage.getItem("expenses")) ||[];
    savedExpenses.splice(index,1)
    localStorage.setItem("expenses",JSON.stringify(savedExpenses))

location.reload();
})

}
const getExpenses=()=>{ 
   // take value from amount 
    let newExp = amount.value;
    let newDes=expenseDes.value;
     if((newExp =="") || (newDes=="")) return;

 
    amount.value="";
    expenseDes.value="";
    // local storage 
    let savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    savedExpenses.push({
        description: newDes,
        amount: parseFloat(newExp)
    });
    localStorage.setItem("expenses", JSON.stringify(savedExpenses))
   // end local storage
    currentBalance.textContent =`Current Balance :$${initialamount-newExp}` 
    remainingBal.textContent=`Remaining Balance:$${initialamount-newExp}`
    totalExpense.textContent=`Total Expenses:$${sumofexpense+parseFloat(newExp)}`
    sumofexpense=sumofexpense+parseFloat(newExp)

       addexpenses(newExp,newDes,savedExpenses-1)
       location.reload();
}
 



// event listner
button.addEventListener('click',getExpenses)

