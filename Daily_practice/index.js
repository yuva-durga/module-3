function createData(){
  fetch("https://mydata-b5f6d-default-rtdb.asia-southeast1.firebasedatabase.app/MyData.json",
    {method:"POST",body:JSON.stringify({
    name:"amy",
    rollno:1,
  })
})
.then((response)=>response.json())
.then((data)=>console.log("Data is add",data))
} 

function getData(){
  fetch("https://mydata-b5f6d-default-rtdb.asia-southeast1.firebasedatabase.app/MyData.json",
    {method:"GET"})
    .then((res)=>res.json())
    .then((data)=>console.log("get the data",data))
  
} 

function updateData(){
  // for updating we use Put method 
  fetch("https://mydata-b5f6d-default-rtdb.asia-southeast1.firebasedatabase.app/MyData/-OfUREIWOGK6S3RBbHzy.json",
    {method:"PUT",body:JSON.stringify({
      name:"Yuva",
      rollno:4607,
    })
  })
  .then((res)=>res.json())
  .then((data)=>console.log("updatedcusing PUT",data))

  
} 

function deleteData(){
  fetch("https://mydata-b5f6d-default-rtdb.asia-southeast1.firebasedatabase.app/MyData/-OfUREIWOGK6S3RBbHzy.json",
    {method:"DELETE"})
    .then((res)=>res.json())
    .then((data)=>console.log("deleted record",data))
  
} 