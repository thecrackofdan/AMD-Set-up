# Quai Mining Software Research & Recommendations
## Comprehensive Analysis for Solo Mining with AMD RX 590

This document provides detailed research and recommendations for the best mining software for Quai solo mining.

## 📊 Executive Summary

**Best Overall Choice for Solo Mining:**
1. **Quai GPU Miner (Official)** - Best for Quai-specific optimizations, no fees when built from source
2. **Team Red Miner** - Excellent AMD optimization, small dev fee (0.5-1%), easy setup
3. **SRBMiner-Multi** - Good alternative, supports multiple algorithms

**Recommendation:** Use **Quai GPU Miner built from source** for maximum efficiency and zero fees, or **Team Red Miner** for easier setup with minimal fees.

---

## 🔍 Detailed Software Comparison

### 1. Quai GPU Miner (Official)

**Repository:** https://github.com/dominant-strategies/quai-gpu-miner

#### Pros:
- ✅ **Official miner** - Specifically designed for Quai Network
- ✅ **Zero fees** when built from source
- ✅ **ProgPoW optimized** - Tailored for Quai's algorithm
- ✅ **OpenCL & CUDA support** - Works with AMD and NVIDIA
- ✅ **Active development** - Regular updates from Quai team
- ✅ **Solo mining optimized** - Designed for direct node connection
- ✅ **Merged mining support** - Can mine multiple Quai chains simultaneously
- ✅ **Full source code access** - Can customize and optimize

#### Cons:
- ❌ Requires building from source (more complex setup)
- ❌ May need stratum proxy for some configurations
- ❌ Less documentation than commercial miners

#### Performance (RX 590):
- **Expected Hashrate:** ~10-12 MH/s (optimized)
- **Power Efficiency:** Excellent (when properly configured)
- **Stability:** Very good (official support)

#### Fees:
- **Pre-built binaries:** Unknown (may have fees)
- **Built from source:** **0% (FREE!)**

#### Best For:
- Solo miners who want maximum control
- Users comfortable with building from source
- Those wanting zero fees
- Long-term Quai miners

---

### 2. Team Red Miner (TRM)

**Repository:** https://github.com/todxx/teamredminer

#### Pros:
- ✅ **Excellent AMD optimization** - Best-in-class for AMD GPUs
- ✅ **ProgPoW support** - Full support for Quai's algorithm
- ✅ **Easy setup** - Pre-built binaries available
- ✅ **Low dev fee** - Only 0.5-1% (configurable)
- ✅ **Stable & reliable** - Battle-tested miner
- ✅ **Good documentation** - Well-documented
- ✅ **Active updates** - Regular releases
- ✅ **Solo mining support** - Can connect directly to node RPC

#### Cons:
- ❌ Small developer fee (0.5-1%)
- ❌ Not Quai-specific (general ProgPoW miner)

#### Performance (RX 590):
- **Expected Hashrate:** ~10-12 MH/s (optimized)
- **Power Efficiency:** Excellent
- **Stability:** Excellent

#### Fees:
- **Developer Fee:** 0.5-1% (can be configured)

#### Best For:
- Users who want easy setup
- Those who don't mind small dev fee
- AMD GPU owners
- Quick deployment

---

### 3. SRBMiner-Multi

**Repository:** https://github.com/doktor83/SRBMiner-Multi

#### Pros:
- ✅ **Multi-algorithm support** - Can mine various coins
- ✅ **ProgPoW support** - Compatible with Quai
- ✅ **AMD optimized** - Good AMD GPU support
- ✅ **Regular updates** - Active development
- ✅ **Flexible configuration** - Extensive options

#### Cons:
- ❌ Developer fee (typically 0.5-1%)
- ❌ Not Quai-specific
- ❌ May have slightly lower performance than specialized miners

#### Performance (RX 590):
- **Expected Hashrate:** ~9-11 MH/s
- **Power Efficiency:** Good
- **Stability:** Good

#### Fees:
- **Developer Fee:** 0.5-1%

#### Best For:
- Miners who want flexibility
- Those mining multiple coins
- Users wanting alternative options

---

### 4. Rigel Miner

**Repository:** https://github.com/rigelminer/rigel

