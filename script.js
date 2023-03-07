function add_row(add_text) {
    const new_agenda_item = document.createElement("div"),
    node = document.getElementById("input_row");
    new_agenda_item.classList.add("card_row", "input_row");
    new_agenda_item.innerHTML = node.getElementsByClassName("input_text")[0].value;
    document.getElementById("input_label").before(new_agenda_item);
}
