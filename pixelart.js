
//select color input colorPicker
//select size input height -(row)
//select size input width -(column)
//make variables for row and column
//use for loop to make the grid

$("input[type='submit']").on("click", function(event) {
    event.preventDefault(); //prevent the page from reloading
    const height = $("#inputHeight").val(); //height for grid
    const width = $("#inputWidth").val(); //width for grid
    $("#pixelCanvas").empty();//empty's the grid before creating a new one
    makeGrid(height, width);
 
});
 
// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) { //when submit clicked makes a grid && function using arguments that include the height and width 
    for (let row = 0; row<height; row++) { //the grid height which creates the row
    $("#pixelCanvas").append($("<tr></tr>"));//to create a row

    for(let column = 0; column<width; column++) { //for creating a colum
    $("tr").last().append($(" <td></td>")); //add a td to the row
    }
  }
 
};

  //the following function will add color into the cells as they are clicked with the users color value

$("#pixelCanvas").on("click", "td", function() { //color of the square when clicked
  var cellcolor = $("#colorPicker").val();
  $(this).css("background-color", cellcolor); ////this sets the background color for the color value
  
  $("#pixelCanvas").on("dblclick", "td", function() { //to remove color
  $(this).css("background-color", "white"); 
  
});

});





