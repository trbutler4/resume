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
npm install

# Build TypeScript files (automatically runs after install)
npm run build
```

### Generate Resumes

```bash
# Generate specific resume type
./resume-gen generate blockchain
./resume-gen generate ai-ml
./resume-gen generate mobile
./resume-gen generate full-stack
./resume-gen generate suffix-labs

# Generate all resume types
./resume-gen all

# List available types
./resume-gen list
```

### Development Mode

```bash
# Start development server with TypeScript watch mode
./resume-gen dev

# Start development server on custom port
./resume-gen dev --port 8080

# Skip TypeScript build (use existing compiled files)
./resume-gen dev --no-build
```
</text>

<old_text>
## NPM Scripts

```bash
# Build TypeScript to JavaScript
npm run build

# Watch mode for development
npm run dev

# Generate resume (requires build first)
npm run generate

# Type checking without compilation
npm run type-check

# Clean build output
npm run clean
```

## NPM Scripts

```bash
# Build TypeScript to JavaScript
npm run build

# Watch mode for development
npm run dev

# Generate resume (requires build first)
npm run generate

# Type checking without compilation
npm run type-check

# Clean build output
npm run clean
```

## Usage Examples

### Basic Commands

```bash
# Generate blockchain resume
./resume-gen generate blockchain

# Alternative shorter syntax
./resume-gen gen blockchain

# Generate all resumes at once
./resume-gen all

# Development with hot reloading
./resume-gen dev
```

### Advanced Usage

```bash
# Generate with custom output directory
./resume-gen generate blockchain --output ./output

# Generate all resumes in custom directory
./resume-gen all --output ./my-resumes

# Development server on custom port
./resume-gen dev --port 8080

# Skip build step (use existing compiled files)
./resume-gen generate ai-ml --no-build

# Clean specific files
./resume-gen clean --resumes
./resume-gen clean --build
./resume-gen clean --all
```

### Direct Node.js Usage After Build

```bash
# Build first
npm run build

# Use the CLI directly
node dist/cli.js generate blockchain

# Or use the resume generator directly
node dist/generate-resume.js blockchain custom-output.html
```
</text>

<old_text>
├── generate-resume.ts        # Resume generator (TypeScript)
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── generate.sh             # CLI wrapper script
├── run.sh                  # Development server script
├── global.css              # Styling
├── dist/                   # Compiled JavaScript output
└── resumes/               # Generated HTML resumes
</text>
<new_text>
├── cli.ts                   # TypeScript CLI tool (main interface)
├── generate-resume.ts       # Resume generator (TypeScript)
├── package.json            # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── resume-gen             # Executable CLI wrapper script
├── global.css             # Styling
├── dist/                  # Compiled JavaScript output
└── resumes/              # Generated HTML resumes
</text>

<old_text>
### Making Changes

1. **Edit TypeScript files**: Update `experience-data.ts` or config files
2. **Type checking**: Run `npm run type-check` to verify types
3. **Build**: Run `npm run build` to compile
4. **Test**: Generate resumes to verify changes
5. **Development**: Use `./run.sh` for live reloading

## TypeScript Development

### Type Definitions

The system uses comprehensive TypeScript types defined in `types.ts`:

```typescript
interface WorkExperience {
  id: string;
  position: string;
  company: string;
  duration: string;
  responsibilities: string[];
  tools: string[];
  status?: 'optional';
}

interface ResumeConfig {
  resumeType: string;
  title: string;
  workExperience: SectionConfig;
  openSourceExperience: SectionConfig;
  projects: SectionConfig;
  education: EducationConfig;
  skillsToHighlight: string[];
  sectionsOrder: SectionName[];
  emphasize: EmphasizeConfig;
}
```

### Adding New Experience

#### 1. Update Experience Data

Edit `experience-data.ts` and add your new experience:

```typescript
import { ExperienceData } from './types';

