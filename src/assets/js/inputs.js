//проверка [type=tel]
let inputsTel = document.querySelectorAll('input.inputs__field[type=tel]');

for (var i = 0; i < inputsTel.length; i++) {
    inputsTel[i].addEventListener('input', function () {
        var input = this;
        var inputmask = input.inputmask;

        if (inputmask.isComplete()) {
            input.classList.remove('inputs__field--invalid');
        }

        inputsTel.forEach(function (input) {
            if (input.value !== "") {
                input.classList.add("inputs__field--active");
            } else {
                input.classList.remove("inputs__field--active");
            }
        });
    });
}

//проверка [type=text]
let inputsText = document.querySelectorAll('input.inputs__field[type=text], textarea.inputs__field');

for (var i = 0; i < inputsText.length; i++) {
    inputsText[i].addEventListener('input', function () {
        this.classList.remove('inputs__field--invalid');
        inputsText.forEach(function (input) {
            if (input.value !== "") {
                input.classList.add("inputs__field--active");
            } else {
                input.classList.remove("inputs__field--active");
            }
        });
    });
}

//проверка [type=email]
let inputsEmail = document.querySelectorAll('input.inputs__field[type=email]');
inputsEmail.forEach(function (inputEmail) {
    inputEmail.addEventListener('input', function () {
        let sanitizedValue = this.value.replace(/[^a-zA-Z@.\s]/g, '');
        this.value = sanitizedValue;

        if (sanitizedValue !== "" && sanitizedValue.includes("@") && sanitizedValue.lastIndexOf("@") < sanitizedValue.length - 2 && sanitizedValue.includes(".") && sanitizedValue.lastIndexOf(".") > sanitizedValue.lastIndexOf("@") + 1 && sanitizedValue.lastIndexOf(".") < sanitizedValue.length - 1) {
            this.classList.add("inputs__field--active");
            this.classList.remove("inputs__field--invalid");
        } else {
            this.classList.remove("inputs__field--active");
            this.classList.add("inputs__field--invalid");
        }
    });
    inputEmail.addEventListener('blur', function () {
        let sanitizedValue = this.value.replace(/[^a-zA-Z@.\s]/g, '');
        this.value = sanitizedValue;

        if (sanitizedValue === "") {
            this.classList.remove('inputs__field--invalid');
            this.classList.remove('inputs__field--active');
        } else if (!sanitizedValue.includes("@")) {
            this.classList.add('inputs__field--invalid');
        } else if (sanitizedValue.lastIndexOf("@") >= sanitizedValue.length - 2 || !sanitizedValue.includes(".")) {
            this.classList.add('inputs__field--invalid');
        } else {
            this.classList.remove('inputs__field--invalid');
        }
    });
});






// Навешивание класса невалидности ( в целях стилизации ) при попытке отправить форму;
const forms = document.querySelectorAll('form.inputs');
forms.forEach(function (form) {
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.addEventListener('click', function () {
        const inputs = this.closest('.inputs').querySelectorAll('input.inputs__field[required],textarea.inputs__field[required],input.inputs__checkbox-input[required]');
        let isValid = true;
        inputs.forEach(function (input) {
            if (input.type === 'checkbox' && !input.checked) {
                input.classList.add('inputs__field--invalid');
                isValid = false;
            } else if (input.value === "" && input.hasAttribute('required')) {
                input.classList.add('inputs__field--invalid');
                isValid = false;
            }
        });
        if (!isValid) {
            const invalidInputs = this.closest('.inputs').querySelectorAll('.inputs__field--invalid');
            invalidInputs.forEach(function (input) {
                input.classList.add('inputs__field--invalid');
            });
        }
    });
});

///////////////
// $('textarea').on('focus blur', function (e) {
//     $(this).parents('.inputs__field-wrap--textarea').toggleClass('is-focused', (e.type === 'focus' || this.value.length > 0));
// }).trigger('blur');