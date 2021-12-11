const app = new Vue({
    el: "#app",
    data() {
        return {
            galleryLeftFrames: document.getElementsByClassName("left-image-container"),
            galleryRightFrames: document.getElementsByClassName("right-image-container"),
            galleryIndex: 0
        }
    },

    methods: {
        galleryNavLeft() {
            if (this.galleryIndex == 0) return;
            this.galleryLeftFrames[this.galleryIndex].classList.add("hidden");
            this.galleryRightFrames[this.galleryIndex].classList.add("hidden");
            this.galleryIndex--;
            this.galleryLeftFrames[this.galleryIndex].classList.remove("hidden");
            this.galleryRightFrames[this.galleryIndex].classList.remove("hidden")
        },

        galleryNavRight() {
            if (this.galleryIndex + 2 > this.galleryLeftFrames.length) return;
            this.galleryLeftFrames[this.galleryIndex].classList.add("hidden");
            this.galleryRightFrames[this.galleryIndex].classList.add("hidden");
            this.galleryIndex++;
            this.galleryLeftFrames[this.galleryIndex].classList.remove("hidden");
            this.galleryRightFrames[this.galleryIndex].classList.remove("hidden")
        }
    }
})