export const experienceData: ExperienceData = {
  workExperience: [
    {
      id: "new-job-id",
      position: "Software Engineer",
      company: "New Company",
      duration: "Jan 2024 - Present",
      responsibilities: [
        "Built awesome software",
        "Led team of 5 engineers"
      ],
      tools: ["Python", "React", "AWS"]
    },
    // ... existing experiences
  ],
  // ... other sections
};
```

#### 2. Update Resume Configurations

Add the new experience ID to relevant configuration files in `configs/`:

```typescript
import { ResumeConfig } from '../types';

export const blockchainConfig: ResumeConfig = {
  workExperience: {
    include: ["new-job-id", "existing-job-id"],
    order: ["new-job-id", "existing-job-id"]
  },
  // ... other config
};
```

### Creating New Resume Configurations

#### 1. Create Configuration File

Create a new file in `configs/` directory (e.g., `configs/devops.ts`):

```typescript
import { ResumeConfig } from '../types';

export const devopsConfig: ResumeConfig = {
  resumeType: "devops",
  title: "Senior DevOps Engineer",
  workExperience: {
    include: ["job-id-1", "job-id-2"],
    order: ["job-id-1", "job-id-2"]
  },
  openSourceExperience: {
    include: ["project-id-1"],
    order: ["project-id-1"],
    limit: 1
  },
  projects: {
    include: ["project-id-1", "project-id-2"],
    order: ["project-id-1", "project-id-2"],
    limit: 2
  },
  education: {
    include: ["university-iowa"]
  },
  skillsToHighlight: [
    "Docker", "Kubernetes", "AWS", "Terraform"
  ],
  sectionsOrder: [
    "workExperience",
    "projects",
    "openSourceExperience",
    "education"
  ],
  emphasize: {
    keywords: [],
    metrics: ["99.9% uptime", "50% cost reduction"]
  }
};
```

#### 2. Export from Index

Update `configs/index.ts`:

```typescript
import { devopsConfig } from './devops';

export { devopsConfig };

export const configs: Record<string, ResumeConfig> = {
  'devops': devopsConfig,
  // ... existing configs
};
```

#### 3. Update Generate Script

Add the new resume type to `generate.sh`:

```bash
RESUME_TYPES=("blockchain" "ai-ml" "mobile" "full-stack" "suffix-labs" "devops")
```

## Configuration Options

### Section Control

```typescript
interface SectionConfig {
  include: string[];        // Array of IDs to include
  order: string[];         // Array defining display order  
  limit?: number;          // Maximum number of items (optional)
}
```

### Text Emphasis

```typescript
interface EmphasizeConfig {
  keywords: string[];      // Words to bold throughout the resume
  metrics: string[];       // Specific metrics/numbers to emphasize
}
```

### Section Ordering

```typescript
type SectionName = 'workExperience' | 'openSourceExperience' | 'projects' | 'education';

