#!/usr/bin/bash

# Development server script with TypeScript watch mode
# Usage: ./run.sh [options]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_usage() {
    echo -e "${BLUE}Development Server${NC}"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --no-build        Skip TypeScript build and watch"
    echo "  --port <port>     Specify port (default: 3000)"
    echo "  --help, -h        Show this help message"
    echo ""
    echo "This script will:"
    echo "  1. Install dependencies if needed"
    echo "  2. Build TypeScript files"
    echo "  3. Start TypeScript watch mode"
    echo "  4. Start browser-sync development server"
    echo ""
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

    if ! command -v browser-sync &> /dev/null; then
        echo -e "${YELLOW}Installing browser-sync globally...${NC}"
        npm install -g browser-sync
    fi
}

setup_project() {
    cd "$SCRIPT_DIR"
    
    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
        echo -e "${YELLOW}Installing dependencies...${NC}"
        npm install
    fi
}

build_typescript() {
    cd "$SCRIPT_DIR"
    echo -e "${YELLOW}Building TypeScript files...${NC}"
    npm run build
}

start_watch_mode() {
    cd "$SCRIPT_DIR"
    echo -e "${YELLOW}Starting TypeScript watch mode...${NC}"
    npm run dev &
    TS_WATCH_PID=$!
}

start_dev_server() {
    local port=${1:-3000}
    cd "$SCRIPT_DIR"
    
    echo -e "${GREEN}Starting development server on port $port...${NC}"
    echo -e "${BLUE}Server will be available at: http://localhost:$port${NC}"
    echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"
    echo ""
    
    # Start browser-sync with better file watching
    browser-sync start \
        --server \
        --port "$port" \
        --files "**/*.html" "**/*.css" "dist/**/*.js" \
        --ignore "node_modules" \
        --no-notify \
        --no-open
}

cleanup() {
    echo -e "\n${YELLOW}Shutting down...${NC}"
    if [ ! -z "$TS_WATCH_PID" ]; then
        kill $TS_WATCH_PID 2>/dev/null || true
    fi
    exit 0
}

main() {
    local skip_build=false
    local port=3000
    
    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --no-build)
                skip_build=true
                shift
                ;;
            --port)
                port="$2"
                shift 2
                ;;
            --help|-h)
                print_usage
                exit 0
                ;;
            *)
                echo -e "${RED}Unknown option: $1${NC}"
                print_usage
                exit 1
                ;;
        esac
    done
    
    # Set up cleanup on exit
    trap cleanup EXIT INT TERM
    
    echo -e "${BLUE}Starting Resume Generator Development Environment...${NC}"
    echo ""
    
    check_dependencies
    setup_project
    
    if [ "$skip_build" = false ]; then
        build_typescript
        start_watch_mode
        sleep 2  # Give TypeScript watch mode time to start
    fi
    
    start_dev_server "$port"
}

main "$@"
