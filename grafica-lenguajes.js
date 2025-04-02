document.addEventListener('DOMContentLoaded', function() {
    const experiencia = {
        labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'GIT', 'PYTHON', 'JAVA', 'C'],
        datasets: [{
            label: 'Nivel de dominio (0-100)',
            data: [90, 80, 40, 60, 90, 60, 80, 20],
            backgroundColor: [
                '#E44D26',
                '#2965F1',
                '#006064',
                '#000000',
                '#CB2282',
                '#FF5733',
                '#33FF57',
                '#3357FF',
                '#FF33A1'
            ],
            borderColor: [
                '#E44D26',
                '#2965F1',
                '#006064',
                '#000000',
                '#CB2282',
                '#FF5733',
                '#33FF57',
                '#3357FF',
                '#FF33A1'
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
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: { 
                    ticks: {
                        color: '#ffffff', 
                        font: {
                            size: 14, 
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.x + '%'; // Muestra el porcentaje en el tooltip
                        }
                    }
                }
            }
        }
    };

    const ctx = document.getElementById('lenguajesChart').getContext('2d');
    new Chart(ctx, config);
});