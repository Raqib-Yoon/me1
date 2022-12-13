const humberger_img = document.querySelector('.humberger')
const navbar = document.querySelector('.navbar');
const dark_light_img = document.querySelector('.dark_light_img')
const close_open = false;
// show & hide humberger menu 

humberger_img.addEventListener('click', function () {
    if (!navbar.className.match('active')) {
        navbar.classList.add('active')
        humberger_img.src = './images//humberger_menu/close_dark.png'
    } else {
        humberger_img.src = './images//humberger_menu/open_dark.png'
        navbar.classList.remove('active')
    }
})

// Dark & Light Mode

dark_light_img.addEventListener('click', function () {
    if (dark_light_img.src.match('./images//dark_light_images//dark.png')) {
        dark_light_img.src = "./images//dark_light_images//light.png"
        dark_light_img.classList.add('light_img')
        document.body.className = 'dark_mode'
        close_open = true;
    } else {
        dark_light_img.classList.remove('light_img')
        document.body.classList.remove('dark_mode')
        dark_light_img.src = "./images//dark_light_images//dark.png"
        close_open = false;

    }
})
