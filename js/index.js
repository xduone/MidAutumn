$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        paginationClickable: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        }
    });   
    $('.nav-menu a').on('click', function(e) {
        e.preventDefault();
        
        var targetId = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 800); 
    });
    function updateCountdown() {
        const targetDate = new Date('2024-09-17T00:00:00'); 
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
    
    const toggleButtons = document.querySelectorAll('.toggle-button');
    
        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const item = this.parentElement;
                const details = item.querySelector('.culture-details');
                details.classList.toggle('open');
            });
        });
        const buttons = document.querySelectorAll('.nav-button');
        const boxes = document.querySelectorAll('.event-box');
    
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const targetId = this.getAttribute('data-target');
                
                boxes.forEach(box => {
                    if (box.id === targetId) {
                        box.style.display = 'block';
                    } else {
                        box.style.display = 'none';
                    }
                });
            });
        });
    
});
