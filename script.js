const h1 = document.querySelector('h1');

if (h1) {
    h1.innerHTML = h1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    document.addEventListener('mousemove', (e) => {
        const rect = h1.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        h1.style.setProperty('--x', `${x}px`);
        h1.style.setProperty('--y', `${y}px`);
    });
}