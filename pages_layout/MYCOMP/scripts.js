let menuNav = document.getElementById('myTopnav'),
	menuBtn = document.getElementById('menu');

menuBtn.onclick = () => {
	if(menuNav.className ==="topnav"){
		menuNav.className += " responsive";
	} else{
		menuNav.className ="topnav";
	}
}
let menuLink = document.querySelectorAll('.topnav__link');
menuLink.forEach( (btn) => {
	btn.addEventListener('click',() => {
		console.log('asas')
		menuNav.className ="topnav";
	});
});