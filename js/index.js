/**
 * @file index.less
 * @author Qi Gao (gaoqi2103@gmail.com)
 */

$(function () {

	// fullpage 插件
    $('.pages').fullpage({
        onLeave: function (index, nextIndex, direction) {
            if (index === 1 && direction === 'down') {
                $('header').hide();
                $('.pages').css('top', '0');
                $('.features').removeClass('features-out').addClass('features-in');
            }
            if (index === 2 && direction === 'down') {
                $('header').hide();
                $('.pages').css('top', '0');
                $('.features').removeClass('features-in').addClass('features-out');
            }
            if (index === 2 && direction === 'up') {
                $('header').show();
                $('.pages').css('top', '-66px');
                $('.features').removeClass('features-in').addClass('features-out');
            }
            if (index === 3 && direction === 'up') {
                $('.features').removeClass('features-out').addClass('features-in');
            }
        },
        afterLoad: function (anchorLink, index) {
            if (index === 2) {
                $defaultInfo.addClass('animate-this');
            }
        }
    });

    // 翻页按钮
    $('.next-page-img').click(function () {
        $.fn.fullpage.moveSectionDown();
    });

    // jqDock配置
    var opts = {
        size: 107,
        sizeMax: 150,
        distance: 300
    };
    $('#jqDock').jqDock(opts);

	// 性能hover
    var $defaultInfo = $('.default-info');
    var $featuresInfo = $('.features-info');
    var $featuresImg = $('.features-img');

    function hoverIt(index) {
        $featuresImg.delegate('.jqDockItem:eq(' + index + ')', 'mouseenter', function () {
            $featuresInfo.fadeOut().eq(index + 1).fadeIn();
            $defaultInfo.removeClass('animate-this');
        });
    }
    function leaveIt() {
        $featuresImg.delegate('.jqDock', 'mouseleave', function () {
            $featuresInfo.fadeOut().eq(0).fadeIn();
        });
    }
    for (var i = 0; i < 5; i++) {
        hoverIt(i);
    }
    leaveIt();
});
