# Dashboard Update Checklist

This checklist ensures the dashboard stays aligned with official Quai Network resources.

## 🔍 Regular Verification Tasks

### Weekly Checks

- [ ] **Check go-quai Releases**
  - Visit: https://github.com/dominant-strategies/go-quai/releases
  - Look for: New releases, breaking changes, RPC method updates
  - Action: Update RPC calls if methods change

- [ ] **Review docs.v2.qu.ai Updates**
  - Visit: https://docs.v2.qu.ai
  - Look for: New features, API changes, network updates
  - Action: Update dashboard to match new specifications

- [ ] **Check Pelagus Updates**
  - Visit: https://github.com/dominant-strategies/pelagus/releases
  - Look for: Wallet API changes, new methods, breaking changes
  - Action: Update wallet integration if needed

### Monthly Checks

- [ ] **Verify Prometheus Metrics**
  - Check: go-quai/metrics_config/prometheus.yml
  - Action: Update config.js with actual metric names
  - Test: Query Prometheus to verify metric names

- [ ] **Review QuaiScan API**
  - Visit: https://docs.quaiscan.io/developer-support/api
  - Look for: API endpoint changes, new endpoints
  - Action: Update API calls if endpoints change

- [ ] **Check Discord Announcements**
  - Channel: #announcements
  - Look for: Network updates, breaking changes, new features
  - Action: Update dashboard accordingly

## 🐛 Debugging Checklist

When debugging issues:

- [ ] **Verify Against Official Sources**
  - [ ] Check go-quai for RPC method signatures
  - [ ] Verify Pelagus API against repository
  - [ ] Confirm QuaiScan endpoints in documentation
  - [ ] Review docs.v2.qu.ai for latest specs

- [ ] **Check Community Resources**
  - [ ] Search Discord for similar issues
  - [ ] Check GitHub Issues for known problems
  - [ ] Review support.qu.ai for solutions

- [ ] **Test Components Individually**
  - [ ] Test RPC connection directly
  - [ ] Test Pelagus wallet separately
  - [ ] Test QuaiScan API calls
  - [ ] Verify Prometheus metrics

## 📝 Code Update Checklist

When updating code:

- [ ] **Update References**
  - [ ] Add comments with GitHub repo links
  - [ ] Reference official documentation
  - [ ] Note Discord channels for support

- [ ] **Error Handling**
  - [ ] Add retry logic for API calls
  - [ ] Provide helpful error messages
  - [ ] Link to troubleshooting resources

- [ ] **Documentation**
  - [ ] Update README with latest info
  - [ ] Add comments explaining official sources
  - [ ] Update troubleshooting guide

## 🔗 Resource Verification

### GitHub Repositories

- [ ] **go-quai** - https://github.com/dominant-strategies/go-quai
  - [ ] Check for new releases
  - [ ] Review RPC method changes
  - [ ] Update Prometheus metric names

- [ ] **quai-docs** - https://github.com/dominant-strategies/quai-docs
  - [ ] Check for documentation updates
  - [ ] Review API specifications
  - [ ] Update integration examples

- [ ] **quai-gpu-miner** - https://github.com/dominant-strategies/quai-gpu-miner
  - [ ] Check for mining parameter changes
  - [ ] Review algorithm updates
  - [ ] Update mining configuration

- [ ] **Pelagus** - https://github.com/dominant-strategies/pelagus
  - [ ] Check for wallet API changes
  - [ ] Review integration methods
  - [ ] Update wallet connection code

### Documentation Sites

- [ ] **docs.qu.ai** - https://docs.qu.ai
  - [ ] Review general documentation
  - [ ] Check for deprecated features

- [ ] **docs.v2.qu.ai** - https://docs.v2.qu.ai
  - [ ] Review latest specifications
  - [ ] Check node setup guides
  - [ ] Review mining documentation

- [ ] **support.qu.ai** - https://support.qu.ai
  - [ ] Check for new support articles
  - [ ] Review FAQs
  - [ ] Check for known issues

### Community Channels

- [ ] **Discord**
  - [ ] Check #announcements for updates
  - [ ] Review #mining for mining-related changes
  - [ ] Check #node-support for node updates
  - [ ] Review #development for API changes

## 🚀 Before Releasing Updates

- [ ] All official sources verified
- [ ] Code comments reference official repos
- [ ] Error messages link to documentation
- [ ] README updated with latest info
- [ ] Troubleshooting guide updated
- [ ] Tested against latest go-quai version
- [ ] Tested with latest Pelagus version
- [ ] Verified QuaiScan API endpoints
- [ ] Checked Discord for breaking changes

## 📋 Quick Reference

**Primary Sources:**
- go-quai: https://github.com/dominant-strategies/go-quai
- docs.v2.qu.ai: https://docs.v2.qu.ai
- Pelagus: https://github.com/dominant-strategies/pelagus
- QuaiScan: https://docs.quaiscan.io

**Community:**
- Discord: Check qu.ai website for invite
- GitHub Discussions: On official repositories
- Support: https://support.qu.ai

---

**Last Updated:** 2024-01-15
**Next Review:** Weekly

