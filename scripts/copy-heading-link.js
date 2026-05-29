async function copyHeadingLink(id, button) {
  const currentUrl = window.location.href.split("#")[0];
  const toast = button.closest(".copy-ui").querySelector(".copy-toast");

  try {
    await navigator.clipboard.writeText(currentUrl + "#" + id);
    toast.classList.add("is-visible");

    setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 1500);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}