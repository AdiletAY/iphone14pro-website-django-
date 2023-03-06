const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const contact_btn = document.querySelector('.contact-btn');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});

contact_btn.addEventListener('click', ()=>{
    let input_name = document.querySelector('.contact-input-name').value;
    let input_phone = document.querySelector('.contact-input-email').value;
    if(input_name != '' && input_phone != ''){
        alert("Ваше заказ принят! В ближайшее время на номер " + input_phone + " поступит звонок");
        console.log("Ваше заказ принят! В ближайшее время на номер " + input_phone + " поступит звонок");
    }
    else{
        alert("Вы не ввели или ввели неправильно свои данные! Попробуйте еще раз!");
        console.log("Вы не ввели или ввели неправильно свои данные! Попробуйте еще раз!");
    }

    document.querySelector('.contact-input-name').value = "";
    document.querySelector('.contact-input-email').value = "";
});
