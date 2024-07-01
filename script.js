/**
 * untuk membbuat link bisa di copy
 */

const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {

    action.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(action.parentElement.getAttribute("href"));
        alert("Link copy");

/**
 * Untuk memunculkan toaster notif
 */

        document.getElementById("toast").innerHTML = `
            <div class="toast-container">
                <p>✅ Link <strong> succeed copy</p>
            </div>
        `;

/**
 * Untuk menghilangkan toast notif
 */

    setTimeout(() => {
        document
        .querySelector("#toast .toast-container")
        .classList.add("toast-gone");
        }, 300);

    setTimeout(() => {
        document
        .querySelector("#toast .toast-container").remove();
    }, 2000);
    });
});

/**
 * untuk mengganti item sosmed
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill");
    });

    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph");
    });
});

/**
 * Animation bg text
 */

document.addEventListener("scroll", (e) => {
    document.querySelector(
        ".bg-text-animation"
    ).style.transform = `translateX(${window.scrollY / 5}px)`;
});