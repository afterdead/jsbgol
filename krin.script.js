$(function () {
  // scroll functionz
  // Hide Header on on scroll down
  var didScroll
  var delta = 5
  var navbarHeight = $('nav').height()
  var st = $(this).scrollTop()
  var lastScrollTop = st
  if (st !== 0) {
    $('nav').removeClass('nav-down').addClass('nav-up')
  }
  if (st == 0) {
    $('nav').removeClass('bg-light')
  }else {
    $('nav').addClass('bg-light')
  }

  $(window).scroll(function (event) {
    didScroll = true
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
      $('nav').removeClass('nav-down').addClass('nav-up')
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('nav').removeClass('nav-up').addClass('nav-down')
      }
    }
    if (st == 0) {
      $('nav').removeClass('bg-light')
    }else {
      $('nav').addClass('bg-light')
    }
    lastScrollTop = st
  }
})
