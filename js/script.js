const navToggle = document.querySelector("#navToggle");
const siteNav = document.querySelector("#siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-login-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const redirectTarget = form.getAttribute("data-redirect");
    const roleName = form.getAttribute("data-role-name") || "User";
    const status = form.querySelector("[data-login-status]");

    if (status) {
      status.textContent = `${roleName} login verified. Opening dashboard...`;
    }

    window.setTimeout(() => {
      if (redirectTarget) {
        window.location.href = redirectTarget;
      }
    }, 700);
  });
});
