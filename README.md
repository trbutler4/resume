# TypeScript Resume Generator

A modern, type-safe resume generation system built with TypeScript that allows you to easily customize your resume for different job types and requirements.

## Overview

This system separates your experience data from presentation using TypeScript modules, providing:
- Type-safe experience data management
- Configurable resume templates for various job types
- Automated build process with TypeScript compilation
- Development server with hot reloading
- Generated HTML resumes with one command

## Features

- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Modular Architecture**: Separate data, configs, and generation logic
- **Hot Reloading**: Development server with automatic rebuilds
- **Multiple Output Formats**: HTML generation with CSS styling
- **Extensible**: Easy to add new resume types and sections
- **CLI Tools**: Simple command-line interface for generation

## File Structure

```
resume/
├── types.ts                  # TypeScript type definitions
├── experience-data.ts        # All your experience data (TypeScript)
├── configs/                  # Resume configurations (TypeScript)
│   ├── index.ts             # Config exports and utilities
│   ├── blockchain.ts        # Blockchain/Web3 focused
│   ├── ai-ml.ts            # AI/ML focused
│   ├── mobile.ts           # Mobile development focused
│   ├── full-stack.ts       # General full-stack
│   └── suffix-labs.ts      # Consulting/founder focused
├── generate-resume.ts        # Resume generator (TypeScript)
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── generate.sh             # CLI wrapper script
├── run.sh                  # Development server script
├── global.css              # Styling
├── dist/                   # Compiled JavaScript output
└── resumes/               # Generated HTML resumes
```

## Quick Start

### Prerequisites

- Node.js (16.0.0 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
bun install

# Build TypeScript files (automatically runs after install)
bun run build
```

### Generate Resumes

```bash
bun generate
```
