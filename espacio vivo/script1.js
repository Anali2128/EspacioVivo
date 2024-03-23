document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        var name = document.getElementById('name').value.trim();
        var lastname = document.getElementById('lastname').value.trim();
        var mail = document.getElementById('mail').value.trim();
        var age = document.getElementById('age').value.trim();
        var birthday = document.getElementById('birthday').value.trim();
        var phonenumber = document.getElementById('phonenumber').value.trim();
        var nameContact = document.getElementById('nameContact').value.trim();
        var phonenumber1 = document.getElementById('phonenumber1').value.trim();
        var observations = document.getElementById('observations').value.trim();
        var condiciones = document.getElementById('condiciones').checked;

        // Validar que al menos una clase esté seleccionada
        if (checkboxes.length === 0) {
            alert('Por favor, selecciona al menos una clase.');
            return;
        }

        // Validar que todos los campos obligatorios estén completos
        if (name === '' || lastname === '' || mail === '' || age === '' || birthday === '' || phonenumber === '' || nameContact === '' || phonenumber1 === '' || observations === '') {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        // Validar la aceptación de las condiciones
        if (!condiciones) {
            alert('Debes aceptar las condiciones para continuar.');
            return;
        }

        // Si todo está validado, puedes enviar el formulario
        form.submit();
    });
});
