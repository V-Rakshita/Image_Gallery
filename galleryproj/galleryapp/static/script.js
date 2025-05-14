function openModal(image) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = image.src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
