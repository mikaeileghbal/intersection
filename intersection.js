

let options = {
    root: null,
    rootMargin: "0px",
    threshhold: 1
};

let callback = function (entries, observer) {
    entries.forEach((entry) => {
        console.log(entry.target);

        if (!entry.isIntersecting) {
            //if (entry.intersectionRatio > 0.5) {

            entry.target.classList.remove("is-visible");
        }
        else {

            entry.target.classList.add("is-visible");
        }

    });

};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelectorAll(".title");

target.forEach((element) => {
    observer.observe(element);
}
);


