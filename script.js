function togglebg() {
  const html = document.documentElement
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add("light")
  // }
  // ou
  html.classList.toggle("light")

  const avatar = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    avatar.setAttribute("src", "./assets/avatar-light.png")
    avatar.setAttribute("alt", "Avatar Light")
  } else {
    avatar.setAttribute("src", "./assets/avatar.png")
    avatar.setAttribute("alt", "Avatar")
  }
}
