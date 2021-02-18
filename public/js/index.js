// create ajax call 

$.ajax {
    type: "GET",
    URL: "/api/menus" + id
  }).then(
    function() {
      console.log(menus);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});