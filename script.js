//let array = [{900:'A1'},{1500:'B1'},{1800:'B2'},{20000:'B3'},{425000:'B4'},{5000:'B5'},{2000:'B6'},{50:'B7'},{500:'B8'},{400:'B9'},{300000:'B11'},{3:'B12'},{1000:'B13'},{150000:'B15'},{90000:'C'},{15:'D1-D5'},{15000:'E'},{120:'K1,K2'},{30000:'N'}];

let arr = [
	{
		dose: 900,
		vitamin: 'A1'
	},

	{
		dose: 1500,
		vitamin: 'B1'
	},

	{
		dose: 1800,
		vitamin: 'B2'
	},

	{
		dose: 20000,
		vitamin: 'B3'
	},

	{
		dose: 425000,
		vitamin: 'B4'
	},

	{
		dose: 5000,
		vitamin: 'B5'
	},

	{
		dose: 2000,
		vitamin: 'B6'
	},

	{
		dose: 50,
		vitamin: 'B7'
	},

	{
		dose: 500,
		vitamin: 'B8'
	},

	{
		dose: 400,
		vitamin: 'B9'
	},

	{
		dose: 300000,
		vitamin: 'B11'
	},

	{
		dose: 3,
		vitamin: 'B12'
	},

	{
		dose: 1000,
		vitamin: 'B13'
	},

	{
		dose: 150000,
		vitamin: 'B15'
	},

	{
		dose: 90000,
		vitamin: 'C'
	},

	{
		dose: 15,
		vitamin: 'D1'
	},

	{
		dose: 15000,
		vitamin: 'E'
	},

	{
		dose: 120,
		vitamin: 'K1'
	},

	{
		dose: 30000,
		vitamin: 'N'
	}
];

function heapify(arr, length, j) {
	let largest = j;
	let left = j * 2 + 1;
	let right = left + 1;

	if (left < length && arr[left].dose > arr[largest].dose) {
		largest = left;
	}

	if (right < length && arr[right].dose > arr[largest].dose) {
		largest = right;
	}

	if (largest !=j) {
		[arr[j],arr[largest]] = [arr[largest], arr[j]];
		heapify(arr, length, largest)
	}

	return arr;
}

function heapSort(arr) {
	let length = arr.length;
	let j = Math.floor(length / 2 - 1);
	let k = length - 1;

	while (j >= 0) {
		heapify(arr, length, j);
		j--;
	}

	while (k >= 0) {
		[arr[0], arr[k]] = [arr[k], arr[0]];
		heapify(arr, k, 0);
		k--;
	}
	return arr;
}

console.log(heapSort(arr));

const input = document.createElement('div');
	  input.innerHTML = `
	    <div class="search-elem">
		    <span>Найти элемент</span>
		    <input type="text" id="input" placeholder="Enter vitamin name"> --
		    <input type="text" id="znach" placeholder="">
		    <button id="btn">Click</button>
		    <button id="btn2">Delite</button>
		    <button id="btn3">Push</button>
	    </div>
	    
	    <div class="wrapper">
	    	<div class="daily-rate">
	    		<span class="name-tabl">Суточная норма</span>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
				   	<p class="rate"></p>
				   	<hr>
			</div>
			<div class="name-vitamin" id="name-vitamins">
				<span class="name-tabl">Название витаминов</span>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
				   	<p class="name-vit"></p>
			</div>
		</div>
	   	`;
document.body.prepend(input);

const rate = document.querySelectorAll('.rate'),
	  vit = document.querySelectorAll('.name-vit'),
	  input1 = document.querySelector('#input'),
	  input2 = document.querySelector('#znach'),
	  btn = document.querySelector('#btn'),
	  btn2 = document.querySelector('#btn2'),
	  btn3 = document.querySelector('#btn3');

let dd = document.querySelector('.name-vitamin');

function createTabl(){
	for (let i = 0; i < arr.length; i++) {
		rate[i].innerHTML = arr[i].dose;
		vit[i].innerHTML = arr[i].vitamin;
	};
}
createTabl();

function getEvent(){
	btn.addEventListener('click', ()=>{	
		input2.value = arr.find(nam => nam.vitamin === input1.value).dose + 'mkg';
	});

	btn2.addEventListener('click', ()=>{	
		let xx = arr.find(nam => nam.vitamin === input1.value);
			arr = arr.filter(item => item !== xx);
		 for (let i = 0; i < arr.length; i++) {	
		 	if (input1.value == vit[i].innerText) {
		 		vit[i].remove();
		 		rate[i].remove();
		 	}
		 }
		console.log(arr);
		dd.style.marginTop = '-447px';
	});

	btn3.addEventListener('click', ()=>{	
		arr.push({
			dose: +input2.value,
			vitamin: input1.value
		});
		console.log(arr);
	
		for(let i = vit.length - 1; 0 <= i; i--)
 			if (vit[i] && vit[i].parentElement){
 				vit[i].parentElement.innerHTML += '<hr>' + input1.value ;
			}

		for(let j = rate.length - 1; 0 <= j; j--)
 			if (rate[j] && rate[j].parentElement){
 				rate[j].parentElement.innerHTML += input2.value;
			}
		dd.style.marginTop = '-471px';
	});
}

getEvent();