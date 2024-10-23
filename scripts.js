const loader = document.getElementById('loader');
const ctloader = document.getElementById('container-for-element');
const numberbarber = document.getElementById('second-header-button');

function hideLoader() {
    setTimeout(function() {
        loader.style.display = 'none';
        document.getElementById('content-of-this-web-site').style.display = 'block';
        document.body.style.overflow = 'visible';
    }, 350);
}

if (localStorage.getItem('navigated')) {
    hideLoader();
    localStorage.removeItem('navigated');
} else {

    document.getElementById('first-header-button').addEventListener('click', function() {
        loader.style.display = 'block';
        ctloader.style.display = 'flex';
        document.getElementById('content-of-this-web-site').style.display = 'none';
        
        setTimeout(function() {
            localStorage.setItem('navigated', 'true');
            window.location.href = 'zayavka/register.html';
        }, 500);
    });
}

window.addEventListener('load', function() {
    hideLoader();
});

numberbarber.addEventListener('click', ()=> {
    window.location.href = 'tel: +7(996)5610404'
})
