# Noteagotchi

A desktop app built with Tauri 2, SvelteKit, and TypeScript.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (v10+)
- [Rust](https://www.rust-lang.org/tools/install)

## Getting Started

```bash
# Ensure Rust toolchain is up to date
rustup update

# Install dependencies
pnpm install

# Run the desktop app in dev mode
pnpm dev
```

This starts the Vite dev server on port 1420 and opens the Tauri window.

## Commands

| Command      | Description                         |
| ------------ | ----------------------------------- |
| `pnpm dev`   | Run full desktop app in dev mode    |
| `pnpm build` | Build the final desktop application |
| `pnpm check` | Type-check TypeScript/Svelte        |

## Tech Stack

- **Tauri 2** - Desktop app framework (Rust backend)
- **SvelteKit** - Frontend framework
- **Tailwind CSS** - Styling
- **shadcn-svelte** - UI components
- **TypeScript** - Type safety

## IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
