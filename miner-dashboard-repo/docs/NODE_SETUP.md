# Quai Network Node Setup Guide

## Overview

This guide covers the configuration required to run a Quai Network node that can function as a peer on the network. Proper configuration ensures your node can connect to other peers and participate in the network effectively.

## Port Configuration

### Required Peer Ports

For your Quai Network node to function as a peer, the following ports must be open for **both TCP and UDP** traffic:

| Chain Name | Chain Index | Peering Port (TCP/UDP) |
|------------|-------------|------------------------|
| Prime      | -           | **30303**              |
| Cyprus     | -           | **30304**              |
| Paxos      | -           | **30305**              |
| Hydra      | -           | **30306**              |
| Cyprus-1   | [0 0]       | **30307**              |
| Cyprus-2   | [0 1]       | **30308**              |
| Cyprus-3   | [0 2]       | **30309**              |
| Paxos-1    | [1 0]       | **30310**              |
| Paxos-2    | [1 1]       | **30311**              |
| Paxos-3    | [1 2]       | **30312**              |
| Hydra-1    | [2 0]       | **30313**              |
| Hydra-2    | [2 1]       | **30314**              |
| Hydra-3    | [2 2]       | **30315**              |

### Port Range Summary

- **Peer Ports**: 30303-30315 (TCP and UDP) - **Required for peer connections**
- **RPC Port**: 8545 (TCP) - Typically localhost-only, doesn't need external access

## Configuration Methods

### Option 1: Enable UPnP (Recommended)

Universal Plug and Play (UPnP) automatically manages port forwarding on your router, making setup easier.

#### Steps:

1. **Enable UPnP on your router:**
   - Access your router's admin panel (usually `192.168.1.1` or `192.168.0.1`)
   - Navigate to NAT/UPnP settings
   - Enable UPnP
   - Save and restart router if needed

2. **Verify UPnP is working:**
   - Your Quai node should automatically use UPnP if available
   - Check router logs to confirm port forwarding is active

**Advantages:**
- Automatic port management
- No manual configuration needed
- Works with dynamic IP addresses

**Disadvantages:**
- Requires router support
- May have security implications (less control)

### Option 2: Manual Port Forwarding

If UPnP is not available or you prefer manual control, configure port forwarding manually.

#### Steps:

1. **Access your router's admin panel:**
   - Usually at `192.168.1.1` or `192.168.0.1`
   - Login with admin credentials

2. **Configure port forwarding:**
   - Navigate to Port Forwarding / Virtual Server settings
   - Forward ports **30303-30315** (TCP and UDP) to your node's local IP
   - Forward port **8545** (TCP) if you need external RPC access (not recommended)

3. **Get your external IP address:**
   ```bash
   # Linux/Mac
   curl ifconfig.me
   
   # Or visit: https://whatismyipaddress.com
   ```

4. **Configure network.env file:**
   ```bash
   # Edit your network.env file
   nano network.env
   ```
   
   Add or update these lines:
   ```
   ENABLE_NAT=true
   EXT_IP=Your_Public_IP_Address
   ```
   
   Replace `Your_Public_IP_Address` with your actual external IP address.
   
   **Important:** Remove the `#` at the beginning of the `EXT_IP` line if it's commented out.

5. **Restart your Quai node:**
   ```bash
   # Restart the node to apply changes
   systemctl restart quai-node
   # Or however you run your node
   ```

## Firewall Configuration

### Linux (UFW)

```bash
# Allow peer ports (TCP and UDP)
sudo ufw allow 30303:30315/tcp
sudo ufw allow 30303:30315/udp

# Allow RPC port (localhost only - recommended)
sudo ufw allow from 127.0.0.1 to any port 8545

# Or allow RPC from local network (if needed)
sudo ufw allow from 192.168.0.0/16 to any port 8545

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### Linux (iptables)

```bash
# Allow peer ports (TCP)
sudo iptables -A INPUT -p tcp --dport 30303:30315 -j ACCEPT

