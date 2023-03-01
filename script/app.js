const displayAllBillionaire = datas => {
    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = ''

    datas.forEach(data => {
        const tableRow = document.createElement('tr')
        tableRow.innerHTML = `
            <th scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${data.personName} <i id="${data.rank}" class="fa-regular fa-eye cursor-pointer"></i>
            
            

            </th>
            <td class="px-6 py-4">${data.countryOfCitizenship}</td>
            <td class="px-6 py-4">${data.industries[0]}</td>
            <td class="px-6 py-4">${data.rank}</td>
            <td class="px-6 py-4">${data.city}</td>
        `
        tableBody.appendChild(tableRow)

        let id = data.rank
        document.getElementById(id).addEventListener('click', function(){
            const singleData = datas.find(data => data.rank == id)



            console.log(singleData);
        })
        
    })

    
}

displayAllBillionaire(array)




console.log(array[2]);


// <!-- The button to open modal -->
// <label for="my-modal-3" class="btn">open modal</label>

// <!-- Put this part before </body> tag -->
// <input type="checkbox" id="my-modal-3" class="modal-toggle" />
// <div class="modal">
//   <div class="modal-box relative">
//     <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//     <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
//     <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
//   </div>
// </div>







document.getElementById('search').addEventListener('keyup', function () {
    const input = document.getElementById('search').value
    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = ''

    array.filter(data => {

        

        // if (data.countryOfCitizenship.match(input) || data.city.match(input)) {
        //     const tableRow = document.createElement('tr')
        //     tableRow.innerHTML = `
        //         <th scope="row"
        //         class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${data.personName} <i id="information" class="fa-regular fa-eye cursor-pointer"></i></th>
        //         <td class="px-6 py-4">${data.countryOfCitizenship}</td>
        //         <td class="px-6 py-4">${data.industries[0]}</td>
        //         <td class="px-6 py-4">${data.rank}</td>
        //         <td class="px-6 py-4">${data.city}</td>
        //     `
        //     tableBody.appendChild(tableRow)
        // } else if (input === '') {
        //     displayAllBillionaire(array)

        // }

    })
    console.log(array[0]);






})