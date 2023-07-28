function handleShowModal() {
    const modalElement = document.getElementById("modal-render");
    const RenderAutoReset = modalElement.querySelector("#render-auto-cate");
    const FormReset = modalElement.querySelector("form");

    if (RenderAutoReset && FormReset) {
        RenderAutoReset.innerHTML = "";
        FormReset.reset();
    }
}
