
//run when window loads
window.addEventListener('load', () => {
    
    //
    const videoplayer = document.querySelector(".video")
    const cart = document.getElementById("cart")
    const video = document.getElementById("video")
    const play = document.getElementById("play-btn")
    const modal = document.querySelector("#modal")
    const modal_content = document.getElementById("modal-content")
    const request_dish = document.querySelector(".request-dish")
    const close_modal = document.getElementById("close-modal")
    const body = document.getElementsByTagName("BODY")[0]



    const data = [
        {
            img_url: `Assignment Assest/Assets/images/pexels-mumma-oyens-8799602 1.png`,
            title: `Chicken gravy`,
            price: 20,
            rating: 3.5,
            delivery: `45-60`,
            discount: 20
        },
        {
            img_url: `Assignment Assest/Assets/images/pexels-omar-mahmood-106343 1.png`,
            title: `Barbeque Chicken`,
            price: 120,
            rating: 4.5,
            delivery: `45-60`,
            discount: 0
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_33GPuoFI7v8.png`,
            title: `Bread pizza`,
            price: 200,
            rating: 4.9,
            delivery: `45-60`,
            discount: 20
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_60nzTP7_hMQ.png`,
            title: `Spinach pizza`,
            price: 29,
            rating: 4.9,
            delivery: `45-60`,
            discount: 0
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_CbNAuxSZTFo.png`,
            title: `Italian pizza`,
            price: 15,
            rating: 4.9,
            delivery: `45-60`,
            discount: 20
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_MqT0asuoIcU.png`,
            title: `Cheeze pizza`,
            price: 30,
            rating: 4.9,
            delivery: `45-60`,
            discount: 0
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_nP11TkjxJ7s.png`,
            title: `Classic pizza`,
            price: 90,
            rating: 4.9,
            delivery: `45-60`,
            discount: 20
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_sejqj6Eaqe8.png`,
            title: `veggie pizza`,
            price: 120,
            rating: 4.9,
            delivery: `45-60`,
            discount: 0
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_UxRhrU8fPHQ.png`,
            title: `Double cheeze pizza`,
            price: 65,
            rating: 4.9,
            delivery: `45-60`,
            discount: 20
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_Y6OgisiGBjM.png`,
            title: `Home made pizza `,
            price: 100,
            rating: 4.9,
            delivery: `45-60`,
            discount: 0
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_sejqj6Eaqe8.png`,
            title: `Home made `,
            price: 55,
            rating: 4.9,
            delivery: `45-60`,
            discount: 20
        },
        {
            img_url: `Assignment Assest/Assets/images/unsplash_33GPuoFI7v8.png`,
            title: `Home made `,
            price: 135,
            rating: 4.9,
            delivery: `45-60`,
            discount: 0
        },
    ]

    // video player
    videoplayer.addEventListener('click', () => {
        //if video is paused, play 
        if (video.paused) {
            video.play()
            play.innerHTML = ""     //remove the button
        }
        //pause the video if video is playing
        else {
            video.pause()
            play.innerHTML = `<img style="width:120px;height:120px" src="Assignment Assest/Assets/icons/play.svg" alt="play-btn">`
        }
    })

    cart.addEventListener('click', () => {
        modal.classList.add("active")
        modal_content.style.height='1336px'
        modal_content.innerHTML = `<i class="fa-solid fa-bag-shopping fa-9x"></i>
    <p class="note-title">Cart is Empty</p>
    <p class="note">Add some items to the cart to checkout</p>`
        body.classList.add("freeze")

    })
    request_dish.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
        modal.classList.add("active")
        modal_content.style.height='650px'
        close_modal.style.display="none"
        modal_content.innerHTML = `<div class="request-form-container flex flex-col flex-align-center flex-justify-start"><p>Request a Dish</p><form  class="request-form flex flex-col flex-align-center flex-justify-between">
    <div>
    <div class="form-item flex flex-col">
        <label for="item-name">Name:</label>
        <input id ="item-name" class="input-style" type="text" placeholder="Your e-mail">
    </div>
    <div class="form-item flex flex-col">
    <label for="item-name">Upload an Image:</label>
        <input id ="item-name" class="input-style" type="text" placeholder="Your e-mail">
    </div>
    </div>

    <div style="width:50%" class="button-group flex flex-align-center flex-justify-around "><button id="cancel-btn" class="input-style" onclick="cancel()">cancel</button><button class=" green-btn input-style">Submit</button></div></form></div> `
        body.classList.add("freeze")

    })

    close_modal.addEventListener('click', () => {
        modal.classList.remove("active")
        modal_content.innerHTML = ``
        body.classList.remove("freeze")
    })






    const container = document.getElementById("card-container")
    let res = ''
    for (let i = 0; i < data.length; i++) {
        res += `<div class="card">
    <div class="card-img">
        <img src="${data[i].img_url}" alt="${data[i].title}" height="250px" width="100%">
    </div>
    <div class="card-body flex flex-col flex-align-center flex-justify-evenly">
        <div class="title-wrapper flex flex-align-center flex-justify-between">
           <span>${data[i].title}</span>
           <span>&#8377 ${data[i].price}</span>
        </div>
        <div class="desc-wrapper flex flex-align-start flex-justify-between">
                                <div class="status-wrapper flex flex-align-start flex-justify-between">
                                    <div class="rating-wrapper">
                                        <img style="width: 20px;height: 20px;"src="Assignment Assest/Assets/icons/star.svg" alt="">
                                        <span>${data[i].rating}</span>
                                    </div>
                                    <div class="time-wrapper flex flex-align-center flex-justify-center">
                                        <span class="time">50-79 min</span>
                                    </div>
                                </div>
                                <div class="add-icon flex flex-align-center">
                                    
                                    
                                    <img style="width: 30px;height: 30px;"src="Assignment Assest/Assets/icons/plus.svg" alt="">
                                    
                                </div>
                            </div>
    </div>`
        if (data[i].discount > 0) {
            res += `<div class="offer"><span>${data[i].discount}%<span></div>`
        }
        res += `</div>`
    }
    container.innerHTML = res
})