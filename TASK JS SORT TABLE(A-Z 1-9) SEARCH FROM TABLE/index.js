let tbody = document.querySelector("tbody")
let searchInput = document.querySelector("#searchInput");
axios.get("https://northwind.vercel.app/api/products")
    .then(res => {
        res.data.forEach(element => {
            tbody.innerHTML += `
            <tr>
                    <td class="name">${element.name}</td>
                    <td>${element.unitPrice}</td>
                    <td>${element.unitsInStock}</td>
                    <td id="${element.id}">
                        ${element.quantityPerUnit}
                    </td>
                </tr>
            `
        })



        let up = document.querySelector(".fa-arrow-up")
        up.addEventListener("click", function () {
            tbody.innerHTML = "";
            let name_array;
            name_array = res.data
            name_array.sort((a, b) => a.name.localeCompare(b.name))
            name_array.forEach(elem => {
                tbody.innerHTML += `
                <tr>
                <td class="name">${elem.name}</td>
                <td>${elem.unitPrice}</td>
                <td>${elem.unitsInStock}</td>
                <td id="${elem.id}">
                    ${elem.quantityPerUnit}
                </td>
            </tr>
                `
            });
        })
        let down = document.querySelector(".fa-arrow-down");
        down.addEventListener("click", function () {
            tbody.innerHTML = "";
            let name_array;
            name_array = res.data
            name_array.sort((a, b) => b.name.localeCompare(a.name))
            name_array.forEach(elem => {
                tbody.innerHTML += `
                <tr>
                <td class="name">${elem.name}</td>
                <td>${elem.unitPrice}</td>
                <td>${elem.unitsInStock}</td>
                <td id="${elem.id}">
                    ${elem.quantityPerUnit}
                </td>
            </tr>
                `
            });
        })
        let UpUnitPrice = document.querySelector(".UpUnitPrice");
        UpUnitPrice.addEventListener("click", function () {
            tbody.innerHTML = "";
            let unitPrice_array;
            unitPrice_array = res.data
            unitPrice_array.sort((a, b) => b.unitPrice - a.unitPrice)
            unitPrice_array.forEach(elem => {
                tbody.innerHTML += `
                <tr>
                <td class="name">${elem.name}</td>
                <td>${elem.unitPrice}</td>
                <td>${elem.unitsInStock}</td>
                <td id="${elem.id}">
                    ${elem.quantityPerUnit}
                </td>
            </tr>
                `
            });
        })
        let DownUnitPrice = document.querySelector(".DownUnitPrice");
        DownUnitPrice.addEventListener("click", function () {
            tbody.innerHTML = "";
            let unitPrice_array;
            unitPrice_array = res.data
            unitPrice_array.sort((a, b) => a.unitPrice - b.unitPrice)
            unitPrice_array.forEach(elem => {
                tbody.innerHTML += `
                <tr>
                <td class="name">${elem.name}</td>
                <td>${elem.unitPrice}</td>
                <td>${elem.unitsInStock}</td>
                <td id="${elem.id}">
                    ${elem.quantityPerUnit}
                </td>
            </tr>
                `
            });
        })
        searchInput.addEventListener("keyup", function () {
            let name_array;
            name_array = res.data
            tbody.innerHTML = ""
            let searchname = name_array.filter(x => x.name.toLowerCase().includes(searchInput.value.toLowerCase()))
            searchname.forEach(elem => {
                tbody.innerHTML += `
                <tr>
                <td class="name">${elem.name}</td>
                <td>${elem.unitPrice}</td>
                <td>${elem.unitsInStock}</td>
                <td id="${elem.id}">
                    ${elem.quantityPerUnit}
                </td>
            </tr>
                `
            })

        })



    })