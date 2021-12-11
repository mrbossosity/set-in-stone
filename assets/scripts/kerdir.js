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

document.querySelector("#knrm").addEventListener('click', function() {
    window.open("/assets/images/shapur triumph naqsh e rostam.jpg")
})

document.querySelector("#kkz").addEventListener('click', function() {
    window.open("/assets/images/kartir at ka'baye zartosht.jpg")
})

document.querySelector("#bahram").addEventListener('click', function() {
    window.open("/assets/images/bahram ii sar mashhad.jpg")
})

document.querySelector("#ksm").addEventListener('click', function() {
    window.open("/assets/images/kartir sar mashhad.jpg")
})