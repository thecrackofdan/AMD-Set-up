# Troubleshooting Guide

This guide helps you resolve common issues with the Quai Mining Dashboard.

## Table of Contents

- [Node Connection Issues](#node-connection-issues)
- [Miner API Issues](#miner-api-issues)
- [Pelagus Wallet Issues](#pelagus-wallet-issues)
- [Display/UI Issues](#displayui-issues)
- [Performance Issues](#performance-issues)
- [Browser Compatibility](#browser-compatibility)

---

## Node Connection Issues

### Problem: "Node RPC unavailable" or connection timeout

**Symptoms:**
- Dashboard shows "Node Status: Unknown"
- Block height and difficulty not updating
- "Test Node Connection" button fails

**Solutions:**

1. **Verify Node is Running**
   ```bash
   # Check if node process is running
   ps aux | grep quai
   # Or check if port is listening
   netstat -tuln | grep 8545
   ```

2. **Check RPC Configuration**
   - Ensure node was started with `--http` flag
   - Verify RPC port (default: 8545)
   - Check if RPC is bound to correct address
   - For localhost-only: `--http.addr 127.0.0.1`
   - For network access: `--http.addr 0.0.0.0` (less secure)

3. **Test Direct Connection**
   ```bash
   curl -X POST http://localhost:8545 \
     -H "Content-Type: application/json" \
     -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
   ```

4. **Check Firewall**
   - Ensure port 8545 is not blocked
   - For localhost access, firewall shouldn't matter
   - For network access, open port in firewall

5. **Update RPC URL in Dashboard**
   - Click "Test Node Connection" button
   - Or manually update in `config.js`: `node.rpcUrl`
   - Try different ports: 8545, 8546, 8547, 8548

6. **Check Node Logs**
   - Look for RPC-related errors
   - Verify node is synced (not syncing)
   - Check for connection errors

---

### Problem: Node shows as "Not Synced"

**Symptoms:**
- Dashboard warns "Node is not synced"
- Block height not updating
- Mining may not work correctly

**Solutions:**

1. **Wait for Sync**
   - Quai nodes can take time to sync
   - Check sync progress in node logs
   - Use `eth_syncing` RPC call to check status

2. **Verify Sync Status**
   ```bash
   curl -X POST http://localhost:8545 \
     -H "Content-Type: application/json" \
     -d '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}'
   # Should return: {"result":false} when synced
   ```

3. **Check Network Connection**
   - Ensure node has internet connection
   - Verify peer connections: `net_peerCount`
   - Check node logs for peer connection issues

---

## Miner API Issues

### Problem: Mining stats not updating or showing zero

**Symptoms:**
- Hash rate shows 0
- No GPU information
- Shares not incrementing

**Solutions:**

1. **Verify Miner is Running**
   ```bash
   ps aux | grep miner
   # Check miner process
   ```

2. **Check Miner API Configuration**
   - Team Red Miner: Start with `--api_listen=0.0.0.0 --api_port=4028`
   - Verify API port is accessible
   - Check miner logs for API errors

3. **Configure Dashboard API**
   - Set `CONFIG.api.enabled = true` in `config.js`
   - Set `CONFIG.api.url` to miner API URL
   - Default Team Red Miner: `http://localhost:4028/api`

4. **Test Miner API Directly**
   ```bash
   curl http://localhost:4028/api
   # Should return miner statistics
   ```

5. **Check Firewall**
   - Ensure miner API port is not blocked
   - For localhost, firewall shouldn't matter

6. **Use Mock Data for Testing**
   - Set `CONFIG.api.enabled = false` to use simulated data
   - Useful for testing dashboard without miner

---

## Pelagus Wallet Issues

### Problem: "Pelagus not detected" or wallet won't connect

**Symptoms:**
- "Connect Pelagus" button doesn't work
- Wallet address not showing
- Transaction history empty

**Solutions:**

1. **Install Pelagus Extension**
   - Download from [pelaguswallet.io](https://pelaguswallet.io)
   - Install in your browser (Chrome/Edge/Brave)
   - Ensure extension is enabled

2. **Unlock Wallet**
   - Open Pelagus extension
   - Enter password to unlock
   - Dashboard can't connect if wallet is locked

3. **Refresh Page**
   - After installing/unlocking, refresh dashboard (F5)
   - Extension injection can take a few seconds
   - Click "Retry" button if available

4. **Check Browser Console**
   - Open Developer Tools (F12)
   - Look for errors in Console tab
   - Check for wallet provider detection messages

5. **Disable Other Wallet Extensions**
   - Other wallet extensions (MetaMask, etc.) can interfere
   - Temporarily disable other extensions
   - Try incognito/private mode with only Pelagus

6. **Manual Connection**
   - Click "Connect Pelagus" button
   - Approve connection in Pelagus popup
   - Check if connection request appears

7. **Check Network**
   - Ensure you're on Quai Network (not Ethereum mainnet)
   - Switch network in Pelagus if needed
   - Dashboard works with Quai Network only

---

## Display/UI Issues

### Problem: Charts not displaying or updating

**Symptoms:**
- Charts show blank/empty
- No data points on charts
- Chart.js errors in console

**Solutions:**

1. **Check Internet Connection**
   - Chart.js loads from CDN
   - Verify internet connection
   - Check browser console for CDN errors

2. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Clear browser cache
   - Try incognito/private mode

3. **Check JavaScript Errors**
   - Open Developer Tools (F12)
   - Check Console for errors
   - Look for Chart.js initialization errors

4. **Verify Chart Containers**
   - Ensure HTML has chart canvas elements
   - Check if elements exist: `document.getElementById('hashRateChart')`

5. **Wait for Data**
   - Charts need data points to display
   - Wait a few update cycles (5-10 seconds)
   - Check if mining data is updating

---

### Problem: Dashboard looks broken or styles missing

**Symptoms:**
- Missing colors/styling
- Layout broken
- Elements overlapping

**Solutions:**

1. **Check CSS File Loading**
   - Open Developer Tools (F12)
   - Check Network tab for CSS file
   - Verify `styles.css` loads successfully

2. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R
   - Clear cache and cookies
   - Try different browser

3. **Check File Paths**
   - Verify CSS file path in HTML
   - Ensure files are in correct directories
   - Check server is serving static files

4. **Browser Compatibility**
   - Use modern browser (Chrome, Firefox, Edge, Safari)
   - Check browser console for errors
   - Update browser to latest version

---

## Performance Issues

### Problem: Dashboard is slow or laggy

**Symptoms:**
- UI updates slowly
- Charts stutter
- High CPU usage

**Solutions:**

1. **Reduce Update Interval**
   - Increase update interval in dropdown
   - Use 10-30 seconds instead of 1-5 seconds
   - Less frequent updates = better performance

2. **Disable Unused Features**
   - Disable QuaiScan if not needed
   - Disable QuaiSwap if not needed
   - Disable Prometheus if not configured

3. **Reduce History Points**
   - Edit `config.js`: `charts.maxHistoryPoints`
   - Reduce from 60 to 30 or 20
   - Less data = faster rendering

4. **Close Other Tabs**
   - Browser memory usage
   - Close unnecessary tabs
   - Restart browser if needed

5. **Check Browser Performance**
   - Open Task Manager
   - Check browser CPU/memory usage
   - Close other heavy websites

---

### Problem: High memory usage

**Symptoms:**
- Browser becomes slow
- System memory high
- Browser crashes

**Solutions:**

1. **Limit Log Entries**
   - Edit `config.js`: `display.maxLogEntries`
   - Reduce from 50 to 20-30
   - Logs accumulate over time

2. **Limit Chart History**
   - Reduce `charts.maxHistoryPoints`
   - Charts store data in memory
   - Less history = less memory

3. **Refresh Dashboard**
   - Periodically refresh page (F5)
   - Clears accumulated data
   - Resets memory usage

4. **Use Auto-Export**
   - Enable auto-export in settings
   - Exports data periodically
   - Can help manage memory

---

## Browser Compatibility

### Supported Browsers

- **Chrome/Edge** (Chromium): ✅ Fully supported
- **Firefox**: ✅ Fully supported
- **Safari**: ✅ Supported (macOS/iOS)
- **Opera**: ✅ Supported
- **Brave**: ✅ Supported

### Known Issues

1. **Safari Notifications**
   - Safari requires user interaction for notifications
   - May need to enable in Safari preferences
   - Other browsers work better for notifications

2. **Firefox localStorage**
   - Private mode may restrict localStorage
   - Settings may not persist in private mode
   - Use normal browsing mode

3. **Mobile Browsers**
   - Dashboard is responsive but optimized for desktop
   - Some features work better on desktop
   - Touch interactions may need improvement

---

## Getting More Help

If you're still experiencing issues:

1. **Check Logs**
   - Browser console (F12)
   - Server logs (terminal)
   - Node logs
   - Miner logs

2. **Verify Configuration**
   - Review `config.js` settings
   - Check environment variables
   - Verify file paths

3. **Test Components**
   - Test node RPC directly
   - Test miner API directly
   - Test Pelagus wallet separately

4. **Documentation**
   - Review [README.md](../README.md)
   - Check [API_DOCUMENTATION.md](../API_DOCUMENTATION.md)
   - Review official Quai Network docs

5. **Community Support**
   - Quai Network Discord
   - GitHub Issues
   - Community forums

---

## Common Error Messages

### "RPC call failed: Network error"
- Node RPC not accessible
- Check node is running
- Verify RPC URL

### "Pelagus not detected"
- Extension not installed
- Extension not unlocked
- Refresh page

### "Chart.js is not defined"
- CDN failed to load
- Check internet connection
- Verify Chart.js script tag

### "localStorage is not available"
- Private/incognito mode
- Browser restrictions
- Use normal browsing mode

---

## Prevention Tips

1. **Regular Updates**
   - Keep dashboard code updated
   - Update browser regularly
   - Update node/miner software

2. **Backup Configuration**
   - Save `config.js` settings
   - Export data regularly
   - Keep backups of important data

3. **Monitor Resources**
   - Check system resources
   - Monitor node/miner performance
   - Watch for memory leaks

4. **Test Changes**
   - Test in development first
   - Verify before production
   - Keep backups

---

**Last Updated:** 2024-01-15