#### Pros:
- ✅ **User-friendly** - Easy to use interface
- ✅ **Efficient** - Good performance
- ✅ **ProgPoW support** - Compatible with Quai
- ✅ **Regular updates** - Active development

#### Cons:
- ❌ Developer fee
- ❌ Less AMD-specific optimization than TRM
- ❌ May have lower hashrate on AMD GPUs

#### Performance (RX 590):
- **Expected Hashrate:** ~8-10 MH/s
- **Power Efficiency:** Good
- **Stability:** Good

#### Fees:
- **Developer Fee:** Typically 0.5-1%

#### Best For:
- Beginners
- Users who prefer simple interfaces
- Those who want user-friendly options

---

### 5. WildRig Multi

**Repository:** https://github.com/andru-kun/wildrig-multi

#### Pros:
- ✅ **Extensive algorithm support** - Many algorithms
- ✅ **ProgPoW support** - Compatible with Quai
- ✅ **AMD optimized** - Good AMD support
- ✅ **Extensive configuration** - Many options

#### Cons:
- ❌ Developer fee
- ❌ More complex configuration
- ❌ May have lower performance than specialized miners

#### Performance (RX 590):
- **Expected Hashrate:** ~8-10 MH/s
- **Power Efficiency:** Good
- **Stability:** Good

#### Fees:
- **Developer Fee:** Typically 0.5-1%

#### Best For:
- Advanced users
- Those needing extensive configuration
- Multi-algorithm miners

---

## 📈 Performance Comparison Table

| Miner | Hashrate (RX 590) | Power Efficiency | Stability | Fees | Setup Difficulty |
|-------|------------------|------------------|-----------|------|------------------|
| **Quai GPU Miner** | ⭐⭐⭐⭐⭐ (10-12 MH/s) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | **0%** | ⭐⭐⭐ (Medium) |
| **Team Red Miner** | ⭐⭐⭐⭐⭐ (10-12 MH/s) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 0.5-1% | ⭐⭐ (Easy) |
| **SRBMiner-Multi** | ⭐⭐⭐⭐ (9-11 MH/s) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 0.5-1% | ⭐⭐ (Easy) |
| **Rigel** | ⭐⭐⭐ (8-10 MH/s) | ⭐⭐⭐ | ⭐⭐⭐⭐ | 0.5-1% | ⭐ (Very Easy) |
| **WildRig Multi** | ⭐⭐⭐ (8-10 MH/s) | ⭐⭐⭐ | ⭐⭐⭐ | 0.5-1% | ⭐⭐⭐ (Medium) |

---

## 🎯 Recommendations by Use Case

### Best for Maximum Efficiency (Zero Fees)
**→ Quai GPU Miner (Built from Source)**
- Build from source = 0% fees
- Quai-specific optimizations
- Best long-term choice for solo miners

### Best for Easy Setup
**→ Team Red Miner**
- Pre-built binaries
- Excellent AMD optimization
- Small dev fee (0.5-1%)
- Quick to deploy

### Best for Flexibility
**→ SRBMiner-Multi**
- Multiple algorithms
- Good for testing different coins
- Regular updates

### Best for Beginners
**→ Rigel**
- Easiest to use
- User-friendly interface
- Good documentation

---

## 💡 Solo Mining Specific Considerations

### 1. Direct Node Connection
- **Quai GPU Miner:** ✅ Native support via RPC or stratum proxy
- **Team Red Miner:** ✅ Supports `--no_stratum` for direct RPC
- **SRBMiner-Multi:** ✅ Supports direct node connection
- **Rigel:** ✅ Supports direct connection
- **WildRig Multi:** ✅ Supports direct connection

### 2. Merged Mining Support
Quai Network supports merged mining (mining multiple chains simultaneously):
- **Quai GPU Miner:** ✅ Full merged mining support
- **Team Red Miner:** ⚠️ May require configuration
- **Others:** ⚠️ Varies by implementation

### 3. Workshares Support
Quai's Workshares system for smoother rewards:
- **Quai GPU Miner:** ✅ Likely best support (official)
- **Others:** ⚠️ May vary

### 4. Locked Mining Rewards (LMR)
For enhanced rewards through locking:
- All miners should support this (network-level feature)

---

## 🔧 Hardware Optimization Compatibility

### AMD RX 590 Specific:

