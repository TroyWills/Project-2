// creating ajax call

$(document).ready(function () {
  $(".place-order").on("click",function(){
    // alert("working");
    let name = $(this).data("name");
    let price = $(this).data("price")
    // alert(name+price);
console.log(this);
    $.ajax({
      url:"/",
      method:"POST",
      data:{
        name:name,
        price
      }
    }).then(function(data){
      console.log("working");
      console.log(data);
      location.reload();
    })
  })

  $.ajax({
    url:"/api/drinklist",
    method:"GET"
  }).then(function(data){
    console.log(data);
    let ulEL = $("#drink-list");
    for (let i = 0; i < data.length; i++) {
      let liEl = $("<p>")
      liEl.text(`${data[i].drinklist} : ${data[i].currentbill}` );
      ulEL.append(liEl)
    }
  })
});

