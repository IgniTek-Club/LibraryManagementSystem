const ctx = document.getElementById('readingHistory').getContext('2d');

const myLineChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June'],
		datasets: [
			{
				label: 'Books Read',
				data: [2, 5, 2, 5, 2, 3], // Sample data
				fill: false,
				borderColor: 'rgba(241, 90, 40)',
				tension: 0.3,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false, // Ensures the canvas adapts to its container
		plugins: {
			legend: {
				 display: false,
			}
	  	},
		scales: {
			x: {
				display: true,
				title: {
					display: true,
					text: 'Month',
				},
			},
			y: {
				display: true,
				title: {
					display: true,
					text: 'Books Read',
				},
				beginAtZero: true, // Ensure the Y-axis starts at 0
				suggestedMax: Math.max(...[4, 2, 5, 3, 2, 2]) + 1, // Add 1 to the max value in the data
			},
		},
	},
});
