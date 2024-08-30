import firstPicture from "./images/about.jpg"
import secondPicture from "./images/about2.jpg"

const aboutDisplay = () => {
    const content = document.querySelector(".content")

    const about = document.createElement("div")
    about.classList.add("about")

    const image_one = document.createElement("img")
    image_one.src = firstPicture
    image_one.classList.add("about-image")

    const image_two = document.createElement("img")
    image_two.src = secondPicture
    image_two.classList.add("about-image")

    const paragraph = document.createElement("p")
    paragraph.classList.add("about-paragraph")
    paragraph.innerText = "With a prime location in the heart of the red town in Gueliz, the Mamma Mia puts the Italian gastronomy culture in the forefront. Thanks to our experienced cooks, you will discover the different regions of Italy in Morocco. Your restaurant Mammamia offers you fresh pastas, pizzas, desserts and a large choice of moroccan, french and italian wines. In its classic trattoria style, you will enjoy the best Italian dishes in Marrakech."

    about.append(image_one,image_two,paragraph)
    content.append(about)
}

export { aboutDisplay }