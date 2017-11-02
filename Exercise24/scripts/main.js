window.addEventListener('click', function () {
    var myForm = document.getElementById('frmMyForm');
    if (myForm.checkValidity() === false)
        myForm.classList.add('was-validated');
    $(document).ready(function () {
        $('#btnSubmit').on('click', submitForm);

        function submitForm() {
            $('form').fadeOut('slow', function () {
                $('#thankyou').fadeIn('slow');
            });
        }
    });
});