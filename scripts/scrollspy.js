const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".side-nav a[href^='#']");

function setActiveLink(id) {
  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${id}`) {
      link.classList.add("active");
    }
  });
}

function updateActiveLinkOnScroll() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.35;
  const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;

  if (isAtBottom) {
    const lastSection = sections[sections.length - 1];
    setActiveLink(lastSection.id);
    return;
  }

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      setActiveLink(section.id);
    }
  });
}

window.addEventListener("scroll", updateActiveLinkOnScroll);
updateActiveLinkOnScroll();