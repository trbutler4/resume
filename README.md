# Modular Resume System

A flexible, data-driven resume generation system that allows you to easily customize your resume for different job types and requirements.

## Overview

This system separates your experience data from presentation, allowing you to:
- Store all your experience in a centralized JSON file
- Create different resume configurations for various job types
- Generate tailored HTML resumes with one command
- Easily add, remove, or reorder sections based on job requirements

## File Structure

```
resume/
├── experience-data.json       # All your experience data
├── configs/                   # Resume configurations
│   ├── blockchain.json       # Blockchain/Web3 focused
│   ├── ai-ml.json           # AI/ML focused
│   ├── mobile.json          # Mobile development focused
│   └── full-stack.json      # General full-stack
├── generate-resume.js        # Resume generator script
├── generate.sh              # CLI wrapper script
├── global.css               # Styling (unchanged)
└── README.md               # This file
```

## Quick Start

### Generate a Specific Resume Type

```bash
# Generate blockchain-focused resume
./generate.sh blockchain

# Generate AI/ML-focused resume
./generate.sh ai-ml

# Generate mobile development resume
./generate.sh mobile

# Generate full-stack resume
./generate.sh full-stack
```

### Generate All Resume Types

```bash
./generate.sh all
```

### List Available Types

```bash
./generate.sh list
```

## Usage Examples

### Basic Commands

```bash
# Generate blockchain resume
./generate.sh generate blockchain

# Alternative shorter syntax
./generate.sh blockchain

# Generate all resumes at once
./generate.sh all
```

### Direct Node.js Usage

```bash
# Generate with custom output filename
node generate-resume.js blockchain resume-blockchain-custom.html

# Generate to stdout (no file created)
node generate-resume.js ai-ml
```

## Adding New Experience

### 1. Add to Experience Data

Edit `experience-data.json` and add your new experience to the appropriate section:

```json
{
  "workExperience": [
    {
      "id": "new-job-id",
      "position": "Software Engineer",
      "company": "New Company",
      "duration": "Jan 2024 - Present",
      "responsibilities": [
        "Built awesome software",
        "Led team of 5 engineers"
      ],
      "tools": ["Python", "React", "AWS"],
      "tags": ["backend", "leadership", "cloud"],
      "highlights": ["team leadership", "scalable architecture"]
    }
  ]
}
```

### 2. Update Resume Configurations

Add the new experience ID to relevant configuration files in `configs/`:

```json
{
  "workExperience": {
    "include": ["new-job-id", "existing-job-id"],
    "order": ["new-job-id", "existing-job-id"]
  }
}
```

## Creating New Resume Configurations

### 1. Create Configuration File

Create a new file in `configs/` directory (e.g., `configs/devops.json`):

```json
{
  "resumeType": "devops",
  "title": "Senior DevOps Engineer",
  "workExperience": {
    "include": ["job-id-1", "job-id-2"],
    "order": ["job-id-1", "job-id-2"]
  },
  "openSourceExperience": {
    "include": ["project-id-1"],
    "order": ["project-id-1"],
    "limit": 1
  },
  "projects": {
    "include": ["project-id-1", "project-id-2"],
    "order": ["project-id-1", "project-id-2"],
    "limit": 2
  },
  "education": {
    "include": ["university-iowa"]
  },
  "skillsToHighlight": [
    "Docker", "Kubernetes", "AWS", "Terraform"
  ],
  "sectionsOrder": [
    "workExperience",
    "projects",
    "openSourceExperience",
    "education"
  ],
  "emphasize": {
    "keywords": ["DevOps", "CI/CD", "infrastructure", "automation"],
    "metrics": ["99.9% uptime", "50% cost reduction"]
  }
}
```

### 2. Update Generate Script

Add the new resume type to `generate.sh`:

```bash
RESUME_TYPES=("blockchain" "ai-ml" "mobile" "full-stack" "devops")
```

## Configuration Options

