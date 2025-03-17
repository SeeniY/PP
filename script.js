/**
 * Alterna entre modo oscuro y claro.
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  /**
   * Cambia la sección visible en el slider.
   * @param {number} index - Índice de la sección a mostrar.
   */
  function changeSlide(index) {
    const sections = document.querySelectorAll('.seccion-informacion');
    sections.forEach((section, i) => {
      section.classList.toggle('active', i === index);
    });
  }
  