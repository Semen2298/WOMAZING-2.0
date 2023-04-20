// One-item Tabs card

const tabsOneItemSize = document.getElementById('cardProductItemSizeBtns');
const tabsOneItemColor = document.getElementById('cardProductItemColorBtns');

const changeClassSize = el => {
    for (let i = 0; i < tabsOneItemSize.children.length; i++) {
        tabsOneItemSize.children[i].classList.remove('active');
    }
    el.classList.add('active');
 }

 const changeClassColor = el => {
    for (let i = 0; i < tabsOneItemColor.children.length; i++) {
        tabsOneItemColor.children[i].classList.remove('active');
    }
    el.classList.add('active');
 }

 tabsOneItemSize.addEventListener('click', e => {
    changeClassSize(e.target);
 })
 tabsOneItemColor.addEventListener('click', e => {
    changeClassColor(e.target);
 })


