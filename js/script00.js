window.addEventListener('scroll', () => {
  const top = document.getElementById('scroll-up');
  let scrolled = window.pageYOffset;

  if (scrolled >= 900) {
    top.style.display = 'block';
  } else {
    top.style.display = 'none';
  }

  top.onclick = function () {
    window.scrollTo(0, 0);
    top.style.display = 'none';
  };
});
let animItems = document.querySelectorAll('.anim-items');

if (animItems.length) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

function togleMenu(el) {
  el.closest('header').classList.toggle('active');
}

$(function () {
  function update() {
    var Now = new Date(),
        Finish = new Date();
    Finish.setHours(23);
    Finish.setMinutes(59);
    Finish.setSeconds(59);

    if (Now.getHours() === 23 && Now.getMinutes() === 59 && Now.getSeconds === 59) {
      Finish.setDate(Finish.getDate() + 1);
    }

    var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
    var hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    var min = Math.floor(sec / 60);
    sec -= min * 60;
    $(".timer .hours").text(pad(hrs));
    $(".timer .minutes").text(pad(min));
    $(".timer .seconds").text(pad(sec));
    setTimeout(update, 200);
  }

  function pad(s) {
    return ('00' + s).substr(-2);
  }

  update();
});
$(document).ready(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });
});
//# sourceMappingURL=script00.js.map
