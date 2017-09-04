jQuery(function () {
  jQuery('.carousel').carousel()

  jQuery('.nav_first .nav-item').click(function (e) {
    e.preventDefault()
    jQuery('.nav-item').removeClass('active')
    jQuery(this).addClass('active')
  })
  // scroll functionz
  // Hide Header on on scroll down
  var didScroll
  var delta = 5
  var navbarHeight = jQuery('.nav_first').height()
  var st = jQuery(this).scrollTop()
  var lastScrollTop = st

  if (st == 0) {
    jQuery('.nav_first').removeClass('bg-white')
  }else {
    jQuery('.nav_first').addClass('bg-white')
  }

  jQuery(window).scroll(function (event) {
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
    st = jQuery(this).scrollTop()

    if (Math.abs(lastScrollTop - st) <= delta)
      return
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      jQuery('.nav_first').removeClass('nav-down').addClass('nav-up')
      if (jQuery('.nav_first > button').attr('aria-expanded')) {
        jQuery('#main_menu').collapse('hide')
      }
    } else {
      // Scroll Up
      if (st + jQuery(window).height() < jQuery(document).height()) {
        jQuery('.nav_first').removeClass('nav-up').addClass('nav-down')
      }
    }
    if (st == 0) {
      jQuery('.nav_first').removeClass('bg-white')
    }else {
      jQuery('.nav_first').addClass('bg-white')
    }
    lastScrollTop = st
  }
})
