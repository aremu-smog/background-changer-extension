const redButton = document.querySelector("#redButton")

const colors = document.querySelectorAll(".color")

const colorPicker = document.querySelector("#colorPicker")

const changeBackgroundColor = (bgColor = "red") => {
	const allElementsOnPage = document.querySelectorAll("*")

	allElementsOnPage.forEach(element => {
		element.style.backgroundColor = bgColor
	})
}

colorPicker.addEventListener("change", async e => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

	await chrome.scripting.executeScript({
		target: { tabId: tab.id },

		func: changeBackgroundColor,
		args: [e.target.value],
	})
})

colors.forEach(colorButton => {
	let theColor = colorButton.getAttribute("color")

	colorButton.addEventListener("click", async () => {
		alert(theColor)
		let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

		await chrome.scripting.executeScript({
			target: { tabId: tab.id },

			func: changeBackgroundColor,
			args: [theColor],
		})
	})
})
