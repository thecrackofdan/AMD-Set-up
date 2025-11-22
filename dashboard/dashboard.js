// Mining Dashboard JavaScript
class MiningDashboard {
    constructor() {
        this.startTime = Date.now();
        this.hashRateHistory = [];
        this.temperatureHistory = [];
        this.maxHistoryPoints = 60; // Keep last 60 data points
        this.updateInterval = 2000; // Update every 2 seconds
        
        // Initialize mock data
        this.miningData = {
            hashRate: 0,
            acceptedShares: 0,
            rejectedShares: 0,
            earnings: 0,
            powerUsage: 0,
            gpus: [
                {
                    id: 0,
                    name: 'AMD RX 590',
                    hashRate: 0,
                    temperature: 0,
                    fanSpeed: 0,
                    powerUsage: 0,
                    memoryTemp: 0
                }
            ],
            isMining: false
        };

        this.init();
    }

    init() {
        this.setupCharts();
        this.startUpdates();
        this.updateStatus('active');
        this.addLog('Dashboard initialized', 'info');
    }

    setupCharts() {
        // Hash Rate Chart
        const hashRateCtx = document.getElementById('hashRateChart').getContext('2d');
        this.hashRateChart = new Chart(hashRateCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Hash Rate (MH/s)',
                    data: [],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#f1f5f9'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#94a3b8'
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#94a3b8'
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        }
                    }
                }
            }
        });

        // Temperature Chart
        const tempCtx = document.getElementById('temperatureChart').getContext('2d');
        this.temperatureChart = new Chart(tempCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'GPU Temperature (°C)',
                    data: [],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#f1f5f9'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            color: '#94a3b8'
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#94a3b8'
                        },
                        grid: {
                            color: 'rgba(148, 163, 184, 0.1)'
                        }
                    }
                }
            }
        });
    }

    startUpdates() {
        // Simulate mining start after 2 seconds
        setTimeout(() => {
            this.miningData.isMining = true;
            this.updateStatus('active');
            this.addLog('Mining started successfully', 'success');
        }, 2000);

        // Update dashboard every interval
        setInterval(() => {
            this.updateMiningData();
            this.updateUI();
            this.updateCharts();
        }, this.updateInterval);
    }

    updateMiningData() {
        if (!this.miningData.isMining) return;

        // Simulate realistic mining data
        const baseHashRate = 10.5; // Base hash rate for RX 590
        const variance = (Math.random() - 0.5) * 1.5; // ±0.75 MH/s variance
        this.miningData.hashRate = Math.max(0, baseHashRate + variance);

        // Update shares (occasionally)
        if (Math.random() < 0.1) { // 10% chance per update
            if (Math.random() < 0.95) { // 95% acceptance rate
                this.miningData.acceptedShares++;
                this.addLog(`Share accepted! Hash: ${this.miningData.hashRate.toFixed(2)} MH/s`, 'success');
            } else {
                this.miningData.rejectedShares++;
                this.addLog('Share rejected', 'warning');
            }
        }

        // Update earnings (rough estimate)
        const earningsPerHour = this.miningData.hashRate * 0.0001; // Mock calculation
        this.miningData.earnings += earningsPerHour / (3600 / (this.updateInterval / 1000));

        // Update GPU data
        this.miningData.gpus.forEach(gpu => {
            // Temperature simulation (stabilizes around 65-75°C)
            const targetTemp = 70;
            const tempVariance = (Math.random() - 0.5) * 10;
            gpu.temperature = Math.max(40, Math.min(85, targetTemp + tempVariance));
            
            // Fan speed based on temperature
            gpu.fanSpeed = Math.min(100, Math.max(30, (gpu.temperature - 40) * 2));
            
            // Power usage (varies with hash rate)
            gpu.powerUsage = Math.round(150 + (gpu.temperature - 60) * 2);
            gpu.hashRate = this.miningData.hashRate;
            
            // Memory temperature (usually 5-10°C higher)
            gpu.memoryTemp = gpu.temperature + 5 + Math.random() * 5;
        });

        // Total power usage
        this.miningData.powerUsage = this.miningData.gpus.reduce((sum, gpu) => sum + gpu.powerUsage, 0);
    }

    updateUI() {
        // Update main stats
        document.getElementById('hashRate').textContent = this.miningData.hashRate.toFixed(2);
        document.getElementById('acceptedShares').textContent = this.miningData.acceptedShares;
        document.getElementById('rejectedShares').textContent = this.miningData.rejectedShares;
        document.getElementById('earnings').textContent = this.miningData.earnings.toFixed(6);
        document.getElementById('powerUsage').textContent = this.miningData.powerUsage;

        // Update uptime
        const uptime = Date.now() - this.startTime;
        const hours = Math.floor(uptime / 3600000);
        const minutes = Math.floor((uptime % 3600000) / 60000);
        const seconds = Math.floor((uptime % 60000) / 1000);
        document.getElementById('uptime').textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        // Update GPU cards
        this.updateGPUCards();
    }

    updateGPUCards() {
        const gpuGrid = document.getElementById('gpuGrid');
        gpuGrid.innerHTML = '';

        this.miningData.gpus.forEach(gpu => {
            const gpuCard = document.createElement('div');
            gpuCard.className = 'gpu-card';
            
            const tempClass = gpu.temperature < 70 ? 'cool' : gpu.temperature < 80 ? 'warm' : 'hot';
            
            gpuCard.innerHTML = `
                <h3>${gpu.name}</h3>
                <div class="gpu-info">
                    <div class="gpu-info-item">
                        <span class="gpu-info-label">Hash Rate</span>
                        <span class="gpu-info-value">${gpu.hashRate.toFixed(2)} MH/s</span>
                    </div>
                    <div class="gpu-info-item">
                        <span class="gpu-info-label">Temperature</span>
                        <span class="gpu-info-value">
                            <span class="temperature-indicator ${tempClass}">${gpu.temperature.toFixed(1)}°C</span>
                        </span>
                    </div>
                    <div class="gpu-info-item">
                        <span class="gpu-info-label">Memory Temp</span>
                        <span class="gpu-info-value">${gpu.memoryTemp.toFixed(1)}°C</span>
                    </div>
                    <div class="gpu-info-item">
                        <span class="gpu-info-label">Fan Speed</span>
                        <span class="gpu-info-value">${gpu.fanSpeed.toFixed(0)}%</span>
                    </div>
                    <div class="gpu-info-item">
                        <span class="gpu-info-label">Power Usage</span>
                        <span class="gpu-info-value">${gpu.powerUsage}W</span>
                    </div>
                    <div class="gpu-info-item">
                        <span class="gpu-info-label">Status</span>
                        <span class="gpu-info-value" style="color: ${this.miningData.isMining ? '#10b981' : '#ef4444'}">
                            ${this.miningData.isMining ? 'Mining' : 'Idle'}
                        </span>
                    </div>
                </div>
            `;
            
            gpuGrid.appendChild(gpuCard);
        });
    }

    updateCharts() {
        const now = new Date();
        const timeLabel = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        
        // Update hash rate chart
        this.hashRateHistory.push({
            time: timeLabel,
            value: this.miningData.hashRate
        });
        
        if (this.hashRateHistory.length > this.maxHistoryPoints) {
            this.hashRateHistory.shift();
        }
        
        this.hashRateChart.data.labels = this.hashRateHistory.map(d => d.time);
        this.hashRateChart.data.datasets[0].data = this.hashRateHistory.map(d => d.value);
        this.hashRateChart.update('none'); // 'none' mode for smooth updates

        // Update temperature chart
        if (this.miningData.gpus.length > 0) {
            this.temperatureHistory.push({
                time: timeLabel,
                value: this.miningData.gpus[0].temperature
            });
            
            if (this.temperatureHistory.length > this.maxHistoryPoints) {
                this.temperatureHistory.shift();
            }
            
            this.temperatureChart.data.labels = this.temperatureHistory.map(d => d.time);
            this.temperatureChart.data.datasets[0].data = this.temperatureHistory.map(d => d.value);
            this.temperatureChart.update('none');
        }
    }

    updateStatus(status) {
        const statusDot = document.getElementById('statusDot');
        const statusText = document.getElementById('statusText');
        
        statusDot.className = 'status-dot';
        
        switch(status) {
            case 'active':
                statusDot.classList.add('active');
                statusText.textContent = 'Mining Active';
                break;
            case 'inactive':
                statusDot.classList.add('inactive');
                statusText.textContent = 'Mining Inactive';
                break;
            default:
                statusText.textContent = 'Connecting...';
        }
    }

    addLog(message, type = 'info') {
        const logsContainer = document.getElementById('logsContainer');
        const logEntry = document.createElement('div');
        logEntry.className = `log-entry ${type}`;
        
        const timestamp = new Date().toLocaleTimeString();
        logEntry.innerHTML = `<span class="log-timestamp">[${timestamp}]</span>${message}`;
        
        logsContainer.insertBefore(logEntry, logsContainer.firstChild);
        
        // Keep only last 50 log entries
        while (logsContainer.children.length > 50) {
            logsContainer.removeChild(logsContainer.lastChild);
        }
    }

    // Method to connect to real mining software API
    async connectToMinerAPI(apiUrl) {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            this.updateFromAPI(data);
        } catch (error) {
            this.addLog(`API Error: ${error.message}`, 'error');
            console.error('Failed to fetch mining data:', error);
        }
    }

    updateFromAPI(data) {
        // Update mining data from API response
        // This method should be customized based on your mining software's API format
        if (data.hashRate) this.miningData.hashRate = data.hashRate;
        if (data.shares) {
            this.miningData.acceptedShares = data.shares.accepted || 0;
            this.miningData.rejectedShares = data.shares.rejected || 0;
        }
        if (data.gpus) this.miningData.gpus = data.gpus;
        if (data.earnings) this.miningData.earnings = data.earnings;
    }
}

// Initialize dashboard when page loads
let dashboard;
document.addEventListener('DOMContentLoaded', () => {
    dashboard = new MiningDashboard();
    
    // Example: Connect to real API (uncomment and configure)
    // setInterval(() => {
    //     dashboard.connectToMinerAPI('http://localhost:8080/api/stats');
    // }, 5000);
});

