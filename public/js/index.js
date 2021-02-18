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
  // $.ajax({
  //   method: "GET",
  //   URL: "/api/Menus"
  // }).then(function (drinkMenu) {
  //   console.log(drinkMenu)
  // })
})

// $('.add-to-cart').on('click', e => {
}
case 'ITEM_ADDED':
  return Object.assign({}, state, {
    cart: (new Set(state.cart)).add(data.item),
  });

  $('body').on('click', e => {
    if (e.target.classList.contains('remove')) {
      const element = e.target;
      const parent = getParentWithKey(element);
      const key = parseInt(parent.dataset.key, 10);
  
      parent.parentElement.removeChild(parent);
      store.trigger('ITEM_REMOVED', { item: key });
    }
  });