# Allow peer ports (UDP)
sudo iptables -A INPUT -p udp --dport 30303:30315 -j ACCEPT

# Allow RPC port (localhost only)
sudo iptables -A INPUT -p tcp -s 127.0.0.1 --dport 8545 -j ACCEPT

# Save rules (Ubuntu/Debian)
sudo iptables-save > /etc/iptables/rules.v4
```

### Windows Firewall

1. Open Windows Defender Firewall
2. Click "Advanced settings"
3. Click "Inbound Rules" → "New Rule"
4. Select "Port" → Next
5. Select "TCP" and "UDP"
6. Enter port range: `30303-30315`
7. Select "Allow the connection"
8. Apply to all profiles
9. Name it "Quai Network Peer Ports"
10. Repeat for RPC port 8545 (if needed)

## Verification

### Check if ports are open:

```bash
# From another machine on the internet
# Test peer ports
nc -zv your-public-ip 30303
nc -zv your-public-ip 30304
# ... etc

# Or use online tools:
# https://www.yougetsignal.com/tools/open-ports/
# https://canyouseeme.org/
```

### Check node connectivity:

```bash
# Check if node is syncing
curl -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' \
  http://localhost:8545

# Check peer count
curl -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}' \
  http://localhost:8545
```

### Expected Results:

- **Syncing**: Should return `false` when fully synced
- **Peer Count**: Should show connected peers (e.g., `"0x10"` = 16 peers)

## Troubleshooting

### Node not connecting to peers:

1. **Check firewall:**
   ```bash
   # Linux
   sudo ufw status
   sudo iptables -L -n
   
   # Check if ports are listening
   sudo netstat -tulpn | grep -E "30303|30304|30305"
   ```

2. **Verify network.env configuration:**
   ```bash
   cat network.env | grep -E "ENABLE_NAT|EXT_IP"
   ```

3. **Check router port forwarding:**
   - Verify ports 30303-30315 are forwarded correctly
   - Ensure forwarding points to correct local IP
   - Check if router firewall is blocking connections

4. **Test from external network:**
   ```bash
   # Use online port checker
   # https://canyouseeme.org/
   ```

### Node shows 0 peers:

- Verify ports are open and forwarded
- Check `ENABLE_NAT=true` in network.env
- Verify `EXT_IP` is set to correct public IP
- Ensure router UPnP is enabled (if using)
- Check node logs for connection errors

### RPC not accessible:

- RPC port (8545) should typically be localhost-only for security
- If external access needed, forward port 8545 and configure firewall
- **Warning:** Exposing RPC externally is a security risk

## Security Considerations

1. **RPC Port (8545):**
   - Keep RPC on localhost only (default)
   - If external access needed, use authentication
   - Consider using SSH tunnel for remote access

2. **Peer Ports (30303-30315):**
   - These must be open for network participation
   - Only allow necessary ports
   - Monitor for unusual traffic

3. **Firewall Rules:**
   - Use restrictive firewall rules
   - Only allow necessary ports
   - Regularly review and update rules

## Additional Resources

- **Official Documentation:** https://docs.v2.qu.ai/docs/participate/node/run-a-node/
- **go-quai Repository:** https://github.com/dominant-strategies/go-quai
- **Network Configuration:** See `network.env` file in your node directory

## Quick Reference

### Port Summary:
- **Peer Ports**: 30303-30315 (TCP/UDP) - Required
- **RPC Port**: 8545 (TCP) - Localhost only (recommended)

### network.env Configuration:
```
ENABLE_NAT=true
EXT_IP=Your_Public_IP_Address
```

### Firewall Commands (UFW):
```bash
sudo ufw allow 30303:30315/tcp
sudo ufw allow 30303:30315/udp
sudo ufw allow from 127.0.0.1 to any port 8545
```

---

**Last Updated:** Based on Quai Network documentation v2.0
**Source:** https://docs.v2.qu.ai/docs/participate/node/run-a-node/

