SHELL := /bin/bash

.DEFAULT_GOAL := help

.PHONY: build
build: ## Build docker image
	docker build -t anemos:20 .

define deleteImage
	@id=$$(docker images -f "reference=$(1)" -q); [ -n "$$id" ] && { docker rmi $$id; :; } || echo "image not found: $(1)"
endef

.PHONY: rebuild
rebuild: ## Delete images and build docker image
	@$(call deleteImage,"anemos")
	@make -s build

.PHONY: up
up: ## Start the container
	docker compose up -d

.PHONY: down
down: ## Delete the container
	docker compose down

.PHONY: node
node: ## Enter node container
	docker compose exec node bash

.PHONY: npm-install
npm-install: ## Install packages
	docker compose exec node npm i

.PHONY: help
help: ## Display a list of targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
