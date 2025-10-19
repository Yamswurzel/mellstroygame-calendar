document.addEventListener('DOMContentLoaded', function() {
    const openDays = document.querySelectorAll('.day-box.open');
    
    openDays.forEach(day => {
        day.addEventListener('click', function() {
            const link = this.querySelector('.day-link');
            if (link && link.href && link.href !== '#') {
                window.open(link.href, '_blank');
            }
        });
    });
    
    updateCurrentDay();
});

function updateCurrentDay() {
    const today = new Date();
    const startDate = new Date('2025-10-17');
    
    if (today < startDate) {
        return;
    }
    
    const timeDiff = today - startDate;
    const currentDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
    
    console.log(`Текущий день конкурса: ${currentDay}`);
}