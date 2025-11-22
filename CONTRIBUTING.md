# Contributing to QuaiMiner Core

Thank you for your interest in contributing to QuaiMiner Core! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/thecrackofdan/AMD-Set-up/issues)
2. If not, create a new issue using the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md)
3. Include as much detail as possible:
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Node.js version, GPU, etc.)
   - Screenshots or logs if applicable

### Suggesting Features

1. Check if the feature has already been suggested
2. Create a new issue using the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md)
3. Clearly describe the feature and why it would be useful

### Pull Requests

1. **Fork the repository**
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the coding standards
4. **Test your changes** thoroughly
5. **Update documentation** if needed
6. **Commit your changes** with clear messages:
   ```bash
   git commit -m "Add: Description of your feature"
   ```
7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Create a Pull Request** using the PR template

## Development Setup

### Prerequisites

- Node.js 14+ and npm
- Git
- A code editor (VS Code recommended)

### Setup Steps

1. Clone your fork:
   ```bash
   git clone https://github.com/your-username/AMD-Set-up.git
   cd AMD-Set-up
   ```

2. Review the project structure and documentation

## Coding Standards

### JavaScript/Node.js

- Use ES6+ features
- Follow existing code style
- Add comments for complex logic
- Keep functions focused and small
- Use meaningful variable names

### Git Commit Messages

- Use clear, descriptive messages
- Start with a verb (Add, Fix, Update, Remove, etc.)
- Keep the first line under 72 characters
- Add more details in the body if needed

Examples:
```
Add: Timeout handling for fetch requests
Fix: Dashboard not updating on network errors
Update: README with new installation steps
```

## Project Structure

```
.
├── index.html           # Landing page
├── dashboard/           # Simple HTML dashboard
├── *.sh                 # Setup and utility scripts
└── *.md                 # Documentation files
```

## Testing

Before submitting a PR:

1. Test your changes locally
2. Test scripts in a safe environment
3. Test on different browsers if UI changes
4. Verify all functionality works correctly

## Documentation

- Update README.md if adding new features
- Add comments to complex code
- Update CHANGELOG.md for significant changes
- Keep documentation clear and concise

## Questions?

- Open an issue for discussion
- Check existing documentation
- Review closed issues/PRs for similar work

Thank you for contributing to QuaiMiner Core! 🚀

