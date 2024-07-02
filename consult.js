// form
function genForm() {
    var formPrompt = document.getElementById('appointmentForm');
    formPrompt.classList.remove('hidden');

    var formElement = document.getElementById('appointmentFormElement');
    formElement.addEventListener('submit', function (event) {
        event.preventDefault();

        var name = document.getElementById('name_input').value;
        var email = document.getElementById('email_input').value;
        var age = document.getElementById('age_input').value;
        var contact = document.getElementById('contact_input').value;
        var scheduledDate = document.getElementById('scheduled_date_input').value;
        var scheduledTime = document.getElementById('scheduled_time_input').value;

        if (!name || !email || !age || !contact || !scheduledDate || !scheduledTime) {
            alert('Please fill out all required fields.');
            return;
        }

        formPrompt.classList.add('hidden');
        alert('Your appointment is scheduled!');

        formElement.reset();
    });
}