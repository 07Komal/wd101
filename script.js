document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const termsAccepted = document.getElementById('terms').checked;

    // Date validation for age 18-55
    const dobDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    if (age < 18 || age > 55) {
        alert("Date of birth must indicate age between 18 and 55 years.");
        return;
    }

    // Email validation (example using @gmail or other extensions)
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|org|net)$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (e.g., yourname@gmail.com).");
        return;
    }

    // Check if terms are accepted
    if (!termsAccepted) {
        alert("You must accept the terms and conditions.");
        return;
    }

    // Append entry to table
    const table = document.getElementById('entriesTable');
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${termsAccepted ? 'Yes' : 'No'}</td>`;

    // Reset form
    document.getElementById('registrationForm').reset();
});
