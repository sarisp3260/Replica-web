let items = document.querySelectorAll(".itemslink");

items.forEach(itemslink => {
    itemslink.addEventListener("click", (e) =>{
        items.forEach(itemslink => {
            itemslink.classList = "itemslink"
        })
        console.log(e)
        e.target.classList.toggle(("active"))
    })
})