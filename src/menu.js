import pizzaOne from "./images/pizza1.jpg"
import pizzaTwo from "./images/pizza2.jpg"
import pizzaThree from "./images/pizza3.jpg"
import pizzaFour from "./images/pizza4.jpg"

const displayMenu = () => {
    const content = document.querySelector(".content")

    const menu = document.createElement("div")
    menu.classList.add("menu")

    const title = document.createElement("h1")
    title.classList.add("menu-title")
    title.innerText = "Our Menu"
    
    const food_menu = document.createElement("div")
    food_menu.classList.add("food-menu")

    
    const foodone = document.createElement("div")
    foodone.classList.add("food")
    const image_one = document.createElement("img")
    image_one.src = pizzaOne
    const button_one = document.createElement("button")
    button_one.innerText = "ORDER"
    button_one.classList.add("order")
    const heading_one = document.createElement("h3")
    heading_one.innerText = "Beef Tex-Mex"
    const paragraph_one = document.createElement("p")
    paragraph_one.innerText = "Pizza Sauce, Mozzarella, Onions, Green Peppers, Beef, Jalapeno and Tomatoes"
    foodone.append(image_one,button_one,heading_one,paragraph_one)

    const foodtwo = document.createElement("div")
    foodtwo.classList.add("food")
    const image_two = document.createElement("img")
    image_two.src = pizzaTwo
    const button_two = document.createElement("button")
    button_two.innerText = "ORDER"
    button_two.classList.add("order")
    const heading_two = document.createElement("h3")
    heading_two.innerText = "Chicken Tex-Mex"
    const paragraph_two = document.createElement("p")
    paragraph_two.innerText = "Pizza Sauce, Mozzarella, Onions, Green Peppers, Black Olives, Grilled Chicken Breast, Jalapeno & Oregano"
    foodtwo.append(image_two,button_two,heading_two,paragraph_two)


    const foodthree = document.createElement("div")
    foodthree.classList.add("food")
    const image_three = document.createElement("img")
    image_three.src = pizzaThree
    const button_three = document.createElement("button")
    button_three.innerText = "ORDER"
    button_three.classList.add("order")
    const heading_three = document.createElement("h3")
    heading_three.innerText = "American"
    const paragraph_three = document.createElement("p")
    paragraph_three.innerText = "Pizza Sauce, Mozzarella,Beef Pepperoni, Beef, Mushrooms and Second layer of Mozzarella."
    foodthree.append(image_three,button_three,heading_three,paragraph_three)

    const foodfour = document.createElement("div")
    foodfour.classList.add("food")
    const image_four = document.createElement("img")
    image_four.src = pizzaFour
    const button_four = document.createElement("button")
    button_four.innerText = "ORDER"
    button_four.classList.add("order")
    const heading_four = document.createElement("h3")
    heading_four.innerText = "Veggie"
    const paragraph_four = document.createElement("p")
    paragraph_four.innerText = "Pizza Sauce, Mozzarella, Onions, Green Peppers, Mushrooms & Black Olives"
    foodfour.append(image_four,button_four,heading_four,paragraph_four)

    food_menu.append(foodone,foodtwo,foodthree,foodfour)

    menu.append(title,food_menu)
    content.append(menu)
}

export {displayMenu} ;