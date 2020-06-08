
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const favoriteColorinput = $("#favoriteColorinput").val();
    const favoriteNumberinput = $("#favoriteNumberinput").val();
    const favoritePetinput = $("#favoritePetinput").val();
    console.log(favoriteColorinput);
    
    const favoriteList = [favoriteColorinput, favoriteNumberinput, favoritePetinput]
    const favoriteList2 = favoriteList.concat("basketball");
    console.log(favoriteList2);

    favoriteList2.toString();
    console.log(favoriteList2);
    let isolateColor = favoriteList2.slice();
    console.log([isolateColor].toString());
  });
});