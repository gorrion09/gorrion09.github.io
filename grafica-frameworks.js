// Configuración de la gráfica
document.addEventListener('DOMContentLoaded', function() {
    const experiencia = {
        labels: ['ASTRO', 'BOOSTRAP', 'REACT',],
        datasets: [{
            label: 'Nivel de dominio (0-100)',
            data: [90, 85, 70, 80, 60],
            backgroundColor: [
                '#E44D26',
                '#2965F1',
                '#006064'
            ],
            borderColor: [
                '#E44D26',
                '#2965F1',
                '#006064'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: experiencia,
        options: {
            indexAxis: 'y', 
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.raw + '%';
                        }
                    }
                }
            }
        }
    };

    const ctx = document.getElementById('frameworkChart').getContext('2d');
    new Chart(ctx, config);
});