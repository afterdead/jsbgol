$(function () {
  $('.carousel').carousel()

  $('.nav_first .nav-item').click(function (e) {
    e.preventDefault()
    $('.nav-item').removeClass('active')
    $(this).addClass('active')
  })
  // scroll functionz
  // Hide Header on on scroll down
  var didScroll
  var delta = 5
  var navbarHeight = $('.nav_first').height()
  var st = $(this).scrollTop()
  var lastScrollTop = st

  if (st == 0) {
    $('.nav_first').removeClass('bg-white')
  }else {
    $('.nav_first').addClass('bg-white')
  }

  $(window).scroll(function (event) {
    didScroll = true
    return false
  })

  setInterval(function () {
    if (didScroll) {
      hasScrolled()
      didScroll = false
    }
  }, 100)

  function hasScrolled () {
    st = $(this).scrollTop()

    if (Math.abs(lastScrollTop - st) <= delta)
      return
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.nav_first').removeClass('nav-down').addClass('nav-up')
      if ($('.nav_first > button').attr('aria-expanded')) {
        $('#main_menu').collapse('hide')
      }
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.nav_first').removeClass('nav-up').addClass('nav-down')
      }
    }
    if (st == 0) {
      $('.nav_first').removeClass('bg-white')
    }else {
      $('.nav_first').addClass('bg-white')
    }
    lastScrollTop = st
  }
})
