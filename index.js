Vue.component("planet-item", {

    data: function() {
        return {

        }
    },
    template: `
    <div class="col-md-3 " >
    <transition name="bounce">
        <div class="card animated" v-if="load" v-show="show">
        <div class="card-header">
        <img class="card-img-top" v-bind:src="image" alt="">
        </div>
        <div class="card-body">
            <h4 class="card-title">{{title}}</h4>
            <p class="card-text">{{text}}</p>
        </div>
        <div class="card-footer text-muted">
            Extracted from <span class="text-danger"> THE SPACE BOOK </span>
            by Jim	Bell
        </div>
       </div>
    </transition>
    </div>
    `,
    props: ["title", "text", "image","show","load"]
});

var app = new Vue({
    el: "#app",
    data: {
        apptitle: " Conditional Rendering",
        planets: {
            Mercury: {
                name: "Mercury",
                text: " Mercury is the closest in of the so-called terrestrial planets, with a diameter of 3,032 miles. Mercury orbits the Sun at an average distance of only 0.38 astronomical units.",
                image: "images/Mercury.jpg",
                show: true,
                load: true

            },
            Venus: {
                name: "Venus",
                text:" Venus is only about 5 percent smaller than Earth and has about the same density—meaning that it is essentially a rocky, terrestrial planet very much like our own.",
                image: "images/Venus.jpg",
                show: true,
                load: true
            },
            Earth: {
                name: "Earth",
                text: "Earth is the only place in the universe where we know that life exists. Indeed, evidence from the fossil and geochemical record is that life on earth began almost as soon as it could, when the Late Heavy Bombardment of asteroids and meteorites quieted down.",
                image: "images/Earth.jpg",
                show: true,
                load: true
            },
            Mars: {
                name: "Mars",
                text: "Mars is a small planet, about half the diameter of Earth and only about 15 percent of its volume. For further reference, the surface area of Mars is about the same as the surface area of all of the continents on Earth.",
                image: "images/Mars.jpg",
                show: true,
                load: true
            }
        }
    },


});