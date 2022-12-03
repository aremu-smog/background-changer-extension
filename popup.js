function doomsDay() {
  const colorPalette = document.querySelector(".color");

  //   for (let i = 0; i < colorPalette.length; i++) {
  //     const element = colorPalette[i];
  colorPalette.addEventListener("click", () => {
    document.body.style.backgroundColor =
      window.getComputedStyle(colorPalette).backgroundColor;
  });
  //   }
}

(async function nukeIt() {
  let [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: doomsDay,
  });
})();
