
$(function() {


        $(window).on("load resize", function() {

                $(".fill-screen").css("height", window.innerHeight);

        })

        $("body").scrollspy( {
                target: ".navbar",
                offset: 160
        })



        var form = $('#contactForm');

        var formMessages = $('#formAlerts');

        $(form).submit(function(event) {

                event.preventDefault();

                var formData = $(form).serialize();

                $.ajax({
                        type: 'POST',
                        url: $(form).attr('action'),
                        data: formData
                })

                .done(function(response) {
                        $(formMessages).removeClass('alert alert-danger');
                        $(formMessages).addClass('alert alert-success');

                        $(formMessages).text(response);

                        $('#name').val('');
                        $('#email').val('');
                        $('#phone').val('');
                        $('#message').val('');
                })

                .fail(function(data) {
                        $(formMessages).removeClass('alert alert-success');
                        $(formMessages).addClass('alert alert-danger');

                        if (data.responseText !== '') {
                                $(formMessages).text(data.responseText);
                        } else {
                                $(formMessages).text('Oops! An error occured and your message could not be sent! ');
                        }
                })
                
        });

        $('.panorama').panorama_viewer ({
                repeat: false,
                direction: "horizontal",
                animationTime: 700,
                easing: "ease-out",
                overlay: true
        });


        $('[data-spy="scroll"]').each(function () {
                var $spy = $(this).scrollspy('refresh')
        })

        $("nav a, .down-button a").bind("click", function() {
                $("html, body").stop().animate({
                        scrollTop: $($(this).attr("href")).offset().top - 100
                }, 1500, "easeInOutExpo")
                event.preventDefault()
        })

        //Test if on mobile device, and if it is, disable parallax scrolling
        var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (!ismobile) {
                $(window).stellar();
        }

        
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
                        maxWidth: 1500
                });
        });
});

