/**
 * Utility functions for Quai Mining Dashboard
 * Provides data export, localStorage management, and helper functions
 */

class DashboardUtils {
    /**
     * Export mining data to JSON or CSV format
     * @param {Object} data - Mining data to export
     * @param {string} format - Export format: 'json' or 'csv'
     * @param {string} filename - Optional filename (without extension)
     */
    static exportData(data, format = 'json', filename = null) {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const defaultFilename = `quai-mining-data-${timestamp}`;
            filename = filename || defaultFilename;

            if (format === 'json') {
                this.exportJSON(data, filename);
            } else if (format === 'csv') {
                this.exportCSV(data, filename);
            } else {
                throw new Error(`Unsupported format: ${format}`);
            }
        } catch (error) {
            console.error('Export error:', error);
            throw error;
        }
    }

    /**
     * Export data as JSON file
     */
    static exportJSON(data, filename) {
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${filename}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    /**
     * Export data as CSV file
     */
    static exportCSV(data, filename) {
        // Convert mining data to CSV format
        let csv = '';
        
        // Header row
        csv += 'Timestamp,HashRate,AcceptedShares,RejectedShares,PowerUsage,Temperature\n';
        
        // If data is an array of records
        if (Array.isArray(data)) {
            data.forEach(record => {
                csv += this.formatCSVRow(record);
            });
        } else {
            // Single record
            csv += this.formatCSVRow(data);
        }
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${filename}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    /**
     * Format a data record as CSV row
     */
    static formatCSVRow(record) {
        const timestamp = record.timestamp || new Date().toISOString();
        const hashRate = record.hashRate || record.hash_rate || 0;
        const acceptedShares = record.acceptedShares || record.accepted_shares || 0;
        const rejectedShares = record.rejectedShares || record.rejected_shares || 0;
        const powerUsage = record.powerUsage || record.power_usage || 0;
        const temperature = record.temperature || (record.gpus && record.gpus[0]?.temperature) || 0;
        
        return `${timestamp},${hashRate},${acceptedShares},${rejectedShares},${powerUsage},${temperature}\n`;
    }

    /**
     * Save data to localStorage
     * @param {string} key - Storage key
     * @param {*} value - Value to store (will be JSON stringified)
     */
    static saveToStorage(key, value) {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(`quai_dashboard_${key}`, serialized);
            return true;
        } catch (error) {
            console.error('localStorage save error:', error);
            return false;
        }
    }

    /**
     * Load data from localStorage
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default value if key doesn't exist
     */
    static loadFromStorage(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(`quai_dashboard_${key}`);
            if (item === null) return defaultValue;
            return JSON.parse(item);
        } catch (error) {
            console.error('localStorage load error:', error);
            return defaultValue;
        }
    }

    /**
     * Clear all dashboard data from localStorage
     */
    static clearStorage() {
        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith('quai_dashboard_')) {
                    localStorage.removeItem(key);
                }
            });
            return true;
        } catch (error) {
            console.error('localStorage clear error:', error);
            return false;
        }
    }

    /**
     * Show browser notification (if permission granted)
     * @param {string} title - Notification title
     * @param {Object} options - Notification options
     */
    static async showNotification(title, options = {}) {
        if (!('Notification' in window)) {
            console.warn('Browser does not support notifications');
            return false;
        }

        if (Notification.permission === 'granted') {
            new Notification(title, {
                icon: '/favicon.ico',
                badge: '/favicon.ico',
                ...options
            });
            return true;
        } else if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                new Notification(title, {
                    icon: '/favicon.ico',
                    badge: '/favicon.ico',
                    ...options
                });
                return true;
            }
        }
        return false;
    }

    /**
     * Format number with commas
     */
    static formatNumber(num, decimals = 2) {
        if (num === null || num === undefined) return '0';
        return parseFloat(num).toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }

    /**
     * Format time duration (seconds to human readable)
     */
    static formatDuration(seconds) {
        if (!seconds || seconds < 0) return '0s';
        
        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        
        const parts = [];
        if (days > 0) parts.push(`${days}d`);
        if (hours > 0) parts.push(`${hours}h`);
        if (minutes > 0) parts.push(`${minutes}m`);
        if (secs > 0 || parts.length === 0) parts.push(`${secs}s`);
        
        return parts.join(' ');
    }

    /**
     * Format hash rate with appropriate unit
     */
    static formatHashRate(hashRate) {
        if (!hashRate || hashRate === 0) return '0 H/s';
        
        const units = ['H/s', 'KH/s', 'MH/s', 'GH/s', 'TH/s'];
        let unitIndex = 0;
        let value = hashRate;
        
        while (value >= 1000 && unitIndex < units.length - 1) {
            value /= 1000;
            unitIndex++;
        }
        
        return `${value.toFixed(2)} ${units[unitIndex]}`;
    }

    /**
     * Debounce function to limit function calls
     */
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Retry function with exponential backoff
     */
    static async retryWithBackoff(fn, maxRetries = 3, initialDelay = 1000) {
        let lastError;
        for (let i = 0; i < maxRetries; i++) {
            try {
                return await fn();
            } catch (error) {
                lastError = error;
                if (i < maxRetries - 1) {
                    const delay = initialDelay * Math.pow(2, i);
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        throw lastError;
    }

    /**
     * Validate RPC URL format
     */
    static validateRPCUrl(url) {
        try {
            const parsed = new URL(url);
            return parsed.protocol === 'http:' || parsed.protocol === 'https:';
        } catch {
            return false;
        }
    }

    /**
     * Check if value is a valid number
     */
    static isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DashboardUtils;
}

