#!/bin/bash

# Interactive Mining Software Comparison Tool
# Helps you choose the best miner for your Quai solo mining setup

set -e

echo "=========================================="
echo "Quai Mining Software Comparison Tool"
echo "Find the Best Miner for Your Setup"
echo "=========================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# Questions
echo -e "${CYAN}Answer these questions to get a personalized recommendation:${NC}"
echo ""

# Question 1: Experience level
echo -e "${YELLOW}1. What's your experience level with building software from source?${NC}"
echo "   a) Beginner - prefer pre-built binaries"
echo "   b) Intermediate - comfortable with basic builds"
echo "   c) Advanced - comfortable with complex builds"
read -p "   Your choice (a/b/c): " EXP_LEVEL

# Question 2: Fee tolerance
echo ""
echo -e "${YELLOW}2. How do you feel about developer fees?${NC}"
echo "   a) Want zero fees - will build from source"
echo "   b) Acceptable - 0.5-1% is fine for convenience"
echo "   c) Don't care - just want best performance"
read -p "   Your choice (a/b/c): " FEE_TOLERANCE

# Question 3: Setup time
echo ""
echo -e "${YELLOW}3. How important is quick setup?${NC}"
echo "   a) Very important - want to start mining ASAP"
echo "   b) Moderate - can spend 1-2 hours setting up"
echo "   c) Not important - willing to spend time for best solution"
read -p "   Your choice (a/b/c): " SETUP_TIME

# Question 4: Long-term commitment
echo ""
echo -e "${YELLOW}4. How long do you plan to mine?${NC}"
echo "   a) Short-term - testing/learning (weeks to months)"
echo "   b) Medium-term - several months to a year"
echo "   c) Long-term - years of mining"
read -p "   Your choice (a/b/c): " COMMITMENT

# Question 5: Features importance
echo ""
echo -e "${YELLOW}5. How important are Quai-specific features (merged mining, workshares)?${NC}"
echo "   a) Not important - just want to mine"
echo "   b) Somewhat important - would be nice"
echo "   c) Very important - want all Quai features"
read -p "   Your choice (a/b/c): " FEATURES

# Calculate recommendation
echo ""
echo -e "${BLUE}Analyzing your answers...${NC}"
echo ""

SCORE_QUAI=0
SCORE_TRM=0
SCORE_SRBMINER=0

# Scoring logic
if [ "$EXP_LEVEL" = "c" ] || [ "$EXP_LEVEL" = "b" ]; then
    SCORE_QUAI=$((SCORE_QUAI + 2))
fi

if [ "$FEE_TOLERANCE" = "a" ]; then
    SCORE_QUAI=$((SCORE_QUAI + 3))
elif [ "$FEE_TOLERANCE" = "b" ]; then
    SCORE_TRM=$((SCORE_TRM + 2))
    SCORE_SRBMINER=$((SCORE_SRBMINER + 1))
fi

if [ "$SETUP_TIME" = "a" ]; then
    SCORE_TRM=$((SCORE_TRM + 3))
    SCORE_SRBMINER=$((SCORE_SRBMINER + 2))
elif [ "$SETUP_TIME" = "b" ]; then
    SCORE_QUAI=$((SCORE_QUAI + 1))
    SCORE_TRM=$((SCORE_TRM + 2))
fi

if [ "$COMMITMENT" = "c" ]; then
    SCORE_QUAI=$((SCORE_QUAI + 3))
elif [ "$COMMITMENT" = "b" ]; then
    SCORE_QUAI=$((SCORE_QUAI + 1))
    SCORE_TRM=$((SCORE_TRM + 2))
fi

if [ "$FEATURES" = "c" ]; then
    SCORE_QUAI=$((SCORE_QUAI + 3))
elif [ "$FEATURES" = "b" ]; then
    SCORE_QUAI=$((SCORE_QUAI + 1))
    SCORE_TRM=$((SCORE_TRM + 1))
fi

# Determine winner
if [ $SCORE_QUAI -ge $SCORE_TRM ] && [ $SCORE_QUAI -ge $SCORE_SRBMINER ]; then
    RECOMMENDED="Quai GPU Miner (Built from Source)"
    RECOMMENDED_DESC="Best for zero fees and Quai-specific features"
    SETUP_SCRIPT="build_quai_miner.sh"
elif [ $SCORE_TRM -ge $SCORE_SRBMINER ]; then
    RECOMMENDED="Team Red Miner"
    RECOMMENDED_DESC="Best for easy setup and proven performance"
    SETUP_SCRIPT="setup_teamredminer.sh"
else
    RECOMMENDED="SRBMiner-Multi"
    RECOMMENDED_DESC="Good alternative with flexibility"
    SETUP_SCRIPT="N/A"
fi

# Display recommendation
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}   Recommendation${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${CYAN}Best Choice for You:${NC}"
echo -e "  ${YELLOW}$RECOMMENDED${NC}"
echo -e "  $RECOMMENDED_DESC"
echo ""

# Show scores
echo -e "${BLUE}Score Breakdown:${NC}"
echo "  Quai GPU Miner: $SCORE_QUAI points"
echo "  Team Red Miner: $SCORE_TRM points"
echo "  SRBMiner-Multi: $SCORE_SRBMINER points"
echo ""

# Show next steps
echo -e "${GREEN}Next Steps:${NC}"
if [ "$RECOMMENDED" = "Quai GPU Miner (Built from Source)" ]; then
    echo "  1. Run: ./build_quai_miner.sh"
    echo "  2. Setup stratum proxy: ./setup_quai_stratum_proxy.sh"
    echo "  3. Configure for solo mining"
    echo "  4. Optimize: ./apply_optimal_settings.sh"
    echo ""
    echo "  See: build_quai_miner_from_source.md for details"
elif [ "$RECOMMENDED" = "Team Red Miner" ]; then
    echo "  1. Run: ./setup_teamredminer.sh"
    echo "  2. Configure: Edit teamredminer_config_examples/config_quai_solo.txt"
    echo "  3. Start: ./start_quai_solo_mining.sh"
    echo "  4. Optimize: ./apply_optimal_settings.sh"
    echo ""
    echo "  See: quai_solo_mining_setup.md for details"
else
    echo "  1. Visit: https://github.com/doktor83/SRBMiner-Multi"
    echo "  2. Download and configure for ProgPoW"
    echo "  3. Connect to your local Quai node"
    echo ""
    echo "  See: quai_mining_software_research.md for details"
fi

echo ""
echo -e "${YELLOW}Alternative Options:${NC}"
if [ "$RECOMMENDED" != "Quai GPU Miner (Built from Source)" ]; then
    echo "  • Quai GPU Miner: Zero fees, Quai-specific features"
    echo "    Setup: ./build_quai_miner.sh"
fi
if [ "$RECOMMENDED" != "Team Red Miner" ]; then
    echo "  • Team Red Miner: Easy setup, excellent AMD optimization"
    echo "    Setup: ./setup_teamredminer.sh"
fi

echo ""
echo -e "${CYAN}For detailed comparison, see: quai_mining_software_research.md${NC}"
echo ""

