document.getElementById("read-more").addEventListener("click", function () {
    alert("Thank you for your interest! More content will be added soon.");
});
const testimonials = [
    {
        name: "Margaret Jane, Happy Customer",
        text: "Furnifique made my dream living room a reality! The craftsmanship and attention to detail in their furniture are unmatched. Every guest who visits compliments the quality and style. Highly recommended!",
        image: "client.jpg"
    },
    {
        name: "Charlotte Rose, Interior Designer",
        text: "I was blown away by the modern designs and eco-friendly options Furnifique offers. The customer service was excellent, and my dining set arrived on time and in perfect condition. They’ve earned a lifelong customer!",
        image: "client2.jpg"
    },
    {
        name: "Sophia Belle, Homeowner",
        text: "From browsing to delivery, my experience with Furnifique was seamless. The furniture is not only beautiful but incredibly comfortable. It’s amazing how it transformed my home. Thank you, Furnifique!",
        image: "client3.jpg"
    }
];

let currentIndex = 0;

function updateTestimonial(index) {
    const testimonial = testimonials[index];
    document.getElementById("name").innerText = testimonial.name;
    document.getElementById("text").innerText = testimonial.text;
    document.querySelector(".testimonial img").src = testimonial.image;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
}

// Initialize the first testimonial
updateTestimonial(currentIndex);


//7
function initMap() {
  const location = { lat: 13.0827, lng: 80.2707 }; // Coordinates for Chennai, Tamil Nadu
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  new google.maps.Marker({
    position: location,
    map: map,
  });
}

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});

//8

