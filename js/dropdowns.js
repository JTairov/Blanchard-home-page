let inervalId;

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.drop__btn').forEach(function(dropBtn) {
    dropBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      const currentList = document.querySelector(`[data-target=${path}]`)
      const currentBtn = document.querySelector(`[data-path=${path}]`)

      if (!currentList.classList.contains('active') && !currentBtn.classList.contains('active')) {
        document.querySelectorAll('.drop__list').forEach(function(element) {
          element.classList.remove('active')
        })
        document.querySelectorAll('.drop__btn').forEach(function(element) {
          element.classList.remove('active')
        })

        intervalId = setTimeout(() => {
          currentList.classList.add('active')
          currentBtn.classList.add('active')
        }, 0)
      }

      if (currentList.classList.contains('active') && currentBtn.classList.contains('active')) {
        clearTimeout(intervalId)
        setTimeout(() => {
          currentList.classList.remove('active')
          currentBtn.classList.remove('active')
        }, 0)
      }
    })
  })
})

window.onclick = function(event) {
  if (!event.target.matches('.drop__btn')) {

    let dropdowns = document.getElementsByClassName("drop__list")
    let dropBtns = document.querySelectorAll('.drop__btn')
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      let clickedBtns = dropBtns[i]
      if (openDropdown.classList.contains('active') && clickedBtns.classList.contains('active')) {
        openDropdown.classList.remove('active')
        clickedBtns.classList.remove('active')
      }
    }
  }
}