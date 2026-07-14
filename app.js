
let weight=document.querySelector("#weight")
let hight=document.querySelector("#hight")
let button=document.querySelector(".btn")
let ibmtotal=document.querySelector("h2")
let form =document.querySelector("form")
 form.addEventListener("submit",(e)=>{
     e.preventDefault()
     let w=Number(weight.value)
     let h=Number(hight.value)/100
     let BMI=(w/(h*h))
    ibmtotal.innerHTML+=`<h2>Your BMI is:
    <span style="color: rgb(37, 98, 230);">${BMI}</span>
    </h2>
     
    `
    weight.value=""
    hight.value=""

    if(BMI>=0&&BMI<18.5){
        ibmtotal.innerHTML+="Underweight"
 }
 else if (BMI>=18.5&&BMI<=24.9){
         ibmtotal.innerHTML+="Normal Weight"
 }
 else if (BMI>=25&&BMI<=29.9){
         ibmtotal.innerHTML+=" Overweight"
 }
 else{
        ibmtotal.innerHTML+="Obese"
 }
 

 })

 