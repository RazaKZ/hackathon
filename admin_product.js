var product= document.getElementById("product")


firebase.database().ref("Dishes").once("value",(snap)=>{
    console.log(snap.toJSON())
    
    var value = Object.values(snap.toJSON())//object to array 
    // console.log(value)

    
    value.map((v,i)=>{
        console.log(v)
        product.innerHTML+=`
        <tr class="table-dark">
            <td class="table-dark">${i+1}</td>
            <td class="table-dark">${v.Dish_Name}</td>
            <td>${v.Price}</td>
            <td>${v.Qty}</td>
            <td>
            <img src=${v.img_Url} style="width:50px;height:50px" alt="">
          </td>

          <td col span="2">
          <button id=${v.Product_Key} ONCLICK="edit_product(this)" class="btn btn-primary btn-sm">Edit </button> 
          </td>
          <td>
          <button id=${v.Product_Key} ONCLICK="delete_product(this)" class="btn btn-danger btn-sm">Delete </button> 
          </td>
        
          </tr>`
    })
})


 async function delete_product(e){
    console.log(e.id)
    await  firebase.database().ref("Dishes").child(e.id).remove()
    window.location.reload();

 }
 function edit_product(e){ 

    console.log(e.id)
   
    localStorage.setItem("Current_Pid",e.id)
    window.location.href="Edit_product.html";

 }



