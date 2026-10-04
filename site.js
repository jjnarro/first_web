document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-target]");
  if (!button) return;

  const prompt = document.getElementById(button.dataset.copyTarget);
  if (!prompt) return;
  const originalLabel = button.textContent;

  try {
    await navigator.clipboard.writeText(prompt.innerText);
    button.textContent = "Copied";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(prompt);
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = "Text selected";
  }

  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1800);
});
