document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = document.querySelectorAll('.faq-question');

  function closeFaqItem(item) {
    const ans = item.querySelector('.faq-answer');
    const arr = item.querySelector('.arrow');
    item.classList.remove('active');
    if (ans) ans.style.maxHeight = null;
    if (arr) arr.style.transform = 'rotate(0deg)';
  }

  faqButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const currentItem = this.parentElement;
      const currentAnswer = currentItem.querySelector('.faq-answer');
      const currentArrow = this.querySelector('.arrow');

      currentItem.classList.toggle('active');

      if (currentAnswer.style.maxHeight) {
        currentAnswer.style.maxHeight = null;
        if (currentArrow) currentArrow.style.transform = 'rotate(0deg)';
      } else {
        currentAnswer.style.maxHeight = currentAnswer.scrollHeight + 'px';
        if (currentArrow) currentArrow.style.transform = 'rotate(180deg)';
      }

      faqButtons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          const otherItem = otherBtn.parentElement;
          closeFaqItem(otherItem);
        }
      });
    });
  });
}); 
