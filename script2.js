function point() {
	div =  document.createElement('div');
	div.classList.add = 'point';
	div.style.width="2px"; 
	div.style.height="2px";
	div.style.backgroundColor = 'black';
	div.style.position = 'absolute';
	document.querySelector('div').append(div);
	div.style.top = '50px';
	div.style.top = '50px';
	document.querySelector('div > div').className = 'point';
	let elem = document.querySelector('.point');
	
	
	elem.addEventListener('load', circle());
}


function circle() {
	if ( document.querySelector('.point') ) {
		setTimeout( remove, 3140 );
		
	}
	
}


function remove(){
	document.querySelector('.point').remove();
	setTimeout( point, 1000 );
}

point();






	