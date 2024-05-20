document.addEventListener('DOMContentLoaded', async function() {
    const endpoint = 'https://functionforwaqqlytesting.azurewebsites.net/api/httptriggertesting';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const results = await response.json();

        const tableBody = document.querySelector('#dogwalkerTable tbody');
        results.forEach(dog => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = dog.dogname;
            row.appendChild(nameCell);

            const locationCell = document.createElement('td');
            locationCell.textContent = dog.ownername;
            row.appendChild(locationCell);

            const priceCell = document.createElement('td');
            priceCell.textContent = dog.dogwalker;
            row.appendChild(priceCell);

            const numberCell = document.createElement('td');
           numberCell.textContent = dog.number;
            row.appendChild(numberCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

