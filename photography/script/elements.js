export default function bodyElements () {
    const elements = {}
    elements.home = document.querySelector('.main-site-header');
    elements.about = document.querySelector('.about-myself');
    elements.clients = document.querySelector('.happy-clients-container')
    elements.portfolio = document.querySelector('.portfolio-container-main')
    elements.blog = document.querySelector('.blog-main-container')
    return elements
}
