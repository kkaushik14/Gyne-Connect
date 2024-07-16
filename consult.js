document.addEventListener('DOMContentLoaded', function () {
    var formElement = document.getElementById('appointmentFormElement');

    if (formElement) {
        formElement.addEventListener('submit', function (event) {
            event.preventDefault();

            var name = document.getElementById('name_input').value;
            var email = document.getElementById('email_input').value;
            var age = document.getElementById('age_input').value;
            var contact = document.getElementById('contact_input').value;
            var scheduledDate = document.getElementById('scheduled_date_input').value;
            var scheduledTime = document.getElementById('scheduled_time_input').value;
            var options = [];
            var checkboxes = document.querySelectorAll('input[name=options]:checked');
            checkboxes.forEach(function (checkbox) {
                options.push(checkbox.value);
            });

            if (!name || !email || !age || !contact || !scheduledDate || !scheduledTime || options.length === 0) {
                alert('Please fill out all required fields and select at least one option.');
                return;
            }

            var appointmentData = {
                name,
                email,
                age,
                contact,
                scheduledDate,
                scheduledTime,
                options
            };

            fetch('http://localhost:2003/api/appointments/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(appointmentData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Appointment booked successfully') {
                    alert('Your appointment is scheduled!');
                    formElement.reset();
                } else {
                    alert('Error booking appointment: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error booking appointment. Please try again.');
            });
        });
    }
});

function genForm() {
    var formPrompt = document.getElementById('appointmentForm');
    formPrompt.classList.remove('hidden');
}


// data fetch from backend
// function fetchDataAndGeneratePdf() {
//     fetch('http://localhost:2003/api/appointments')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             generatePdfFromData(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }


// function generatePdfFromData(appointments) {
//     const doc = new jsPDF();

//     appointments.forEach((appointment, index) => {
//         const formattedAppointment = `
//             Patient Name: ${appointment.patientName}
//             Email: ${appointment.email}
//             Age: ${appointment.age}
//             Contact: ${appointment.contact}
//             Scheduled Date: ${new Date(appointment.scheduledDate).toLocaleDateString()}
//             Scheduled Time: ${appointment.scheduledTime}
//             Consultancy: ${appoitnment.consultancy}
//         `;
//         doc.text(20, 10 + (index * 80), formattedAppointment);
//     });
//     doc.save('appointments.pdf');
// }

// const downloadBtn = document.getElementById('downloadPdfBtn');
// if (downloadBtn) {
//     downloadBtn.addEventListener('click', fetchDataAndGeneratePdf);
// } else {
//     console.error('Button not found!');
// }