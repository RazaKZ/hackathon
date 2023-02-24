var product= document.getElementById("product1")


firebase.database().ref("Dishes").once("value",(snap)=>{
    // console.log(snap.toJSON())

    var value = Object.values(snap.toJSON())//object to array 
    // console.log(value)

    value.map((v,i)=>{
        console.log(v)
        product.innerHTML+=`
      



        




      



      <div class="col-sm-12 col-lg-4  col-md-6 ">
        <div class="box">
          <div>
            <div class="img-box">
              <img src="${v.img_Url}" alt="">
            </div>
            <div class="detail-box">
              <h5>
              ${v.Dish_Name}
              </h5>
              <p>
                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
              </p>
              <div class="options">
                <h6>
                ${v.Price}
                </h6>

                <p> ${v.Qty}<p/>

                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>














      
        `
    })
})