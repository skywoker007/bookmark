const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabs__panel');
const elsTabLink = document.querySelectorAll('.js-tab-link');
function deactivateTabItems(){
    elsTabsItem.forEach(function(elTabsItem){
        elTabsItem.classList.remove('tabs__item--active');
    });
}
function deactivateTabPanels(){
    elsTabsPanel.forEach(function(elTabsPanel){
        elTabsPanel.classList.remove('tabs__panel--active');
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

        elTargetPanel.classList.add('tabs__panel--active');
        
    });
});