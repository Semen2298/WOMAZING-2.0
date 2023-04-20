// Shop Tabs card

const tabs = document.getElementById('productCardTabs');
const content = document.querySelectorAll('.productCards');

function changeClass(el){
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click',function(e){
    let currTab = e.target.dataset.productCardBtn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.productCard === currTab){
            content[i].classList.add('active');
        }
    }
})

