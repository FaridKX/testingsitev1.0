const loader = document.getElementById('loader');
const ctloader = document.getElementById('container-for-element');

document.getElementById('first-header-button').addEventListener('click', function() {
loader.style.display = 'block';
ctloader.style.display = 'flex';
document.getElementById('content-of-this-web-site').style.display = 'none';
        setTimeout(function() {
            window.location.href = 'zayavka/register.html';
        }, 2000);
    });
