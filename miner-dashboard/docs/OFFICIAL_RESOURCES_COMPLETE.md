# Complete Official Quai Network Resources

This document provides a comprehensive list of all official Quai Network resources, GitHub repositories, documentation, and community channels.

## 🔗 Official GitHub Repositories

### Core Network & Infrastructure

1. **go-quai** - Core Quai Network Implementation
   - **Repository:** https://github.com/dominant-strategies/go-quai
   - **Description:** Main Quai Network node implementation in Go
   - **Key Resources:**
     - RPC method implementations
     - Prometheus metrics configuration (`metrics_config/prometheus.yml`)
     - Grafana dashboard config (`metrics_config/grafana_metrics.json`)
     - Network architecture and consensus
   - **Latest Release:** Check releases page for stable versions
   - **Documentation:** See `docs/` folder in repository

2. **quai-docs** - Official Documentation Repository
   - **Repository:** https://github.com/dominant-strategies/quai-docs
   - **Description:** Source for all Quai Network documentation
   - **Key Resources:**
     - API specifications
     - Network architecture guides
     - Development guides
     - Integration examples
   - **Note:** This is the source for docs.qu.ai and docs.v2.qu.ai

3. **quai-gpu-miner** - Official GPU Miner
   - **Repository:** https://github.com/dominant-strategies/quai-gpu-miner
   - **Description:** Official Quai Network GPU mining software
   - **Key Resources:**
     - ProgPoW algorithm implementation
     - Mining parameters and configuration
     - Build instructions
     - Performance optimizations
   - **Algorithm:** ProgPoW (SOAP upgrade from KawPoW)

### Wallet & Tools

4. **Pelagus** - Official Browser Wallet
   - **Repository:** https://github.com/dominant-strategies/pelagus
   - **Website:** https://pelaguswallet.io
   - **Documentation:** https://pelaguswallet.io/docs
   - **Key Resources:**
     - `window.pelagus` API implementation
     - `quai_requestAccounts` and `quai_accounts` methods
     - Event handling (`accountsChanged`, `chainChanged`)
     - Provider injection methods
   - **Installation:** Chrome/Edge/Brave extension

5. **Quais SDK** - JavaScript/TypeScript SDK
   - **Documentation:** https://support.qu.ai/en/articles/10047060-quais-sdk
   - **Description:** Official SDK for Quai Network integration
   - **Use For:**
     - Provider setup
     - Transaction handling
     - Network interaction
     - Contract interaction

### Explorer & APIs

6. **QuaiScan** - Blockchain Explorer
   - **Website:** https://quaiscan.io
   - **Documentation:** https://docs.quaiscan.io
   - **API Documentation:** https://docs.quaiscan.io/developer-support/api
   - **GraphQL API:** https://docs.quaiscan.io/developer-support/api/graphql
   - **REST API:** Available endpoints documented
   - **Features:**
     - Address information
     - Transaction history
     - Block explorer
     - Network statistics

## 📚 Official Documentation Sites

### Primary Documentation

1. **Quai Network Docs (v1)**
   - **URL:** https://docs.qu.ai
   - **Content:** Original documentation
   - **Use For:** General network information

2. **Quai Network Docs (v2)**
   - **URL:** https://docs.v2.qu.ai
   - **Content:** Updated documentation with latest features
   - **Use For:** Current network specifications
   - **Key Sections:**
     - Node setup and configuration
     - Mining guides
     - Network architecture
     - API references

3. **Quai Network Support**
   - **URL:** https://support.qu.ai
   - **Content:** Support articles and guides
   - **Use For:** Troubleshooting and FAQs

### Specialized Documentation

4. **Pelagus Wallet Docs**
   - **URL:** https://pelaguswallet.io/docs
   - **Content:** Wallet integration and API
   - **Use For:** Wallet integration in applications

5. **QuaiScan Documentation**
   - **URL:** https://docs.quaiscan.io
   - **Content:** Explorer API and usage
   - **Use For:** Blockchain data queries

## 💬 Community Channels

### Discord

**Official Quai Network Discord:** (Join link available on qu.ai website)
- **#general** - General discussions
- **#mining** - Mining discussions and support
- **#node-support** - Node setup and troubleshooting
- **#development** - Development discussions
- **#announcements** - Official announcements
- **#support** - Technical support

