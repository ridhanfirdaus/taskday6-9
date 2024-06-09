const testimonial = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();


    xhr.open("GET", "https://api.npoint.io/ab3997cbef9d60e28cfa", true);


    xhr.onload = function () {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
        }else{
            reject("error data load");
        }
    };
    xhr.onerror = function() {
        reject("404 not found");
    };

    xhr.send();
});

async function showTestimonials() {
    try {
        const response = await testimonial;
        let testimonialHtml = ``;

        response.forEach((item) => {
            testimonialHtml +=`<div class="testimonial">
            <img src="${item.image}" alt="testimonial">
            <p class="describe">${item.content}</p>
            <p class="author">${item.author}</p>
            <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
            </div>`;
        });

        document.getElementById("testimonials").innerHTML = testimonialHtml;
    } catch (error) {
        console.log(error);
    }
}
showTestimonials();

async function filterTestimonial(rating){
    try{
        const response = await testimonial;
        let testimonialHtml = ``;

        const dataFilter = response.filter((data) => (data.rating === rating));
        if (dataFilter.length === 0) {
            testimonialHtml = `<h1> Data not Found!</h1>`;
        } else {
            dataFilter.forEach((item) => {
                testimonialHtml += `<div class="testimonial">
    <img src="${item.image}" alt="testimonial">
    <p class="describe">${item.content}</p>
    <p class="author">${item.author}</p>
    <p class="author">${item.rating}<i class="fa-solid fa-star"></i></p>
    </div>`;
            });
        }
    document.getElementById("testimonials").innerHTML = testimonialHtml;
    } catch (error) {
        console.log(error);
    }
}