| Feature | Quai GPU Miner | Team Red Miner | SRBMiner-Multi |
|---------|---------------|----------------|----------------|
| OpenCL Optimization | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Memory Clock Sensitivity | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Power Efficiency | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Temperature Management | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 📊 Cost-Benefit Analysis

### Scenario: Mining 24/7 for 1 Month

**Assumptions:**
- Hashrate: 10 MH/s
- Power: 160W @ $0.10/kWh
- Monthly power cost: ~$11.52
- Network difficulty: Variable

**With Quai GPU Miner (0% fee):**
- All rewards go to you
- Best for long-term mining

**With Team Red Miner (1% fee):**
- 99% of rewards go to you
- Easier setup may save time

**Break-even Analysis:**
- If you value your time at $X/hour
- Building from source takes ~1-2 hours
- Team Red Miner setup takes ~15 minutes
- **If time saved > 1% of monthly rewards, TRM may be better**

---

## 🚀 Final Recommendation

### For Your Solo Mining Setup (AMD RX 590):

**Primary Recommendation: Quai GPU Miner (Built from Source)**

**Reasons:**
1. ✅ **Zero fees** - 100% of rewards
2. ✅ **Quai-specific optimizations** - Best performance
3. ✅ **Official support** - Regular updates
4. ✅ **Merged mining** - Can mine multiple chains
5. ✅ **Long-term viability** - Official miner

**Setup Steps:**
1. Use `build_quai_miner.sh` (already created)
2. Build from source
3. Configure for solo mining
4. Optimize GPU settings

**Alternative: Team Red Miner**

**Use if:**
- You want faster setup
- You don't mind 0.5-1% fee
- You want proven stability
- You prefer pre-built binaries

**Setup Steps:**
1. Use `setup_teamredminer.sh` (already created)
2. Configure for ProgPoW
3. Connect to local node
4. Optimize GPU settings

---

## 📝 Implementation Plan

### Phase 1: Test Both Options (Recommended)

1. **Week 1:** Test Team Red Miner
   - Quick setup
   - Measure hashrate, power, stability
   - Record performance metrics

2. **Week 2:** Build and test Quai GPU Miner
   - Build from source
   - Configure for solo mining
   - Measure same metrics

3. **Compare:**
   - Hashrate difference
   - Power consumption
   - Stability
   - Setup complexity
   - Fee impact

### Phase 2: Choose Based on Results

**Choose Quai GPU Miner if:**
- Hashrate is equal or better
- You're comfortable with source builds
- Long-term mining (fees add up)

**Choose Team Red Miner if:**
- Easier setup is valuable
- Performance is similar
- You prefer pre-built solutions

---

## 🔄 Migration Path

If you're currently using one miner and want to switch:

1. **Keep current miner running**
2. **Set up new miner in parallel**
3. **Test for 24-48 hours**
4. **Compare results**
5. **Switch if better**

---

## 📚 Additional Resources

- **Quai GPU Miner:** https://github.com/dominant-strategies/quai-gpu-miner
- **Team Red Miner:** https://github.com/todxx/teamredminer
- **Quai Documentation:** https://docs.v2.qu.ai
- **ProgPoW Algorithm:** https://github.com/ifdefelse/ProgPOW

---

## ⚠️ Important Notes

1. **Network Difficulty:** Solo mining success depends heavily on network difficulty
2. **Merged Mining:** Consider enabling merged mining for better rewards
3. **Workshares:** Quai's Workshares system helps smooth reward variance
4. **Updates:** Keep miners updated for best performance
5. **Monitoring:** Use monitoring tools to track performance

---

## 🎯 Quick Decision Matrix

**Choose Quai GPU Miner if:**
- ✅ You want zero fees
- ✅ You're comfortable building from source
- ✅ You plan to mine long-term
- ✅ You want Quai-specific features

**Choose Team Red Miner if:**
- ✅ You want quick setup
- ✅ You don't mind 0.5-1% fee
- ✅ You want proven stability
- ✅ You prefer pre-built binaries

**Bottom Line:** For maximum efficiency and rewards as a solo miner, **build Quai GPU Miner from source**. For convenience and proven performance, use **Team Red Miner**.

---

*Last Updated: Based on 2024 research and current Quai Network status*

