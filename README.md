<<<<<<< HEAD
# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
=======
# rps-frontend
>>>>>>> 2439bcb3997d8a92439f5a032a7d51e4e2b5a1e6
# Rock Paper Scissors Frontend

This is the frontend part of the Rock Paper Scissors game, built with Vue.js. It communicates with a Laravel backend to create and manage game sessions, where players can interact with the game and view the summary once completed.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [API Integration](#api-integration)
4. [Development](#development)
5. [License](#license)

## Installation

### Prerequisites
- Node.js (>= 16.0)
- NPM (>= 7.0)
- Docker (optional, for containerized setup)

### Step-by-Step Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/raabrera/rps-frontend.git
   cd rps-frontend

2. **Install dependencies**

    ```bash
    npm install

3. **Create an .env file**

    ```bash
    cp .env.example .env
    VITE_API_BASE_URL=<your-backend-api-url>

4. **Run the application**

    ```bash
    npm run serve

    