document.addEventListener('DOMContentLoaded', function() {
    
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = 'Inter';
    
    const commonOptions = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                padding: 10,
                cornerRadius: 8,
                callbacks: {
                    label: (context) => context.parsed.x + '%'
                }
            }
        },
        scales: {
            x: {
                max: 100,
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#94a3b8' }
            },
            y: {
                grid: { display: false },
                ticks: { 
                    color: '#f8fafc', 
                    font: { weight: '600' } 
                }
            }
        }
    };

    const ctxLang = document.getElementById('lenguajesChart').getContext('2d');
    new Chart(ctxLang, {
        type: 'bar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'GIT', 'Python', 'Java'],
            datasets: [{
                data: [90, 80, 40, 60, 90, 60, 80],
                backgroundColor: [
                    '#e34c26', // HTML 
                    '#264de4', // CSS 
                    '#f0db4f', // JS 
                    '#8993be', // PHP 
                    '#f05032', // Git 
                    '#306998', // Python 
                    '#5382a1', // Java
                ],
                borderRadius: 6,
                barThickness: 20
            }]
        },
        options: commonOptions
    });

    const ctxFrame = document.getElementById('frameworkChart').getContext('2d');
    new Chart(ctxFrame, {
        type: 'bar',
        data: {
            labels: ['Astro', 'Bootstrap', 'React'],
            datasets: [{
                data: [90, 85, 20],
                backgroundColor: [
                    '#ff5a1f', 
                    '#7952b3', 
                    '#61dbfb'  
                ],
                borderRadius: 6,
                barThickness: 20
            }]
        },
        options: commonOptions
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.glass-card').forEach((el) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});