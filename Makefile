.PHONY: install dev build test lint clean

# Run the development server
dev:
	@echo "Starting development server..."
	pnpm run dev

# Install dependencies
install:
	@echo "Installing dependencies..."
	pnpm install

# Build the Next.js application
build:
	@echo "Building the application..."
	pnpm run build

# Run tests
test:
	@echo "Running tests..."
	pnpm run test

# Lint the codebase
lint:
	@echo "Linting..."
	pnpm run lint

# Clean up the .next directory
clean:
	@echo "Cleaning up..."
	rm -rf .next

