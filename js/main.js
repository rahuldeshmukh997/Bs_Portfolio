$(document).ready(function(){

    let $btns=$('.project-area .button-group button');

    $btns.click(function(e){
        $('.site-main .project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        // e- event .target- target property .classList- it's add class .add("")- class name

        let selector = $(e.target).attr('data-filter');
        $('.site-main .project-area.grid').isotope({
            filter:selector
        });

        return false;
    });
});