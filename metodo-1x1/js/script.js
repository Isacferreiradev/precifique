document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Quiz Logic
    const quizOptions = document.querySelectorAll('.quiz-option');
    const steps = document.querySelectorAll('.quiz-step');
    let currentStep = 0;

    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Find parent step index
            const parentStep = option.closest('.quiz-step');
            const nextStepId = parseInt(parentStep.dataset.step) + 1;

            // Hide current, show next or result
            parentStep.classList.remove('active');

            const nextStepEl = document.querySelector(`.quiz-step[data-step="${nextStepId}"]`);
            if (nextStepEl) {
                nextStepEl.classList.add('active');
            }
        });
    });
});
