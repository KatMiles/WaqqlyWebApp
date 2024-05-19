document.addEventListener('DOMContentLoaded', async function() {
    const endpoint = 'https://functionforwaqqlytesting.azurewebsites.net/api/httptriggertesting'; // Replace with your function endpoint

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dogs = await response.json();

        const tableBody = document.querySelector('#dogsTable tbody');
        dogs.forEach(dog => {
            const row = document.createElement('tr');

            const dogNameCell = document.createElement('td');
            dogNameCell.textContent = dog.dogname;
            row.appendChild(dogNameCell);

            const ownerNameCell = document.createElement('td');
            ownerNameCell.textContent = dog.ownername;
            row.appendChild(ownerNameCell);

            const dogWalkerCell = document.createElement('td');
            dogWalkerCell.textContent = dog.dogwalker;
            row.appendChild(dogWalkerCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
