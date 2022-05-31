alert(Ya tienes la cuenta creada y oficialmente eres socio de Boca Juniors. ¡Bienvenido! Te redigiremos hacia la pantalla de inicio donde podras interactuar en nuestra web. Muchas gracias por formar parte de esta familia...)
alert(¡Bienvenido denuevo! Ya has iniciado session, ahora a disfrutar)

window.setInterval (BlinkIt, 500);
var color = "yellow"; 
function BlinkIt () {
var blink = document.getElementById ("blink");
color = (color == "#ffffff")? "yellow" : "#ffffff";
blink.style.color = color;
blink.style.fontSize='30px';}