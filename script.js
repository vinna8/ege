const minus = document.querySelectorAll('.minus');
const plus = document.querySelectorAll('.plus');
const countTask = document.querySelectorAll('.num-test');

for (let i = 0; i < plus.length; i++){
	plus[i].addEventListener('click', () => {
		if (countTask[i].value == 5) {}
		else countTask[i].value = parseInt(countTask[i].value) + 1;
	})
}

for (let i = 0; i < minus.length; i++){
	minus[i].addEventListener('click', () => {
		if (countTask[i].value == 0) {}
		else countTask[i].value = parseInt(countTask[i].value) - 1;
	})
}

countTask.forEach(
	input => input.addEventListener('keyup', () => {
		input.value = input.value.replace(/[^\d]/g, '')
		input.value = input.value.replace(/^0+/, '')
		if (input.value == "") 
			input.value = 0;
		if (input.value > 5) 
			input.value = 5
		})
);



