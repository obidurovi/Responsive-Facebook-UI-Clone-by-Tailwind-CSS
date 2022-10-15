const darkModeDesk = document.querySelector('#dark-mode-toggle');
const darkModeMobile = document.querySelector('#dark-mode-toggle-mb');

// Dark Function Desktop
darkModeDesk.onclick = () => {
    document.documentElement.classList.toggle('dark');
}


// Dark Function Mobile
darkModeMobile.onclick = () => {
    document.documentElement.classList.toggle('dark');
}