**Note:** Discord invite links are typically found on:
- https://qu.ai (main website)
- https://docs.qu.ai (documentation)
- GitHub repository README files

### Other Community Resources

- **GitHub Discussions:** Available on official repositories
- **Twitter/X:** @QuaiNetwork (official account)
- **Reddit:** r/QuaiNetwork (if available)

## 🔧 Key Technical Resources

### RPC Methods

**Source:** go-quai repository
- **Ethereum-compatible methods:** `eth_*` prefix
- **Quai-specific methods:** `quai_*` prefix
- **Common Methods:**
  - `eth_blockNumber` - Get current block number
  - `eth_syncing` - Check sync status
  - `eth_getBalance` - Get account balance
  - `net_peerCount` - Get peer count
  - `quai_getChainInfo` - Get chain information

### Prometheus Metrics

**Source:** go-quai/metrics_config/prometheus.yml
- **Metric Naming:** Check actual names in repository
- **Common Metrics:**
  - Block height metrics
  - Difficulty metrics
  - Peer count metrics
  - Sync status metrics
  - Network hash rate metrics

**How to Find Actual Names:**
1. Clone go-quai repository
2. Check `metrics_config/prometheus.yml`
3. Or query Prometheus: `{__name__=~".*quai.*"}`

### Network Architecture

**Source:** quai-docs and docs.v2.qu.ai
- **Chain Hierarchy:**
  - Level 0: Prime Chain (coordination)
  - Level 1: Regions (Cyprus, Paxos, Hydra)
  - Level 2: Zones (multiple zones per region)
- **Merged Mining:** Supported across multiple chains
- **SOAP Protocol:** ProgPoW algorithm

## 📋 Integration Checklist

When updating the dashboard, verify against:

- [ ] **go-quai** - RPC methods and Prometheus metrics
- [ ] **quai-docs** - API specifications
- [ ] **quai-gpu-miner** - Mining parameters
- [ ] **Pelagus** - Wallet integration API
- [ ] **QuaiScan** - API endpoints and response formats
- [ ] **docs.v2.qu.ai** - Latest network specifications
- [ ] **Discord** - Community feedback and updates

## 🔄 Keeping Up to Date

### Regular Updates

1. **Monitor GitHub Repositories:**
   - Watch repositories for releases
   - Check for breaking changes
   - Review commit history for updates

2. **Check Documentation:**
   - Review docs.v2.qu.ai for latest specs
   - Check support.qu.ai for announcements
   - Review Pelagus docs for wallet changes

3. **Community Engagement:**
   - Join Discord for real-time updates
   - Participate in discussions
   - Report issues and get feedback

4. **Version Tracking:**
   - Track go-quai releases
   - Monitor quai-gpu-miner updates
   - Check Pelagus extension updates

## 🐛 Reporting Issues

### Where to Report

1. **Dashboard Issues:**
   - This repository's Issues page
   - Include: error messages, steps to reproduce, environment details

2. **Network Issues:**
   - go-quai Issues: https://github.com/dominant-strategies/go-quai/issues
   - Discord #support channel

3. **Mining Issues:**
   - quai-gpu-miner Issues: https://github.com/dominant-strategies/quai-gpu-miner/issues
   - Discord #mining channel

4. **Wallet Issues:**
   - Pelagus Issues: https://github.com/dominant-strategies/pelagus/issues
   - Discord #support channel

## 📝 Quick Reference Links

### Repositories
- go-quai: https://github.com/dominant-strategies/go-quai
- quai-docs: https://github.com/dominant-strategies/quai-docs
- quai-gpu-miner: https://github.com/dominant-strategies/quai-gpu-miner
- Pelagus: https://github.com/dominant-strategies/pelagus

### Documentation
- Docs v1: https://docs.qu.ai
- Docs v2: https://docs.v2.qu.ai
- Support: https://support.qu.ai
- Pelagus: https://pelaguswallet.io/docs
- QuaiScan: https://docs.quaiscan.io

### Tools & Services
- QuaiScan: https://quaiscan.io
- Pelagus Wallet: https://pelaguswallet.io
- QuaiSwap: https://quaiswap.io

---

**Last Updated:** 2024-01-15
**Maintained By:** Community (refer to official sources for latest info)

