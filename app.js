// https://api.currencyfreaks.com/v2.0/rates/latest?apikey=d33188d36ebe4e9482ec8a0522c59fc3

const rateDiv = document.querySelector('.rate');
const selectOne = document.getElementById('select__one');
const inputOne = document.getElementById('input__one');
const selectTwo = document.getElementById('select__two');
const inputTwo = document.getElementById('input__two');
const swapBtn = document.getElementById('swap--btn');
// console.log(swapBtn);

function processing() {
	let firstCurrency = selectOne.value;
	let secondCurrency = selectTwo.value;

	fetch(
		`https://v6.exchangerate-api.com/v6/81d76e7cbe60462d61549bf2/latest/${firstCurrency}`
	)
		.then((response) => response.json())
		.then((result) => {
			const rate = result.conversion_rates[secondCurrency];
			rateDiv.innerHTML = `1 ${firstCurrency} = ${rate} ${secondCurrency}`;
			inputTwo.value = (inputOne.value * rate).toFixed(2);
			// console.log(rate);
		});
}

function swapper() {
	[selectOne.value, selectTwo.value] = [selectTwo.value, selectOne.value];
	processing();
}

processing();

selectOne.addEventListener('change', processing);
selectTwo.addEventListener('change', processing);
inputOne.addEventListener('input', processing);
inputTwo.addEventListener('input', processing);
swapBtn.addEventListener('click', swapper);
