$(function () {
    $("[data-modal]").on("click", function (event) {
        event.preventDefault();

        $(modal_resume).addClass('show');
    })

    $(modal_resume).on("click", function () {
        $(modal_resume).removeClass('show');
    })

    // $(".photo-slider__up").slick({
    //     arrows: false,
    //     dots: false,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     variableWidth: true,
    //     responsive: [
    //         {
    //             breakpoint: 516,
    //             settings: {
    //                 arrow: false
    //             }
    //         }
    //     ]

    // })

    // $(".photo-slider__down").slick({
    //     arrows: false,
    //     dots: false,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     variableWidth: true,
    //     responsive: [
    //         {
    //             breakpoint: 516,
    //             settings: {
    //                 arrow: false
    //             }
    //         }
    //     ]

    // })
});

