const app = new Vue({
    el: "#app",
    data() {
        return {
            galleryFrames: document.getElementsByClassName("gallery-image-container"),
            galleryIndex: 0
        }
    },

    methods: {
        galleryNavLeft() {
            if (this.galleryIndex == 0) return;
            this.galleryFrames[this.galleryIndex].classList.add("hidden");
            this.galleryIndex--;
            this.galleryFrames[this.galleryIndex].classList.remove("hidden")
        },

        galleryNavRight() {
            if (this.galleryIndex + 2 > this.galleryFrames.length) return;
            this.galleryFrames[this.galleryIndex].classList.add("hidden");
            this.galleryIndex++;
            this.galleryFrames[this.galleryIndex].classList.remove("hidden")
        }
    }
})

document.querySelector("#ptww").addEventListener('click', function() {
    window.open("/assets/images/paikuli tower west wall.jpg")
})

document.querySelector("#smp").addEventListener('click', function() {
    window.open("/assets/images/sulaymaniyah museum preparations.jpg")
})

document.querySelector("#pb15").addEventListener('click', function() {
    window.open("/assets/images/paikuli block b15.jpg")
})

document.querySelector("#pbf1").addEventListener('click', function() {
    window.open("/assets/images/paikuli block f1.jpg")
})