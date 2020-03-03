function order(size, crust, topping) {
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
        event.preventDefault();
        var name=$("input#name").val();
        var email=$("input#email").val();
        var message=$("input#message").val();
        if ($("input#name").val() && $("input#email").val()){
            alert (name + ",Thank you. we have receive your message .")
        }
        // else {
        //     alert("please fill your name and email!")
        // }
    })
})