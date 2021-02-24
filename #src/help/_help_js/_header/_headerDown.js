/*-- HEADER при скроулинге опусуается сверху в низ --*/
// Медленный скроулинг
const scrolling = () => {
    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};
scrolling();


//Окрашивание ссылок Link выбранного раздела
const lineActive = () => {
    let header = document.querySelector('.header-nav'),
        active = document.querySelectorAll('.header-nav__linck');

    function hideActive() {
        active.forEach(item => {
            item.classList.remove('activeNav');
        });
    }

    function showActive(i = 0) {
        active[i].classList.add('activeNav');
    }
    //headers.forEach(header => {
    header.addEventListener('click', (e) => {

        const target = e.target;

        if (target && (target.classList.contains('header-nav__linck'))) {
            console.log(target);

            active.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideActive();
                    showActive(i);
                }
            });
        }
    });
    //});
};
lineActive();

//При скроулинге HEADER выподает сверху. Нужно применить стили .header-clon анимацию .FadeInDown.
//Стили:
// .header-clon{
//     position: fixed;
//     opacity: 0;
//     top: -80px;
//     background: -moz-linear-gradient(left,  rgba(10,7,53,0.9) 0%, rgba(80,63,118,0.9) 100%); /* FF3.6-15 */
//             background: -webkit-linear-gradient(left,  rgba(10,7,53,0.9) 0%,rgba(80,63,118,0.9) 100%); /* Chrome10-25,Safari5.1-6 */
//             background: linear-gradient(to right,  rgba(10,7,53,0.9) 0%,rgba(80,63,118,0.9) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
//             filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e60a0735', endColorstr='#e6503f76',GradientType=1 ); /* IE6-9 */
//     box-shadow: 0 5px 10px #000;
//     z-index: 100;
// }

// .fadeInDown {
//     animation-name: fadeInDown;
//     animation-duration: 1s;
//     animation-fill-mode: both;
// }
// @keyframes fadeInDown {
//     from {
//         opacity: 0;
//         top: -80px;
//     }
//     to {
//         opacity: 1;
//         top: -13px;
//     }
// }

const headerScrollDown = () => {
    const content = document.querySelector('.header-body');
    content.classList.remove('fadeInUpHeader', 'header-clon', 'fadeInDown');
    const scrollActiv = () => {


        let contentOfsetTop = content.offsetTop;
        if (window.scrollY >= contentOfsetTop + 80) {
            content.classList.add('header-clon', 'fadeInDown');
            content.classList.remove('fadeInUpHeader');
        } else {
            content.classList.remove('header-clon', 'fadeInDown');
        }

    };
    window.addEventListener('scroll', scrollActiv);
};
headerScrollDown();