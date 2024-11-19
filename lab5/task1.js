'use strict';

const validators = {
    name: {
        pattern: /^[A-Za-zА-Яа-яІЇЄЁҐіїєёґ]{2,} [A-ZА-ЯІЇЄЁҐ]\.[A-ZА-ЯІЇЄЁҐ]\.$/,
        requirements: "Формат: TTTTTT T.T. (прізвище та ініціали з крапками)"
    },
    group: {
        pattern: /^[A-ZА-ЯІЇЄЁҐ]{2}-\d{2}$/,
        requirements: "Формат: TT-ЧЧ (дві літери, дефіс, два числа)"
    },
    phone: {
        pattern: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
        requirements: "Формат: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ"
    },
    address: {
        pattern: /^м\. [A-Za-zА-Яа-яІЇЄЁҐіїєёґ]{2,}$/,
        requirements: "Формат: м. ЧЧЧЧЧЧ (м. та назва міста)"
    },
    email: {
        pattern: /^[a-z]+@[a-zZ]+\.[a-z]{2,}$/,
        requirements: "Формат: tttttt@ttttt.com"
    },
};

function validate(form) {
    console.log('Validating form', form);

    let valid = true;
    const errors = ['Форма містить помилки:'];
    for (let field of form) {
        if (!isPresent(field)) {
            console.error(`No validator for field ${field.name}`);
            continue;
        }
        if (isValid(field)) {
            markFieldAsValid(field)
        } else {
            markFieldAsInvalid(field);
            errors.push(
                `Поле ${field.name} не відповідає вимогам: ` + getRequirementsOf(field)
            );
            valid = false;
        }
    }
    
    if (!valid) {
        alert(errors.join('\n'));
    }
    return valid;
}

function isPresent(field) {
    return !!validators[field.name];
}

function isValid(field) {
    return validators[field.name].pattern.test(field.value);
}

function markFieldAsValid(field) {
    const input = document.getElementById(field.name);
    input.classList = [];
}

function markFieldAsInvalid(field) {
    const input = document.getElementById(field.name);
    input.classList.add('error-field');
}

function getRequirementsOf(field) {
    return validators[field.name].requirements;
}

