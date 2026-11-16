document.addEventListener("DOMContentLoaded", () => {
    const btt = document.getElementById("backToTop");

    if (!btt) {
        return;
    }

    // Back to Top Logic: toggle on rAF so scroll handling stays cheap.
    let ticking = false;
    const update = () => {
        btt.classList.toggle("is-visible", window.scrollY > 500);
        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (!ticking) {
            ticking = true;
            window.requestAnimationFrame(update);
        }
    }, { passive: true });

    btt.addEventListener("click", () => {
        window.scrollTo({ top: 0 });
    });

    update();
});
