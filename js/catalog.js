window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.accordion__link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault()
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.artists__bio').forEach(artist => {
        artist.classList.remove('artists__bio-active')
      })
      
      document.querySelector(`[data-target=${path}]`).classList.add('artists__bio-active')

    })
  })
})