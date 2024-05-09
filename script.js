$(document).ready(function () {
  // Scroll down sticky navbar script start
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // Scroll down sticky navbar script end

    // Scroll up Button script start
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    // Scroll up Button script end

    // Fade In & Fade Out Elements on Scroll script start
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
      // Fade In & Fade Out Elements on Scroll script end
    });
  });

  // Scroll up Button script start
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // Scroll up Button script end

  // Typing animation script start
  var typed = new Typed(".typing", {
    strings: [
      "Full Stack Developer",
      "Front End Developer",
      "Backend Developer",
      "Coder",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: [
      "Full Stack Developer",
      "Front End Developer",
      "Backend Developer",
      "Coder",
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // toggle menu/navbar script start
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // toggle menu/navbar script end

  // owl carousel script start
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // owl carousel script end
});

// Send Mail Function
function SendMail() {
  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    subject: document.getElementById("subject").value,
  };
  // console.log(params);
  emailjs
    // service_id, template_id
    .send("service_xix0rfe", "template_sv2ewit", params)
    .then(function (res) {
      alert("Success" + res.status);
    });

  (document.getElementById("fullname").value = ""),
    (document.getElementById("email_id").value = ""),
    (document.getElementById("message").value = ""),
    (document.getElementById("subject").value = "");
}
