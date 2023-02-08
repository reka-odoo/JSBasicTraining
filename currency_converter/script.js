const element_one = document.getElementById("country_one");
const element_two = document.getElementById("country_two");
const btn = document.getElementById("button");
const input = document.getElementById("input");
const result = document.getElementById("result");

async function info() {
    const data = await fetch("https://v6.exchangerate-api.com/v6/911593ff9a3c59b4a1b576e7/latest/USD")
        .then((data) => data.json())
        .then((data) => {
            display(data);
        })
};
const convert = () => {
    final = parseFloat(input.value / element_one.value)
    output = element_two.value;
    result.value = final * output;
}

function display(data) {
    const entries = Object.entries(data.conversion_rates);

    console.log(entries)
    entries.map(([country, currency] = entry) => {
        element_one.innerHTML += `<option value="${currency}">${country}</option>`;
        element_two.innerHTML += `<option value="${currency}">${country}</option>`;
    });
}
info()
