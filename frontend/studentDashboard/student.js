// Function to get the last N months
function getLastNMonths(count) {
  const labels = [];
  const date = new Date();
  
  for (let i = 0; i < count; i++) {
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    labels.unshift(month);
    date.setMonth(date.getMonth() - 1);
  }

  return labels;
}

// Ensure your code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const labels = getLastNMonths(6);  // Get the last 6 months
  const data = {
    labels: labels,
    datasets: [{
      label: 'Reading History',
      data: [3, 5, 4, 6, 7, 4],
      fill: true,
      borderColor: 'rgb(244, 92, 44)',
      pointBackgroundColor: 'rgb(244, 92, 44)',
      pointBorderWidth: '2',
      tension: 0.4
    }]
  };

  const ctx = document.getElementById('readingHistory').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: data,
  });
});
