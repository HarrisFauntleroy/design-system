.PHONY: install dev build test lint clean

# Run the development server
dev:
	@echo "Starting development server..."
	bun run dev

# Install dependencies
install:
	@echo "Installing dependencies..."
	bun install

# Build the application
build:
	@echo "Building the application..."
	bun run build

# Run tests
test:
	@echo "Running tests..."
	bun run test

# Lint the codebase
lint:
	@echo "Linting..."
	bun run lint

# Clean up the node_modules directory
clean:
	@echo "Cleaning up..."
	rm -rf node_modules

