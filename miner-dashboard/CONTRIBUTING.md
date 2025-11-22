# Contributing to Quai Mining Dashboard

Thank you for your interest in contributing! This is an open-source project that runs on Windows, Linux, and macOS.

## 🌍 Cross-Platform Development

This project is designed to work on multiple operating systems. When contributing:

### Platform Considerations

1. **File Paths**: Use `path.join()` instead of hardcoded paths
2. **Line Endings**: Git handles this automatically (LF for Unix, CRLF for Windows)
3. **Scripts**: Provide both `.sh` (Linux/macOS) and `.bat` (Windows) versions when possible
4. **Dependencies**: Ensure all npm packages work cross-platform
5. **Testing**: Test on multiple platforms if possible

### Code Style

- Use standard JavaScript (ES6+)
- Follow existing code style
- Add comments for complex logic
- Reference official Quai Network sources in comments

## 🚀 Development Setup

### Prerequisites

- Node.js 14+ (18+ recommended)
- npm 6+
- Git

### Setup Steps

```bash
# Clone repository
git clone <repository-url>
cd miner-dashboard

# Install dependencies
npm install

# Start development server
npm start
```

## 📝 Making Changes

1. **Fork the repository**
2. **Create a branch**: `git checkout -b feature/your-feature-name`
3. **Make changes**: Follow existing code style
4. **Test**: Ensure it works on your platform
5. **Commit**: Use clear commit messages
6. **Push**: `git push origin feature/your-feature-name`
7. **Create Pull Request**

## ✅ Testing Checklist

Before submitting:

- [ ] Code works on your platform
- [ ] No linter errors
- [ ] All file references are cross-platform
- [ ] Documentation updated if needed
- [ ] Comments reference official sources
- [ ] No hardcoded paths or OS-specific code

## 📚 Documentation

When adding features:

- Update README.md if needed
- Add comments in code
- Reference official Quai Network sources
- Update relevant docs in `docs/` folder

## 🐛 Reporting Issues

Include:
- Operating system and version
- Node.js version
- Steps to reproduce
- Error messages
- Expected vs actual behavior

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing!** 🎉

