/* function toggleAccordion(event) {
    let element = event.target;
    while (!element.classList.contains('accordion-button')) {
      element = element.parentNode;
      if (element.nodeName === 'BODY') {
        return;
      }
    }
    const content = element.nextElementSibling;
    content.classList.toggle('hidden');
    const icon = element.querySelector('.accordion-icon');
    icon.textContent = content.classList.contains('hidden') ? '▼' : '▲';
  }
   */