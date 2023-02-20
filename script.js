import * as entries from './entries.json';
let list = [];

function main() {
    entries.forEach(e => {
        let entry = {
            id: e._id,
            user: e.user,
            email: e.email,
            twitter: e.twitter,
            discord: e.discord,
            wallet: e.wallet
        };
        list.push(entry);
        console.log(list)
    });

    const tableBody = document.querySelector('#entriesTable tbody');
    list.forEach(entry => {
        const row = document.createElement('tr');
        Object.values(entry).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

main();