// Control which sections appear and in what order
sectionsOrder: SectionName[] = [
  "workExperience",
  "openSourceExperience", 
  "projects",
  "education"
]
```

## Data Structure Reference

### Work Experience

```typescript
interface WorkExperience {
  id: string;              // Unique identifier
  position: string;        // Job title
  company: string;         // Company name
  duration: string;        // "Month Year - Month Year"
  responsibilities: string[]; // Bullet points
  tools: string[];         // Technologies used
  status?: 'optional';     // Exclude unless specifically included
}
```

### Projects

```typescript
interface Project {
  id: string;              // Unique identifier
  name: string;            // Project name
  link: string;            // GitHub/demo URL
  description: string;     // Project description
  achievements?: string[]; // Awards, recognition
  hackathonLink?: string;  // Optional hackathon submission
  additionalInfo?: string; // Extra details
  tools: string[];         // Technologies used
}
```

### Open Source Experience

```typescript
interface OpenSourceExperience {
  id: string;              // Unique identifier
  position: string;        // Role (Maintainer, Contributor, etc.)
  project: string;         // Project name
  duration: string;        // "Month Year - Present"
  link: string;            // GitHub URL
  responsibilities: string[]; // Contributions
  tools: string[];         // Technologies used
}
```

### Education

```typescript
interface Education {
  id: string;              // Unique identifier
  institution: string;     // University/school name
  degree: string;          // Degree type and major
}
```

## Development Workflow

### Making Changes

1. **Edit TypeScript files**: Update `experience-data.ts` or config files
2. **Type checking**: Run `npm run type-check` to verify types
3. **Build**: Run `npm run build` to compile
4. **Test**: Generate resumes to verify changes
5. **Development**: Use `./run.sh` for live reloading

### Adding New Sections

1. **Update types**: Add new interfaces in `types.ts`
2. **Update data**: Add new section to `ExperienceData` interface and data
3. **Update generator**: Add new generation method in `ResumeGenerator` class
4. **Update configs**: Add section configuration options
5. **Test**: Verify all existing configs still work

### Debugging

#### TypeScript Errors

```bash
# Check for TypeScript errors
npm run type-check

# Build with detailed error output
npx tsc --noEmit --pretty
```

#### Runtime Issues

```bash
# Build and run with verbose output
npm run build
node dist/generate-resume.js blockchain
```

## Customization for Job Types

### Blockchain/Web3
- Emphasize: DeFi, smart contracts, Web3 integration
- Tools: Solidity, Cairo, Ethereum, Starknet
- Metrics: TVL, transaction volume, security audits

### AI/ML
- Emphasize: Model performance, SOTA results, research
- Tools: PyTorch, TensorFlow, Hugging Face
- Metrics: Accuracy improvements, model efficiency

### Mobile Development  
- Emphasize: Cross-platform, native performance, UX
- Tools: React Native, Swift, Kotlin, Flutter
- Metrics: App store ratings, download numbers

### Full-Stack
- Emphasize: End-to-end ownership, system design
- Tools: React, Node.js, databases, cloud platforms
- Metrics: System scalability, performance improvements

## Troubleshooting

### Common Issues

#### TypeScript Compilation Errors
```bash
# Clean and rebuild
./resume-gen clean --build
npm run build

# Check for type errors
npm run type-check
```

#### Missing Dependencies
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

#### File Permission Issues
```bash
# Make CLI script executable
chmod +x resume-gen
```

#### Port Already in Use
```bash
# Use different port for development server
./resume-gen dev --port 8080
```

#### CLI Not Working
```bash
# Check project status
./resume-gen info

# Rebuild and try again
npm run build
./resume-gen list
```
</antml_text>

<old_text>
### Validation

```bash
# Type checking
npm run type-check

# Test all config types
./generate.sh all

# Verify build output
ls -la dist/
```

### Validation

```bash
# Type checking
npm run type-check

# Test all config types
./generate.sh all

# Verify build output
ls -la dist/
```

## Contributing

### Development Setup

1. Fork the repository
2. Install dependencies: `npm install`
3. Make changes to TypeScript files
4. Run type checking: `npm run type-check`
5. Test generation: `./resume-gen all`
6. Submit pull request
</antml_text>

<old_text>
## License

This is a personal resume system built with TypeScript. Adapt and modify as needed for your own use.

### Code Style

- Use TypeScript strict mode
- Provide comprehensive type definitions
- Follow consistent naming conventions
- Add JSDoc comments for complex functions
- Test all configuration types

### Adding Features

When adding new features:

1. **Update types**: Define TypeScript interfaces
2. **Update data structure**: Modify `experience-data.ts`
3. **Add configuration options**: Update config interfaces
4. **Update generator**: Modify `ResumeGenerator` class
5. **Test thoroughly**: Verify all existing configs work
6. **Update documentation**: Modify this README

## License

This is a personal resume system built with TypeScript. Adapt and modify as needed for your own use.