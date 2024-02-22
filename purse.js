const purses = [
    { name: "Polene", imageUrl: "ppics/Image.png", url: "https://eng.polene-paris.com/products/numero-dix-monochrome-camel-graine", price: 460, notes: "Color: Camel", wantedness: 6 , order:1},
    { name: "Black Purse", imageUrl: "ppics/Image2.png", url: "https://www.portlandleathergoods.com/products/almost-perfect-baguette-shoulder-bag?variant=40372363264082", price: 78, notes: "Color: Black", wantedness: 7, order:2 },
    { name: "Polene", imageUrl: "ppics/Image 3.png", url: "https://eng.polene-paris.com/products/numero-douze-taupe-graine", price: 430, notes: "Color: Taupe", wantedness: 8, order:3 },
    { name: "Polene", imageUrl: "ppics/Image 4.png", url: "https://eng.polene-paris.com/products/tonca-laurier-graine", price: 450, notes: "Color: Laurier", wantedness: 5, order:4 },
    { name: "Frejanyc", imageUrl: "ppics/Image 5.png", url: "https://frejanyc.com/products/caroline-bag-oat", price: 258, notes: "Color: Camel", wantedness: 4, order:5 },
    { name: "Frejanyc", imageUrl: "ppics/Image 6.png", url: "https://frejanyc.com/products/caroline-bag-pecan", price: 258, notes: "Color: Black", wantedness: 11, order:6 },
    { name: "Frejanyc", imageUrl: "ppics/Image 7.png", url: "https://frejanyc.com/products/mini-shoulder-bag", price: 248, notes: "Color: Oat", wantedness: 10, order:7 },
    { name: "Frejanyc", imageUrl: "ppics/Image 8.png", url: "https://frejanyc.com/products/roma-bag-oat", price: 248, notes: "Color: Oat", wantedness: 13, order:8 },
    { name: "Polene", imageUrl: "ppics/Image 9.png", url: "https://eng.polene-paris.com/products/numero-dix-monochrome-noir-graine", price: 460, notes: "Color: Nior", wantedness: 9, order:9 },
    { name: "Polene", imageUrl: "ppics/Image 10.png", url: "https://eng.polene-paris.com/products/numero-dix-monochrome-taupe-graine", price: 460, notes: "Color: Taupe", wantedness: 3, order:10 },
    { name: "Teddy Blake", imageUrl: "ppics/Image 11.png", url: "https://www.teddyblake.com/products/kim-stampatto-9-dark-green", price: 450, notes: "Color: Dark Green", wantedness: 2, order:11},
    { name: "Teddy Blake", imageUrl: "ppics/Image 12.png", url: "https://www.teddyblake.com/products/kim-stampatto-9-orange", price: 425, notes: "Color: Orange", wantedness: 1, order:12 },
    { name: "Frejanyc", imageUrl: "ppics/Image 13.png", url: "https://frejanyc.com/products/mini-shoulder-bag-taupe", price: 248, notes: "Color: Camel", wantedness: 14, order:13 },
    { name: "Frejanyc", imageUrl: "ppics/Image 14.png", url: "https://frejanyc.com/products/mini-shoulder-bag-black", price: 248, notes: "Color: Black", wantedness: 12, order:14 },
];


function populatePurseTable() {
    const table = document.getElementById("purseTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    purses.forEach(purse => {
        const row = tbody.insertRow();
        const imgCell = row.insertCell(0);
        const linkCell = row.insertCell(1);
        const priceCell = row.insertCell(2);
        const notesCell = row.insertCell(3);

        imgCell.innerHTML = `<img src="${purse.imageUrl}" width="300" height="300">`;
        linkCell.innerHTML = `<a href="${purse.url}" target="_blank">${purse.name}</a>`;
        priceCell.textContent = `$${purse.price}`;
        notesCell.textContent = purse.notes;
    });
}

function sortPurses() {
    const priceFilter = document.getElementById("priceFilter").value;
    if (priceFilter === "lowToHigh") {
        purses.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "highToLow") {
        purses.sort((a, b) => b.price - a.price);
    } else if (priceFilter === "reset") {
        // Reset to default list
        purses.sort((a, b) => a.order - b.order);
    }
    populatePurseTable();
}

function clearFilters() {
    // Reset price filter
    document.getElementById("priceFilter").selectedIndex = 0;

    // Re-populate the purse table with the original data
    populatePurseTable();
}

/*function sortPurses() {
    const priceFilter = document.getElementById("priceFilter").value;
    if (priceFilter === "lowToHigh") {
        purses.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "highToLow") {
        purses.sort((a, b) => b.price - a.price);
    }
    populatePurseTable();
}
*/
function filterMostToLeastWanted() {
    purses.sort((a, b) => b.wantedness - a.wantedness);
    populatePurseTable();
}


// Initial population of purse table
populatePurseTable();