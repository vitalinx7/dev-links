function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
    //get img tag
    const img = document.querySelector("#profile img")

    //img replace avatar
    if (html.classList.contains("light")) {
      //if light mode add dark image
      img.setAttribute("src", "./assets/avatar-dark.jpg")
    }
    else {
      //if dark mode keep normal bright image
      img.setAttribute("src", "./assets/avatar-light.jpg")
    }   
    }
