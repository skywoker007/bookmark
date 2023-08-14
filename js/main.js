const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');

const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');

function deactivateTabItems(){
    elsTabsItem.forEach(function(elTabsItem){
        elTabsItem.classList.remove('tabs__item--active');
    });
}
function deactivateTabPanels(){
    elsTabsPanel.forEach(function(elTabsPanel){
        elTabsPanel.classList.remove('tabpanels__item--active');
    });
}

function closeAccordionItems () {
    elsAccordionItem.forEach(function (elAccordionItem) {
        elAccordionItem.classList.remove('accordion__item--open');
    });
}
elsTabLink.forEach(function(elTabLink){
    elTabLink.addEventListener('click', function(evt){
        // Sahifani almashtirish
        evt.preventDefault();

        // Aktiv klassni olish
        deactivateTabItems();

        // aktiv klass qo`shish
        elTabLink.parentElement.classList.add('tabs__item--active');

        // tabpanelni olib tashlash
        deactivateTabPanels();

        // aktiv panelni ko`rsatish
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);

        elTargetPanel.classList.add('tabpanels__item--active');
        
    });
});

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function () {
        closeAccordionItems();

        elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
    });
});