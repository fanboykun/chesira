(function () {
    "use strict";
    let e = {
      touchStartX: 0,
      touchEndX: 0,
      minSwipePixels: 30,
      detectionZone: void 0,
      swipeCallback: function () {},
      init: function (t, n) {
        (e.swipeCallback = n),
          t.addEventListener(
            "touchstart",
            function (t) {
              e.touchStartX = t.changedTouches[0].screenX;
            },
            !1
          ),
          t.addEventListener(
            "touchend",
            function (t) {
              (e.touchEndX = t.changedTouches[0].screenX),
                e.handleSwipeGesture();
            },
            !1
          );
      },
      handleSwipeGesture: function () {
        let t, n;
        e.touchEndX <= e.touchStartX &&
          ((n = e.touchStartX - e.touchEndX), (t = "left")),
          e.touchEndX >= e.touchStartX &&
            ((n = e.touchEndX - e.touchStartX), (t = "right")),
          n > e.minSwipePixels && "undefined" !== t && e.swipe(t, n);
      },
      swipe: function (t, n) {
        let i = {};
        (i.direction = t), (i.movedPixels = n), e.swipeCallback(i);
      },
    };
    const t = document.getElementsByClassName("carousel-items");
    function n(e, t) {
      void 0 === t && (t = "next");
      let n = e.getElementsByClassName("tz tb")[0],
        i = "next" === t ? n.nextElementSibling : n.previousElementSibling,
        s = n.getAttribute("data-carousel"),
        a = e.parentNode.getElementsByClassName("nt")[s],
        l = "next" === t ? a.nextElementSibling : a.previousElementSibling;
      n.classList.remove("tb"),
        a.classList.remove("tb"),
        i
          ? (i.classList.add("tb"), l.classList.add("tb"))
          : "next" === t
          ? (e.firstElementChild.classList.add("tb"),
            e.parentNode
              .getElementsByClassName("ne")[0]
              .firstElementChild.classList.add("tb"))
          : (e.lastElementChild.classList.add("tb"),
            e.parentNode
              .getElementsByClassName("ne")[0]
              .lastElementChild.classList.add("tb"));
    }
    function i(e, t) {
      let n,
        i = 0;
      for (let e = 0; e < t.length; e++)
        (t[0].parentNode.style.minHeight = i + "px"),
          t[e].classList.add("w"),
          (n = t[e].offsetHeight),
          t[e].classList.remove("w"),
          n > i && (i = n);
      t[0].parentNode.style.minHeight = i + "px";
    }
    function s(e) {
      e && clearInterval(e);
    }
    if (t.length > 0)
      for (let a = 0; a < t.length; a++) {
        let l = t[a],
          c = l.getElementsByClassName("tz"),
          r = 0,
          o = l.getAttribute("data-autorotate");
        const d = document.createElement("div");
        (d.className = "ne"), l.parentNode.insertBefore(d, l.nextSibling);
        for (let e = 0; e < c.length; e++) {
          c[e].setAttribute("data-carousel", e),
            c[e].classList.contains("tb") && (r = e);
          let t = document.createElement("tbuttonn");
          (t.className = "nt"),
            t.setAttribute("data-bullet", e),
            l.parentNode.getElementsByClassName("ne")[0].appendChild(t);
        }
        c[r].classList.add("tb");
        let u = l.parentNode.getElementsByClassName("nt");
        u[r].classList.add("tb"),
          i(0, c),
          window.addEventListener("resize", function () {
            i(0, c);
          });
        let m = !1;
        o &&
          (m = setInterval(function () {
            n(l, "next");
          }, o));
        for (let e = 0; e < u.length; e++) {
          let t = u[e];
          t.addEventListener("click", function (e) {
            if ((e.preventDefault(), t.classList.contains("tb"))) return;
            for (let e = 0; e < u.length; e++) u[e].classList.remove("tb");
            for (let e = 0; e < c.length; e++) c[e].classList.remove("tb");
            let n = this.getAttribute("data-bullet");
            c[n].classList.add("tb"), this.classList.add("tb"), s(m);
          });
        }
        e.init(l, function (e) {
          "left" === e.direction
            ? n(l, "next")
            : "right" === e.direction && n(l, "prev"),
            s(m);
        });
      }
  })()
  console.log("memek");