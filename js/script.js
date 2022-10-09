

let site_btn = document.querySelector('.site_btn'),
    body_tag = document.querySelector('body'),
    site_content = body_tag.querySelector('.site_content');


//add preloader on ajax 
let add_ajax_preloader = () => {

    body_tag.classList.add('ajax');
    site_content.style.cssText = 'visibility: hidden';

    setTimeout(() => {
        body_tag.classList.remove('ajax')
        site_content.style.cssText = 'visibility: visible'
    }, 5000)
}

site_btn.addEventListener('click', add_ajax_preloader)
