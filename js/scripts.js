var pizzaSize = ["regular","medium","large"]
var pizzaCrust = ["Crispy","Gluten-free","Stuffed"]
var pizzaTopping = ["Pepperoni","Mushroom","Extracheese","Onion","Tomato","Sausage","Greenpepper"]


function getSize() {
    var pizzaSize = document.getElementById("size").value;
    return parseInt(pizzaSize);
}
function getCrust() {
    var pizzaCrust = document.getElementById("crust").value;
    return parseInt(pizzaCrust);
}
function getToppings() {
    var pizzaTopping = document.getElementById("toppings").value;
    return parseInt(pizzaTopping);
}
function getTotal() {
    var pizzaQuantity = document.getElementById("number").value;
    return parseInt(pizzaQuantity);
}
function getTotalCost() {
    var TotalCost =(getSize()+getCrust()+getToppings())+getTotal();
    alert("You order"+getTotal("")+ "pizza" + ""+"Total Amount ksh"+(TotalCost)+""+"dear customer thank you for choosing us.")
alert("cost for delivery is 150sh");
alert("You order will be delivered shortly");
};


$(document).ready(function() {
    $("form").submit(function(event) {
    var name=$("input#name").val();
    var email=$("input#email").val();
    var message=$("input#message").val();
    alert(name + "Thank you for contacting us.");
    
    event.preventDefault();
    });
 });

