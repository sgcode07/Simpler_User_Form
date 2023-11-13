document.addEventListener('DOMContentLoaded', function() {
    const formDataDiv = document.getElementById('formData');
    const urlParams = new URLSearchParams(window.location.search);

    const formData = {
        firstName: urlParams.get('firstName'),
        lastName: urlParams.get('lastName'),
        address: urlParams.get('address'),
        country: urlParams.get('country'),
        languages: urlParams.get('languages').split(','),
        gender: urlParams.get('gender'),
        skills: urlParams.get('skills').split(',')
    };
    formDataDiv.innerHTML = `
        <p><strong>First Name:</strong> ${formData.firstName}</p>
        <p><strong>Last Name:</strong> ${formData.lastName}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <p><strong>Languages:</strong> ${formData.languages.join(', ')}</p>
        <p><strong>Gender:</strong> ${formData.gender}</p>
        <p><strong>Skills:</strong> ${formData.skills.join(', ')}</p>
    `;
});
