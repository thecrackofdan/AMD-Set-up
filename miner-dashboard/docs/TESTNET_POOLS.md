# Quai Network Testnet Mining Pools

## Overview

Quai Network has transitioned from **Iron Age Testnet** to **Golden Age Testnet**. During Iron Age, centralized pools were not recommended, but with Golden Age, several options are available.

## Important Notes

⚠️ **Quai Network does not officially endorse any specific mining pools.** All pools are operated by third parties. Always do your own research before using any pool.

⚠️ **Testnet pools may be limited or unavailable.** Many pools focus on mainnet. You may need to:
- Use a DePool (decentralized pool) via a node operator
- Mine solo on testnet
- Check with pool operators for testnet availability

## Available Options

### 1. DePools (Decentralized Pools) ✅ Recommended

**DePools** are decentralized mining pools that allow miners to contribute hash power without centralized control. This is the recommended approach for testnet.

**How DePools Work:**
- Node operators enable DePool functionality
- Miners connect their hardware to nodes with DePool enabled
- Miners maintain control of their private keys
- Node operators earn fees from blocks mined by connected miners

**Setup:**
1. Find a node operator running DePool on testnet
2. Connect your miner to their node's stratum endpoint
3. Configure your miner with your wallet address
4. Start mining

**Benefits:**
- ✅ Decentralized (no single point of failure)
- ✅ You control your private keys
- ✅ Lower fees than traditional pools
- ✅ Works on both testnet and mainnet

**Documentation:** https://docs.qu.ai/guides/client/dePool

### 2. Third-Party Pools (Mainnet Focus)

The following pools are available for Quai Network, but **may not have testnet versions**:

| Pool | URL | Status |
|------|-----|--------|
| **AlphaPool** | https://alphapool.tech | Mainnet |
| **HeroMiners** | https://quai.herominers.com | Mainnet |
| **K1Pool** | https://k1pool.com/pool/quai | Mainnet |
| **Kryptex** | https://pool.kryptex.com/quai | Mainnet |
| **LuckyPool** | https://quai.luckypool.io | Mainnet |
| **Oula** | https://oula.network/en/pool | Mainnet |

**Note:** Contact pool operators directly to inquire about testnet availability.

### 3. Solo Mining (Testnet) ✅ Always Available

Solo mining is always available on testnet:
- Run your own testnet node
- Connect your miner directly to your node
- Mine blocks directly
- Receive 100% of block rewards

**Configuration:**
- Connect miner to your local node's RPC endpoint
- Use your Pelagus wallet address
- No pool fees

## Testnet Pool Configuration

### For Dashboard Configuration

If you find a testnet pool, update `config.js`:

```javascript
mining: {
    mode: 'pool', // Change from 'solo' to 'pool'
    // ...
},
api: {
    stratum: {
        enabled: true,
        url: 'stratum://testnet-pool.example.com:3333', // Testnet pool URL
        host: 'testnet-pool.example.com',
        port: 3333,
    }
}
```

### Example Stratum Configuration

**Format:** `stratum://POOL_HOST:PORT`

**Example:**
```
stratum://testnet.quai-pool.com:3333
```

**With Wallet Address:**
```
stratum://testnet.quai-pool.com:3333/YOUR_WALLET_ADDRESS
```

## Finding Testnet Pools

### 1. Check Official Resources
- **Quai Network Discord:** https://discord.gg/quai
- **Quai Network Docs:** https://docs.qu.ai
- **Community Forums:** Check for testnet pool announcements

### 2. Contact Pool Operators
- Reach out to mainnet pool operators
- Ask if they have testnet versions
- Check their documentation/websites

### 3. Use DePools
- Find node operators running DePools
- Connect to their testnet nodes
- This is the most reliable testnet option

## Recommended Approach for Testnet

### Option 1: Solo Mining (Easiest)
1. Run a testnet node locally
2. Connect miner to local node
3. Mine directly to your wallet
4. **Pros:** Simple, no pool fees, full control
5. **Cons:** Lower chance of finding blocks

### Option 2: DePool (Recommended)
1. Find a node operator with DePool enabled
2. Connect to their testnet node
3. Mine through their DePool
4. **Pros:** Decentralized, lower fees, you control keys
5. **Cons:** Need to find a DePool operator

### Option 3: Testnet Pool (If Available)
1. Find a pool with testnet support
2. Configure miner with pool stratum URL
3. Mine to pool, receive payouts
4. **Pros:** Regular payouts, shared rewards
5. **Cons:** May not exist, pool fees, less control

## Dashboard Pool Mode

The dashboard supports pool mining mode. To enable:

1. **Edit `config.js`:**
   ```javascript
   mining: {
       mode: 'pool', // Change to 'pool'
   }
   ```

2. **Configure Stratum:**
   ```javascript
   api: {
       stratum: {
           enabled: true,
           url: 'stratum://YOUR_POOL_HOST:PORT',
           host: 'YOUR_POOL_HOST',
           port: PORT,
       }
   }
   ```

3. **Update Dashboard:**
   - Dashboard will show "Pool Mining" badge
   - Pool statistics will display
   - Share acceptance/rejection tracking

## Current Status

**Testnet Pool Availability:** ⚠️ Limited

- ✅ **Solo Mining:** Always available
- ✅ **DePools:** Available (find node operators)
- ⚠️ **Traditional Pools:** May not have testnet versions

## Resources

- **Quai Network Docs:** https://docs.qu.ai
- **DePool Guide:** https://docs.qu.ai/guides/client/dePool
- **Mining Pools Guide:** https://docs.qu.ai/guides/miner/pools-software
- **Quai Network Discord:** https://discord.gg/quai
- **Testnet Faucet:** https://faucet.quai.network/

## Recommendation

For **testnet testing**, we recommend:

1. **Start with Solo Mining** - Simplest setup, works immediately
2. **Try DePool** - If you find a node operator with DePool
3. **Check for Testnet Pools** - Contact pool operators or check Discord

For **mainnet mining**, you have all the pool options listed above.

---

**Last Updated:** Based on Golden Age Testnet information
**Status:** Testnet pools may be limited - solo mining and DePools are most reliable

