const loadAllData = _ => {
    fetch('https://forbes400.onrender.com/api/forbes400/getAllBillionaires')
    .then(res => res.json())
    .then(data => displayAllBillionaire(data))
}

const displayAllBillionaire = data => {
    const slice = data.slice(0, 5)

    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = `
    <tr>
        <th scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${data[1].personName}</th>
        <td class="px-6 py-4">${data[1].countryOfCitizenship}</td>
        <td class="px-6 py-4">Laptop</td>
        <td class="px-6 py-4">1</td>
        <td class="px-6 py-4">121541</td>
    </tr>
    `


    console.log(data[1]);
}

loadAllData()