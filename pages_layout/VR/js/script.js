let btn__question = document.querySelectorAll('.box-ask__btn'),
	box_answer = document.querySelectorAll('.box-answer'),
	logoBtn = document.querySelector('.block-logo');

btn__question.forEach( (btn,i) => {
	btn.addEventListener('click', function(){
		if (this.className == 'box-ask__btn btn-close'){
			this.className = "box-ask__btn";
			box_answer[i].className = "box-answer";
		} else {
		for (let item_btn of btn__question){
			item_btn.className = "box-ask__btn";
		}
		for (let item_answer of box_answer){
			item_answer.className = "box-answer";
		}
		this.className += " btn-close";
		box_answer[i].className += " answer-opened"; 
		}
	});
});

logoBtn.onclick =() => {
	location.href = '#header';
};
// Открытие/Закрытие формы заказа
header_order.onclick = () => {
	darkSection.className += " dark-section__open";
	menu.className ="block-navigation";
	document.getElementById("humburgerImg").src="images/menu.png";
	$.fn.fullpage.destroy('all');
	body.style.overflow="hidden";
};
headerPage_order.onclick = () => {
	darkSection.className += " dark-section__open";
	menu.className ="block-navigation";
	document.getElementById("humburgerImg").src="images/menu.png";
	$.fn.fullpage.destroy('all');
	body.style.overflow="hidden";
};
formOrder_close.onclick = () => {
	darkSection.className = "dark-section";	
	scrollPage();
};

// ОТкрытие закрытие гамбургер-меню
humburger.onclick = () => {
	if(menu.className ==="block-navigation"){
	menu.className +=" block-navigation__show";
	document.getElementById("humburgerImg").src="images/menu_close.png";
	$.fn.fullpage.destroy('all');
	body.style.overflow="hidden";
	} else{
		menu.className ="block-navigation";
		document.getElementById("humburgerImg").src="images/menu.png";
		scrollPage();
	}
};
let elem = document.getElementsByClassName('block-navigation__link');
for (var i = 0; i < elem.length; i++) elem[i].onclick = () => {
	console.log("234");
		scrollPage();
		menu.className ="block-navigation";
		document.getElementById("humburgerImg").src="images/menu.png";
};

// перелистывание карусели 
let width = document.getElementById('boxWork').offsetWidth,
	numBlock = 1,
	position = 0;
if (document.getElementById('boxWork').offsetWidth < 300) {
	width = document.getElementById('boxWork').offsetWidth + 16;
} else {
	width = 479.5;
};
boxWorkNext.onclick = () => {
	if (numBlock < 4) {
	boxWorkPrev.style.opacity = '';
	boxWorkPrev.style.cursor = 'pointer';
	position +=width;
	numBlock ++;
	boxWorkNumber.className = "box-work-btns__number-" + numBlock;
	console.log("позиция после вперед " + position);
	carousel.style.right = position + 'px';
	} else {
		boxWorkNext.style.cursor = 'default';
		boxWorkNext.style.opacity = '1';
	};
};
boxWorkPrev.onclick = () => {
	if (numBlock > 1) {
	boxWorkNext.style.opacity = '';
	boxWorkNext.style.cursor = 'pointer';
	position -=width;
	numBlock--;
	boxWorkNumber.className = "box-work-btns__number-" + numBlock;
	console.log("позиция после назад " + position);
	carousel.style.right = position + 'px';
	} else {
		boxWorkPrev.style.cursor = 'default';
		boxWorkPrev.style.opacity = '1';
	};
};


