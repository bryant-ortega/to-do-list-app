function newItem() {
    //create variable for list items //
    let li = $("<li></li>");
    // get the value of type="text" name="ListItem" id="input" from <input> //
    let inputValue = $("#input").val();
    // gives each list element the same value as <input> //
    li.append(inputValue);

    // checks to make sure an empty entry triggers an alert //
    if (inputValue === "") {
        alert("You must write something!");
        // if not empty then add the list item to the ordered list //
    } else {
        $("#list").append(li);
    }
    // create the function for list item to get stricken //
    function crossOut() {
        li.toggleClass("strike");
    }
    // event handler requires a double click //
    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });
    // create a variable for crossOutButton //
    let crossOutButton = $("<crossOutButton></crossOutButton>");
    // add text node to the button //
    crossOutButton.append(document.createTextNode("X"));
    // add the button to the list element //
    li.append(crossOutButton);
    // even handler to delete the list element //
    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
        li.addClass("delete");
    }
    // jquery enable reordering with mouse //
    $("#list").sortable();
}
