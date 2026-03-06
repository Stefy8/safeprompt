# Privacy Policy - SafePrompt

**Last updated:** March 6, 2026

## Overview

SafePrompt is a browser extension that detects and blocks personally identifiable information (PII) before it is sent to AI chatbot platforms. SafePrompt is designed with privacy as its core principle.

## Data Collection

**SafePrompt does NOT collect, transmit, or store any user data.**

- No personal information is collected
- No browsing history is tracked
- No analytics or telemetry data is sent
- No cookies are set
- No data is sent to external servers

## How It Works

All processing happens **100% locally** in your browser:

1. Text is scanned for PII patterns using regex matching
2. Detected items are shown to you in a local warning banner
3. If you choose to redact, replacements happen in-browser memory
4. Token mappings are stored in browser memory only and auto-expire after 4 hours

## Data Storage

SafePrompt uses `chrome.storage.sync` and `chrome.storage.local` exclusively for:

- **User preferences** (sensitivity level, enabled languages, enabled categories)
- **Activity log** (count of detections per session, stored locally, never transmitted)
- **Allowlist** (user-defined values to ignore)
- **Disabled sites** (user-defined sites to skip)

No sensitive user content is ever stored. Only detection counts and metadata are logged.

## Permissions

SafePrompt requests the minimum permissions necessary:

| Permission | Purpose |
|-----------|---------|
| `storage` | Save user preferences and activity log locally |
| `activeTab` | Access the current tab to scan text on AI chatbot pages |
| `contextMenus` | Provide right-click "Mask" and "Scan" options |

SafePrompt does NOT request permissions for:
- Web requests or network access
- Browsing history
- Cookies
- Downloads
- Bookmarks

## Content Scripts

SafePrompt injects content scripts only on supported AI chatbot domains:
- chat.openai.com / chatgpt.com
- claude.ai
- gemini.google.com
- copilot.microsoft.com
- chat.deepseek.com
- perplexity.ai
- grok.x.ai
- poe.com
- chat.mistral.ai
- huggingface.co/chat

No scripts are injected on any other websites.

## Third-Party Services

SafePrompt does NOT communicate with any third-party services, APIs, or servers. There are zero external dependencies in the production code.

## Open Source

SafePrompt is fully open source under the GPL-3.0 license. Every line of code is publicly auditable at our GitHub repository.

## Children's Privacy

SafePrompt does not knowingly collect any information from children under 13.

## Changes to This Policy

Any changes to this privacy policy will be posted in the GitHub repository and reflected in extension updates.

## Contact

For questions about this privacy policy, please open an issue on our GitHub repository or contact us at https://www.aitechcx.com.
