document.addEventListener('click', prom);
let ev = new Event('click');
	document.dispatchEvent(ev);
function prom() {
	console.log("hello....");
 
const arr = ['one','five','eight','nine','two','three','zero','four','six','seven','nine']; 
let elem = document.querySelectorAll("div");

for ( let i = 0; i < 10; i++) {
	let br = document.createElement('br');
	let s = document.createElement('audio');
	s.setAttribute("controls", "controls");
	let k = Math.floor(Math.random() * 10);
	let m = Math.floor(Math.random() * 10);
	console.log(k);
	s.innerHTML= `<source src = ${"audio/"+ arr[m] + ".mp3"} type="audio/mpeg">
	
	`;
	elem[0].append(s);
	elem[0].append(k);
	elem[0].append(br);
	let t = s;
	s = 0;
	
	//setTimeout(() => console.log('play'), 4000);

	}
	let f = document.querySelectorAll('audio');
	for (let i = 0; i< f .length; i++){
		if (i === f.length - 1){
			break;
		}
		else {
			f[i].addEventListener('ended', ()=> { f[i + 1].play();
												  f[i+1].style.background = "yellow";
												  if (i+1 === f.length-1){
													location.reload();
												}
			});
		}
		
	}
	f[0].play();
	
	
};



//