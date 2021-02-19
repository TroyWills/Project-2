// creating ajax call

$(document).ready(function () {
  $(".place-order").on("click",function(){
    // alert("working");
    let name = $(this).data("name");
    let price = $(this).data("price")
    alert(name+price);

    $.ajax({
      url:"/",
      method:"POST",
      data:{
        name:name,
        price
      }
    }).then(function(data){
      console.log("working");
    })
  })
});

