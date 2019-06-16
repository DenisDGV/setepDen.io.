$(document).ready(function () {
    $(`.tabService-title`).click(function (){
        switchTabs (this ,`active animated flipInX` , `card-box`);
    });
    function switchTabs(elem ,switchClass , contentClass) {
        $(elem).addClass(switchClass).siblings().removeClass(switchClass);
        const tabIndex = $(elem).index();
        $(`.${contentClass}`).removeClass(switchClass).eq(tabIndex).addClass(switchClass);
    }
});
$(document).ready(function () {
    $('.clock-preloader').hide();
    $('.showImg').hide();
    $('.showImg').slice(0,12).show(500).addClass('animated jackInTheBox');
    $('.loadMoreBtn').click(function () {
        const imageType = $('.btn.active-filter').data('filter');
        $('.loadMoreBtn').hide();
        $('.clock-preloader').show();
        setTimeout( function () {
            $(`.showImg${imageType}:hidden`).slice(0, 12).show(500).addClass('animated jackInTheBox');
            $('.loadMoreBtn').show();
            $('.clock-preloader').hide();
            if ($(`.showImg${imageType}:hidden`).length < 1) {
                $('.loadMoreBtn').hide();
            }
           }, 2000);
        });
    });
    $('.btn').click(function () {
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
        const imageType = $(this).data('filter');
        $('.showImg').hide();
        $(`.showImg${imageType}`).slice(0,12).show(500).addClass('animated jackInTheBox');
        if ($(`.showImg${imageType}:hidden`).length < 1) {
            $('.loadMoreBtn').hide();
        }else {
            $('.loadMoreBtn').show();
        }
    });

$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'

    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        prevArrow: "<i id='btn' class=\"fas fa-chevron-left prevBtn fz-fa\"></i>",
        nextArrow: "<i id='btn' class=\"fas fa-chevron-right nextBtn fz-fa\"></i>",
    });
});

$(document).ready(function () {
    $('.item').hide();
    $('.item').slice(0, 7).show();
    $('#btnGrid').click(function () {
        $('#btnGrid').hide();
        $('.clock-preloader').show();
        setTimeout(function () {
            $('.item:hidden').slice(0, 9).show().addClass('animated jackInTheBox');
            if ($('.item:hidden').length < 1) {
                $('#btnGrid').hide();
                $('.clock-preloader').hide();
            }
            let msnry = new Masonry(elem, {
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                gutter: 22,
                percentPosition: true,
                isAnimated: true,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        }, 2000);
    });
    let elem = document.querySelector('.grid');
    let msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 22,
        percentPosition: true,
        isAnimated: true,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
});