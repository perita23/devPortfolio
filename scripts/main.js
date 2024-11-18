document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.showItem').forEach(item => {
        observer.observe(item);
    });
});

function splitTitle() {
    const title = document.getElementById("myProjectsTitle").textContent;
    let charList = title.trim().split("")
    const titleContainer = document.querySelector("#myProjectsTitle");
    document.getElementById("myProjectsTitle").textContent = ""
    charList.forEach(
        (char, i, array) => {
            const charEl = document.createElement("span");
            charEl.textContent = char;
            charEl.style.fontWeight = (i * (900 / array.length));
            titleContainer.appendChild(charEl);
        }
    )
    console.log(charList)
}
splitTitle()