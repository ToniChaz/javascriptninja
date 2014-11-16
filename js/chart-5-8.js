// Molder context of function
var clickedButton = function () {
	
	function bind(context, name){
		return function(){
			return context[name].apply(context, arguments);
		};
	}
	
	var button = {
		clicked: false,
		click: function (){
			this.clicked = true;
			assert(button.clicked, "The button has been clicked!")
		}
	};
	
	var btn = document.createElement("input");
	btn.value = "Click me!";
	btn.id = "clickedButton";
	btn.type = "button";
    document.body.appendChild(btn);
	
	var elem = document.getElementById("clickedButton");	
	elem.addEventListener("click", bind(button, "click"), false);
};