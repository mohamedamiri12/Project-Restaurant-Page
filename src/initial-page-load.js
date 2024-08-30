import contentImage from "./images/content-image.png";
import pizzaImage from "./images/image.png";

const displayControler = () => {
    const content = document.querySelector(".content")
    
    // left content creation
    const left_content = document.createElement("div")
    left_content.classList.add("left-content")

    const heading = document.createElement('h1');
    heading.innerHTML = '<span class="orange">Food</span> <br> & Good <br><span class="orange">Moments</span>';


    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Eat the food you dream about at affordable prices. No<br> need to come to us just call us. We are providing and<br> delivering you the yummy foods.</p>'
    
    const button = document.createElement("button")
    button.innerText = "View Menu"
    button.classList.add("view-menu")

    left_content.append(heading,paragraph,button)
    content.appendChild(left_content)

    //right content
    const right_content = document.createElement("div")
    right_content.classList.add("right-content")

    
    const img_one =  document.createElement("img")
    img_one.classList.add("content-image")
    img_one.src = contentImage

    const img_two =  document.createElement("img")
    img_two.classList.add("pizza-image")
    img_two.src = pizzaImage

    right_content.append(img_one,img_two)
    content.appendChild(right_content)
}

export {displayControler}