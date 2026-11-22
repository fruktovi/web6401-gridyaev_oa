class Feedback {
    constructor(name, email, consent) {
        this.name = name;
        this.email = email;
        this.consent = consent;
    }

    print() {
        console.log(
            `Обратная связь
Имя: ${this.name}
Электронная почта: ${this.email}
Согласие на обработку данных: ${this.consent ? 'Да' : 'Нет'}`
        );
    }
}

const form = document.getElementById('feedback-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const feedback = new Feedback(
        form.elements.name.value,
        form.elements.email.value,
        form.elements.consent.checked
    );

    feedback.print();
    document.getElementById('form-status').textContent =
        'Данные формы выведены в консоль.';
});
