function ordery(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = 0;
}
var pizzaSize = ["regular","medium","large"]
var pizzaCrust = ["Crispy","Gluten-free","Stuffed"]
var pizzaTopping = ["Pepperoni","Mushroom","Extracheese","Onion","Tomato","Sausage","Greenpepper"]




$(document).ready(function() {
    $("form").submit(function(event) {
    var name=$("input#name").val();
    var email=$("input#email").val();
    var message=$("input#message").val();
    alert(name + "Thank you for contacting us.");
    
    event.preventDefault();
    });
 });

