const loader = document.getElementById('loader');
const ctloader = document.getElementById('container-for-element');
const numberbarber = document.getElementById('second-header-button');

function hideLoader() {
    loader.style.display = 'none';
    document.getElementById('content-of-this-web-site').style.display = 'block';
    document.body.style.overflow = 'visible';
}

if (localStorage.getItem('navigated')) {
    hideLoader();
    localStorage.removeItem('navigated');
}

document.getElementById('first-header-button').addEventListener('click', function() {
    loader.style.display = 'block';
    ctloader.style.display = 'flex';
    document.getElementById('content-of-this-web-site').style.display = 'none';
    
    setTimeout(function() {
        localStorage.setItem('navigated', 'true');
        window.location.href = 'zayavka/register.html';
    }, 500);
});

window.addEventListener('load', function() {
    if (!localStorage.getItem('navigated')) {
        hideLoader(); 
    }
});

numberbarber.addEventListener('click', ()=> {
    window.location.href = 'tel: +7(996)5610404'
})
document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = 'zayavka/register.html';
});

function lockScroll() {
    document.body.classList.add('lock-scroll');
}
function unlockScroll() {
    document.body.classList.remove('lock-scroll');
}
window.onload = function() {
    const pole = document.querySelector('.pole');
    lockScroll();
    
    setTimeout(() => {
        pole.style.display = 'none';
        unlockScroll();
    }, 2024);
};
