function setTitle(newTitle) {
  const titleElement = document.getElementById("title");
  titleElement.textContent = newTitle;
  return `Title has been updated to: "${newTitle}"`;
}

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  return `Background color has been updated to: "${color}"`;
}

function setFontColor(color) {
  document.body.style.color = color;
  return `Font color has been updated to: "${color}"`;
}

function setTheme(theme) {
  document.body.style.backgroundColor = "";
  document.body.style.color = "";
  document.body.classList.remove("light", "dark", "salmon");

  const validThemes = ["light", "dark", "salmon"];
  if (validThemes.includes(theme)) {
    document.body.classList.add(theme);
    return `Theme has been set to: "${theme}"`;
  } else {
    return `Theme "${theme}" is not valid. Please use "light", "dark", or "salmon".`;
  }
}

// Make the functions accessible from the console
window.setTitle = setTitle;
window.setBackgroundColor = setBackgroundColor;
window.setFontColor = setFontColor;
window.setTheme = setTheme;

