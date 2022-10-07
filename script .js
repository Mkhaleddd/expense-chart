let arrayData =[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
  
 const bar =document.querySelectorAll(".bar "); 

  bar.forEach((element,index)=>
{  
   
    let height=arrayData[index].amount*2;
     element.classList.add("bars");
     element.style.height=`${height}px`;
     element.style.width=`30px`;
     element.style.backgroundColor="hsl(10, 79%, 65%)";
     element.style.borderRadius=`5px`
   
  
})     
  const weekday=[];
  arrayData.forEach(element=>{
      weekday.push(element.day,);
  });

  let date= new Date();
  let currentDay= weekday[date.getDay()-1];

bar.forEach((element,index)=>
{ const dayValue=element.className=weekday[index]
  if (dayValue == currentDay) {
    element.style.backgroundColor=" hsl(186, 34%, 60%)"
  }
})     

bar.forEach((element,index) =>{ 
  let value=arrayData[index].amount;
  element.addEventListener("mouseover",
  function () {
    element.innerHTML=`<div class ="tag" > $ ${value} </div>` 
  }
  )
  
})
