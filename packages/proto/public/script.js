// JavaScript to handle dark mode toggle
document.querySelector("label").addEventListener("change", (event) => {
    if (event.target.id === "dark-mode-toggle") {
        // Relay custom event
        const darkModeEvent = new CustomEvent("darkmode:toggle", {
            detail: { isChecked: event.target.checked }
        });
        document.body.dispatchEvent(darkModeEvent);

        // Stop propagation of the original change event
        event.stopPropagation();
    }
});

// Listen for the custom 'darkmode:toggle' event on the body
document.body.addEventListener("darkmode:toggle", (event) => {
    if (event.detail.isChecked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});
