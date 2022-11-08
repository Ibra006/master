const btnMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelector('.hidden-cards');

btnMoreCards.addEventListener('click', function ()  {
  hiddenCards.classList.remove('hidden-cards');
})

const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget)  {
widget.addEventListener('click', function (e) {
    if (e.target.classList.contains('widget__title')) {
        e.target.classList.toggle('widget__title--active');
        e.target.nextElementSibling.classList.toggle('widget__body--hidden');
    }
});
});

const checkBoxAny = document.querySelector('#05');
const allLocationCheckboxes = document.querySelectorAll('.loc-check');
checkBoxAny.addEventListener('change', function () {
    if (checkBoxAny.checked) {
        allLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        });
        checkBoxAny.checked = true;
    }
})
