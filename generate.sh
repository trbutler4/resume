#!/bin/bash

# Resume Generator CLI Script
# Usage: ./generate.sh [resume-type] [options]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GENERATOR_SCRIPT="$SCRIPT_DIR/dist/generate-resume.js"

# Available resume types
RESUME_TYPES=("blockchain" "ai-ml" "mobile" "full-stack" "suffix-labs")

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_usage() {
    echo -e "${BLUE}Resume Generator${NC}"
    echo ""
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo ""
    echo "Commands:"
    echo "  generate <type>    Generate a specific resume type"
    echo "  list              List available resume types"
    echo "  all               Generate all resume types"
    echo "  help              Show this help message"
    echo ""
    echo "Resume Types:"
    for type in "${RESUME_TYPES[@]}"; do
        echo "  - $type"
    done
    echo ""
    echo "Examples:"
    echo "  $0 generate blockchain"
    echo "  $0 generate ai-ml"
    echo "  $0 all"
    echo ""
}

list_types() {
    echo -e "${BLUE}Available Resume Types:${NC}"
    for type in "${RESUME_TYPES[@]}"; do
        echo -e "  ${GREEN}•${NC} $type"
    done
}

check_dependencies() {
    if ! command -v node &> /dev/null; then
        echo -e "${RED}Error: Node.js is required but not installed.${NC}"
        exit 1
    fi

    if ! command -v npm &> /dev/null; then
        echo -e "${RED}Error: npm is required but not installed.${NC}"
        exit 1
    fi

    # Install dependencies if node_modules doesn't exist
    if [ ! -d "$SCRIPT_DIR/node_modules" ]; then
        echo -e "${YELLOW}Installing dependencies...${NC}"
        cd "$SCRIPT_DIR" && npm install
    fi

    # Build TypeScript files
    echo -e "${YELLOW}Building TypeScript files...${NC}"
    cd "$SCRIPT_DIR" && npm run build

    if [ ! -f "$GENERATOR_SCRIPT" ]; then
        echo -e "${RED}Error: Generator script not found at $GENERATOR_SCRIPT after build${NC}"
        exit 1
    fi
}
</edits>

validate_resume_type() {
    local type="$1"
    for valid_type in "${RESUME_TYPES[@]}"; do
        if [ "$type" = "$valid_type" ]; then
            return 0
        fi
    done
    return 1
}

generate_resume() {
    local type="$1"

    mkdir -p resumes
    local output_file="resumes/resume-${type}.html"

    if ! validate_resume_type "$type"; then
        echo -e "${RED}Error: Invalid resume type '$type'${NC}"
        echo "Run '$0 list' to see available types."
        exit 1
    fi

    echo -e "${YELLOW}Generating $type resume...${NC}"

    if node "$GENERATOR_SCRIPT" "$type" "$output_file"; then
        echo -e "${GREEN}✓ Generated: $output_file${NC}"
    else
        echo -e "${RED}✗ Failed to generate $type resume${NC}"
        exit 1
    fi
}

generate_all() {
    echo -e "${BLUE}Generating all resume types...${NC}"
    echo ""

    for type in "${RESUME_TYPES[@]}"; do
        generate_resume "$type"
    done

    echo ""
    echo -e "${GREEN}✓ All resumes generated successfully!${NC}"
}

main() {
    check_dependencies

    case "${1:-help}" in
        "generate")
            if [ -z "$2" ]; then
                echo -e "${RED}Error: Resume type required${NC}"
                echo "Usage: $0 generate <type>"
                exit 1
            fi
            generate_resume "$2"
            ;;
        "list")
            list_types
            ;;
        "all")
            generate_all
            ;;
        "help"|"-h"|"--help")
            print_usage
            ;;
        *)
            if validate_resume_type "$1"; then
                generate_resume "$1"
            else
                echo -e "${RED}Error: Unknown command or resume type '$1'${NC}"
                echo ""
                print_usage
                exit 1
            fi
            ;;
    esac
}

main "$@"
