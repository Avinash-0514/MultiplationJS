function Calculate(){
    var num1=document.getElementById("number").value;
    var num2=document.getElementById("multiple").value;
    for(i=0;i<=num2;i++){
           document.getElementById("names").innerHTML+= `${num1}* ${i} = ${num1*i} <br>`;
    }

}










/*
document.getElementById("mul").addEventListener("Calculate", multipleNumber);
const iteration =document.getElementById("multiple");
const num1 = document.getElementById("number");
function multipleNumber() {

for(i=0;i<=iteration.lenght;i++){
    const result = num1 * iteration[i];
}
console.log(result);
multipleNumber();
}

    document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
  }
  

const iteration =document.getElementById("multiple");
const num1 = document.getElementById("number");

document.getElementById("mul").onclick = function(){
        
    for( i=0;i<=iteration.lenght; i++){ 
         
        const result = iteration.value[i] * num1;
        console.log("result is",result);           

        }
    };





    

/*function multiplyTwoNumbers(number1,number2){
  return number1*number2;
};

function multiplyNumbers() {
    var num1 = document.getElementById("userVal1").value;
    var num2 = document.getElementById("userVal2").value;
    var total = Number(num1) * Number(num2);
    document.getElementById("results").textContent = total;    
  };

  const calculate = document.getElementsByClassName('.mul');

function multipleNumber() {
    const num1 = document.getElementById("number").value;
    const iteration = document.getElementById("multiple").value;

    for( i=0;i<=iteration.lenght; i++){

    }    
    }
  
  
  
  
  
  
  
  
  */