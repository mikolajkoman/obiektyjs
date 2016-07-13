$(function(){
	function Telefon(marka, nazwa, kolor, cena) {
	this.marka = marka; 
	this.nazwa = nazwa;
	this.kolor = kolor;
	this.cena = cena;
	}
	Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", nazwa to " + this.nazwa + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
	alert("Marka telefonu to " + this.marka + ", nazwa to " + this.nazwa + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
	}
	var GalaxyS6 = new Telefon("Samsung", "GalaxyS6", "czarny", 1885);
	var iPhone6S = new Telefon("Apple", "iPhone6S", "srebrny", 2250);
	var One = new Telefon("OnePlus", "One", "biały", 1299);

	GalaxyS6.printInfo();
	iPhone6S.printInfo();
	One.printInfo();
});



