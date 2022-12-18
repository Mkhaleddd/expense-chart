
 fetch("data.json")
 .then(response => response.json())
 .then(data => show(data))
 .catch(function (error) {
  console.error("error"); })
 
function show(data) {
 
  const bar =document.querySelectorAll(".bar "); 
  

   bar.forEach((element,index)=>
 {    let height=data[index].amount *2;
      element.style.height=`${height}px`;
      element.style.width=`35px`;
      element.style.backgroundColor="hsl(10, 79%, 65%)";
      element.style.borderRadius=`5px`
      
 })   
   
   const weekday=[];
   data.forEach(element=>{
       weekday.push(element.day);
       console.log(weekday)
   });

   let date= new Date().getDay()
    console.log(date)
   let currentDay=weekday[date]
    currentDay =="mon" ? currentDay= "sun" :currentDay= weekday[date-1] ;
    console.log(currentDay)

    
   
  
 bar.forEach((element,index)=>
 { const dayValue=element.className=weekday[index]
   if (dayValue == currentDay) {
     element.style.backgroundColor=" hsl(186, 34%, 60%)";
   }
 })     

 bar.forEach((element,index) =>{ 
   let value=data[index].amount;
   element.addEventListener("mouseover",
      function () {
        const tag=`<div id="tag"> $ ${value} </div>` ;
        element.insertAdjacentHTML("afterbegin",tag); 
        
      }
   )
   element.addEventListener("mouseout",function () {
      element.innerHTML="";
    
     
   })
 })
}
