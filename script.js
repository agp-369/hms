const appointments = document.getElementById('appointments');
const form = document.querySelector('form');
const doctorNameInput = document.getElementById('doctor-name');
const appointmentDateInput = document.getElementById('appointment-date');
const addAppointmentButton = document.querySelector('button[type="submit"]');

addAppointmentButton.addEventListener('click', () => {
    const doctorName = doctorNameInput.value;
    const appointmentDate = appointmentDateInput.value;
    if (doctorName && appointmentDate) {
        const tr = document.createElement('tr');
        const tdDoctorName = document.createElement('td');
        tdDoctorName.textContent = doctorName;
        tr.appendChild(tdDoctorName);
        const tdAppointmentDate = document.createElement('td');
        tdAppointmentDate.textContent = appointmentDate;
        tr.appendChild(tdAppointmentDate);
        appointments.appendChild(tr);
    } else {
        alert('Please fill in all fields before submitting!');
    }
});