
$(function() {

        $(window).on("load resize", function() {

                $(".fill-screen").css("height", window.innerHeight);

        })

        $("body").scrollspy( {
                target: ".navbar",
                offset: 160
        })

        $('[data-spy="scroll"]').each(function () {
                var $spy = $(this).scrollspy('refresh')
        })

        $("nav a, .down-button a").bind("click", function() {
                $("html, body").stop().animate({
                        scrollTop: $($(this).attr("href")).offset().top - 100
                }, 1500, "easeInOutExpo")
                event.preventDefault()
        })

        $(window).stellar();
        $(document).ready(function () {
                $("#nanoGallery3").nanoGallery({
                        thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300},{name: 'imageScale150', duration: 700}],
                        thumbnailWidth: 'auto',
                        thumbnailHeight: 250,
                        colorScheme: 'none',
                        theme: 'light',
                        thumbnailGutterWidth: 0,
                        thumbnailGutterHeight: 0,
                        thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
                        colorSchemeViewer: 'light',
                        maxWidth: 1000
                });
        });
});