### Section Control

- **include**: Array of IDs to include in the section
- **order**: Array defining the display order
- **limit**: Maximum number of items to show (optional)

### Text Emphasis

- **keywords**: Words to bold throughout the resume
- **metrics**: Specific metrics/numbers to emphasize

### Section Ordering

Control which sections appear and in what order:

```json
"sectionsOrder": [
  "workExperience",
  "openSourceExperience", 
  "projects",
  "education"
]
```

## Experience Data Structure

### Work Experience

```json
{
  "id": "unique-identifier",
  "position": "Job Title",
  "company": "Company Name",
  "duration": "Month Year - Month Year",
  "responsibilities": ["Bullet point 1", "Bullet point 2"],
  "tools": ["Tool1", "Tool2"],
  "tags": ["category1", "category2"],
  "highlights": ["key achievement 1"],
  "status": "optional"  // Optional: exclude unless specifically included
}
```

### Projects

```json
{
  "id": "project-id",
  "name": "Project Name",
  "link": "https://github.com/...",
  "description": "Project description",
  "achievements": ["Award won", "Recognition received"],
  "hackathonLink": "https://...",  // Optional
  "additionalInfo": "Extra details",  // Optional
  "tools": ["Tool1", "Tool2"],
  "tags": ["category1", "category2"],
  "highlights": ["key feature", "impressive metric"]
}
```

### Open Source Experience

```json
{
  "id": "oss-project-id",
  "position": "Role (Maintainer, Contributor, etc.)",
  "project": "Project Name",
  "duration": "Month Year - Present",
  "link": "https://github.com/...",
  "responsibilities": ["Contribution 1", "Contribution 2"],
  "tools": ["Tool1", "Tool2"],
  "tags": ["category1", "category2"],
  "highlights": ["community impact", "technical achievement"]
}
```

## Customization Tips

### For Different Job Types

1. **Blockchain/Web3**: Emphasize DeFi, smart contracts, cryptocurrencies
2. **AI/ML**: Highlight model performance, SOTA results, ML frameworks
3. **Mobile**: Focus on React Native, iOS/Android, mobile UX
4. **Full-Stack**: Balance frontend/backend, emphasize end-to-end ownership
5. **DevOps**: Infrastructure, CI/CD, monitoring, scalability

### Keyword Optimization

Use the `emphasize.keywords` array to bold important terms that match job descriptions:

```json
"emphasize": {
  "keywords": ["React", "TypeScript", "microservices", "AWS"],
  "metrics": ["99.9% uptime", "$1M+ cost savings"]
}
```

## Troubleshooting

### Common Issues

1. **Node.js not found**: Install Node.js from [nodejs.org](https://nodejs.org)
2. **Permission denied on generate.sh**: Run `chmod +x generate.sh`
3. **Invalid JSON**: Validate your JSON using [jsonlint.com](https://jsonlint.com)
4. **Missing experience**: Check that IDs in config match those in experience-data.json

### Validation

Check your JSON files are valid:

```bash
# Validate experience data
node -e "console.log('Valid JSON:', !!JSON.parse(require('fs').readFileSync('experience-data.json')))"

# Validate specific config
node -e "console.log('Valid JSON:', !!JSON.parse(require('fs').readFileSync('configs/blockchain.json')))"
```

## Development

### Adding New Features

The system is modular and extensible. Key areas for enhancement:

1. **New sections**: Add generators in `ResumeGenerator` class
2. **Styling**: Modify `global.css` or add section-specific styles
3. **Export formats**: Add PDF generation, LaTeX output, etc.
4. **Data validation**: Add JSON schema validation
5. **Web interface**: Create a GUI for easier editing

### Contributing

When adding new features:

1. Update `experience-data.json` with new data structure
2. Add corresponding configuration options
3. Update the generator script
4. Test with existing configurations
5. Update this README

## License

This is a personal resume system. Adapt and modify as needed for your own use.