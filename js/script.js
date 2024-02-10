var buyf = false;


function buy() {
	if (!buyf) {
	
		document.getElementById("but").style.background = 'lime';
		document.getElementById("but").innerHTML = "В корзине";
	buyf = true;
	} else {
		document.getElementById("but").style.background = 'silver';
		document.getElementById("but").innerHTML = "купить";
		buyf = false;
	}
}