# Official Quai Network Sources Reference

This document lists all official open-source repositories and documentation used for the dashboard implementation.

## Official GitHub Repositories

### Core Quai Network

1. **go-quai** - Core Quai Network Implementation
   - **Repository:** https://github.com/dominant-strategies/go-quai
   - **Use For:**
     - RPC method specifications
     - Prometheus metrics configuration
     - Node configuration
     - Network architecture
   - **Key Files:**
     - `metrics_config/prometheus.yml` - Prometheus configuration
     - `metrics_config/grafana_metrics.json` - Grafana dashboard
     - RPC method implementations

2. **quai-docs** - Official Documentation
   - **Repository:** https://github.com/dominant-strategies/quai-docs
   - **Use For:**
     - API specifications
     - Network architecture
     - Development guides
     - Integration examples

3. **quai-gpu-miner** - Official GPU Miner
   - **Repository:** https://github.com/dominant-strategies/quai-gpu-miner
   - **Use For:**
     - Mining algorithm details
     - ProgPoW implementation
     - Mining parameters

### Wallet & Tools

4. **Pelagus** - Official Browser Wallet
   - **Repository:** https://github.com/dominant-strategies/pelagus
   - **Use For:**
     - Wallet integration API
     - `window.pelagus` implementation
     - Connection methods
     - Event handling

5. **Quais SDK** - JavaScript/TypeScript SDK
   - **Documentation:** https://support.qu.ai/en/articles/10047060-quais-sdk
   - **Use For:**
     - Provider setup
     - Transaction handling
     - Network interaction

### Explorer & APIs

6. **QuaiScan** - Blockchain Explorer
   - **Documentation:** https://docs.quaiscan.io
   - **API Docs:** https://docs.quaiscan.io/developer-support/api
   - **Use For:**
     - REST API endpoints
     - GraphQL API queries
     - Address information
     - Network statistics

## Official Documentation Sites

- **Quai Network Docs:** https://docs.qu.ai
- **Quai Network v2 Docs:** https://docs.v2.qu.ai
- **Quai Network Support:** https://support.qu.ai
- **Pelagus Wallet Docs:** https://pelaguswallet.io/docs
- **QuaiScan Docs:** https://docs.quaiscan.io

## How to Use These Sources

### For Prometheus Metrics

1. **Check go-quai repository:**
   ```bash
   # Clone or browse: https://github.com/dominant-strategies/go-quai
   # Check: metrics_config/prometheus.yml for actual metric names
   # Check: metrics_config/grafana_metrics.json for Grafana queries
   ```

2. **Find actual metric names:**
   - Open Prometheus UI: `http://localhost:9090`
   - Query: `{__name__=~".*quai.*"}` to see all Quai metrics
   - Or check your `prometheus.yml` config file

3. **Update dashboard config:**
   - Edit `config.js`
   - Update `CONFIG.node.prometheus.metrics` with actual names from go-quai

### For Pelagus Integration

1. **Review Pelagus repository:**
   ```bash
   # Clone or browse: https://github.com/dominant-strategies/pelagus
   # Check: src/ for window.pelagus implementation
   # Check: docs/ for API documentation
   ```

2. **Verify integration:**
   - Check `window.pelagus` injection method
   - Verify `quai_requestAccounts` and `quai_accounts` methods
   - Review event handling (`accountsChanged`, `chainChanged`)

3. **Update if needed:**
   - Match dashboard integration to Pelagus source code
   - Follow official Pelagus documentation patterns

### For QuaiScan API

1. **Review QuaiScan documentation:**
   - Visit: https://docs.quaiscan.io
   - Check: API endpoints and response formats
   - Review: REST vs GraphQL API usage

2. **Verify endpoints:**
   - Test actual API endpoints
   - Check response structure
   - Update dashboard if endpoints differ

### For RPC Methods

1. **Review go-quai RPC:**
   ```bash
   # Check: https://github.com/dominant-strategies/go-quai
   # Review: RPC method implementations
   # Verify: eth_ vs quai_ prefixed methods
   ```

2. **Check quai-docs:**
   - Visit: https://docs.qu.ai
   - Review: RPC API specifications
   - Verify: Method names and parameters

## Quick Reference Links

### Prometheus Metrics
- **go-quai metrics config:** https://github.com/dominant-strategies/go-quai/tree/main/metrics_config
- **Prometheus config:** Check `prometheus.yml` in go-quai repo
- **Grafana dashboard:** Check `grafana_metrics.json` in go-quai repo

### Pelagus Wallet
- **Repository:** https://github.com/dominant-strategies/pelagus
- **Documentation:** https://pelaguswallet.io/docs
- **Integration Guide:** Check Pelagus docs for `window.pelagus` usage

### QuaiScan API
- **Documentation:** https://docs.quaiscan.io
- **API Reference:** https://docs.quaiscan.io/developer-support/api
- **GraphQL API:** https://docs.quaiscan.io/developer-support/api/graphql

### Quai Network
- **go-quai:** https://github.com/dominant-strategies/go-quai
- **Documentation:** https://docs.qu.ai
- **v2 Docs:** https://docs.v2.qu.ai

## Action Items

1. ✅ **Review go-quai Prometheus Config**
   - Check `metrics_config/prometheus.yml` for actual metric names
   - Update `config.js` with correct names

2. ✅ **Review Pelagus Source**
   - Verify `window.pelagus` implementation matches source
   - Check for any API changes

3. ✅ **Review QuaiScan API**
   - Verify endpoint URLs match documentation
   - Check response formats

4. ✅ **Update Dashboard**
   - Use actual metric names from Prometheus config
   - Match Pelagus integration to source code
   - Align QuaiScan API calls with official docs

---

**All sources are open-source and available on GitHub or qu.ai**
**Always refer to official repositories for the most accurate implementation details.**

