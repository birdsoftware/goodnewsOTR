const siteShare = {
  title: "Good News OTR",
  text: "Daily devotionals, prayer, and Bible study from Good News OTR.",
  url: "https://goodnewsotr.netlify.app/"
};

function setShareButtonText(button, text) {
  const original = button.dataset.originalText || button.textContent;
  button.dataset.originalText = original;
  button.textContent = text;
  window.setTimeout(() => {
    button.textContent = original;
  }, 1800);
}

async function shareSite(button) {
  try {
    if (navigator.share) {
      await navigator.share(siteShare);
      setShareButtonText(button, "Shared");
      return;
    }

    await navigator.clipboard.writeText(siteShare.url);
    setShareButtonText(button, "Copied");
  } catch (error) {
    if (error && error.name === "AbortError") return;
    setShareButtonText(button, "Copy link");
  }
}

document.querySelectorAll("[data-share-site]").forEach(button => {
  button.addEventListener("click", () => shareSite(button));
});
