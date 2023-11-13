function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    
    const languages = Array.from(document.querySelectorAll('input[name="language"]:checked'))
        .map(language => language.value);
    
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    const skills = Array.from(document.getElementById('skills').selectedOptions)
        .map(skill => skill.value);
    
   
    window.location.href = `display.html?firstName=${firstName}&lastName=${lastName}&address=${address}&country=${country}&languages=${languages.join(',')}&gender=${gender}&skills=${skills.join(',')}`;
}
