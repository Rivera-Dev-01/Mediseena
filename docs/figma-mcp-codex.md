# Figma MCP with Codex CLI: Authentication Guide

How to use the Figma MCP server with OpenAI Codex CLI without repeating the browser OAuth flow.

## 1. Overview

The official Figma MCP server (`https://mcp.figma.com/mcp`) is a remote, OAuth-only
endpoint. It authenticates via OAuth 2.1 with mandatory PKCE and does **not** accept
Figma Personal Access Tokens (PATs).

There is no true "bypass" of that login. There are two practical paths:

- **Option A** — Run the OAuth flow once in Codex; the session is cached and never
  prompts again.
- **Option B** — Skip the official remote server entirely and use the community
  `figma-developer-mcp` stdio server, where auth is just a PAT. No browser flow at all.

## 2. How opencode connects (for context)

opencode is configured for Figma in the project's `opencode.json`:

```json
{
  "mcp": {
    "figma": {
      "type": "remote",
      "url": "https://mcp.figma.com/mcp",
      "enabled": true
    }
  }
}
```

After the first login, opencode caches the OAuth session in:

```
~/.local/share/opencode/mcp-auth.json
```

It stores the dynamic client registration (client id/secret) plus the
access/refresh tokens.

**Why this session cannot be reused by Codex:**

1. Codex stores MCP OAuth credentials in the OS keyring (Windows Credential
   Manager), not in a copyable JSON file.
2. The tokens are bound to opencode's OAuth client registration, so presenting
   them from a different client is rejected by Figma's authorization server.

## 3. Option A — Official OAuth (recommended)

Register the server and run the login flow once:

```powershell
codex mcp add figma --url https://mcp.figma.com/mcp
codex mcp login figma
```

A browser window opens; sign in to Figma and consent. Codex stores the session
in Windows Credential Manager. On every later use, Codex refreshes the access
token transparently — no further prompts.

Verify the connection:

```powershell
codex mcp list --json
```

The output includes an `auth_status` field per server; `authenticated` means
you are good to go.

To revoke the stored session:

```powershell
codex mcp logout figma
```

## 4. Option B — PAT-based stdio server (no browser)

The community `figma-developer-mcp` package supports a Personal Access Token
via the `FIGMA_API_KEY` environment variable. This avoids the OAuth dance
entirely.

### 4.1 Generate a PAT

1. Open Figma → **Settings → Security → Personal access tokens**.
2. Create a token with the minimal scopes you need:
   - `files:read` / `files:write` for design file access
   - `dev_resources:read` / `dev_resources:write` if you use Dev Resources
3. Copy the token (shown once, prefixed with `figd_`).

### 4.2 Configure Codex

Add to `~/.codex/config.toml`:

```toml
[mcp_servers.figma]
command = "npx"
args = ["-y", "figma-developer-mcp", "--stdio"]
env = { FIGMA_API_KEY = "figd_your_token_here" }
```

Set the PAT via an environment variable instead of hardcoding it:

```toml
[mcp_servers.figma]
command = "npx"
args = ["-y", "figma-developer-mcp", "--stdio"]
env = { FIGMA_API_KEY = "{env.FIGMA_API_KEY}" }
```

```powershell
$env:FIGMA_API_KEY = "figd_your_token_here"
```

## 5. Security notes

- Treat `mcp-auth.json`, `auth.json`, and PATs like passwords. Never commit them
  to a repository.
- Keep PAT scopes minimal (read-only unless you need writes) and rotate them
  periodically.
- On Windows, MCP OAuth tokens are stored in the OS keyring; uninstall or logout
  to clear them (`codex mcp logout figma`).
- The OAuth session is tied to the client that created it — sharing token files
  between tools does not work.