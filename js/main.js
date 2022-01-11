function qoshish() {
	let son1 = document.getElementsByClassName('1-son')[0].value;
	let son2 = document.getElementsByClassName('2-son')[0].value;
	let son3 = son1 * 1 + son2 * 1;
	document.getElementsByClassName('javob')[0].innerHTML = son3;

}
function ayirish() {
	let son1 = document.getElementsByClassName('1-son')[0].value;
	let son2 = document.getElementsByClassName('2-son')[0].value;
	let son3 = son1 * 1 - son2 * 1;
	document.getElementsByClassName('javob')[0].innerHTML = son3;
}
function kopaytirish() {
	let son1 = document.getElementsByClassName('1-son')[0].value;
	let son2 = document.getElementsByClassName('2-son')[0].value;
	let son3 = son1 * 1 * son2 * 1;
	document.getElementsByClassName('javob')[0].innerHTML = son3;
}
function bolish() {
	let son1 = document.getElementsByClassName('1-son')[0].value;
	let son2 = document.getElementsByClassName('2-son')[0].value;
	let son3 = son1 * 1 / son2 * 1;
	document.getElementsByClassName('javob')[0].innerHTML = son3;
}