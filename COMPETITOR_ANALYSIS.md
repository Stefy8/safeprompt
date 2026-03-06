# SafePrompt - Competitor Deep Analysis
## Last Updated: March 2026 (Enriched with live web research)

---

## MARKET CONTEXT (2025-2026)

### Critical Trust Crisis in AI Privacy Extensions
- **69% of AI-powered Chrome extensions pose high privacy risks** (Incogni 2026 study of 442 extensions)
- **8 million users' AI conversations harvested** by Urban VPN Proxy and related extensions posing as privacy tools
- **900,000 users compromised** by two Chrome extensions caught stealing ChatGPT and DeepSeek conversations (Jan 2026)
- **30+ Chrome extensions disguised as AI chatbots** (impersonating Claude, ChatGPT, Gemini, Grok) found stealing API keys and email data (Feb 2026)
- **"Prompt Poaching"** attack pattern identified: extensions exfiltrate conversations every 30 minutes via overridden fetch()/XMLHttpRequest()
- **52% of AI Chrome extensions collect user data** per security researchers

This trust crisis is SafePrompt's biggest strategic opportunity: being open-source and auditable is not just a feature -- it is the differentiator in a market where users cannot trust closed-source extensions.

---

## ALL COMPETITORS MAP

### Tier 1: Direct Competitors (Browser Extensions for AI PII Protection)

---

### 1. Caviard (caviard.ai)
**Type:** Closed Source | Free
**Chrome Web Store:** ~50,000+ users (per website claim). Rating not independently confirmed.
**Last Updated:** Active in 2025-2026 (blog posts through early 2026)

**Features:**
- 100+ PII types detected in real-time
- Complex regex patterns for detection (context-aware to reduce false positives)
- Format-friendly replacements (dates remain dates, numbers remain numbers)
- Two-way protection (masks prompts AND AI responses)
- One-click toggle (Alt+R / Option+R) between original and redacted text
- Consistent placeholder mapping within sessions
- 100% local processing, zero latency (0ms claimed)
- Auto-cleanup of temporary placeholders on schedule
- Free ($0 USD)

**Platforms:** ChatGPT, DeepSeek only

**Detection Methods:** Regex pattern matching, context-aware analysis

**Languages:** Claims to "understand different languages and layouts" but no specific multi-language support documented. Appears English-primary.

**Weaknesses:**
- NOT open source (cannot verify privacy claims)
- Only supports ChatGPT and DeepSeek (very limited platform coverage)
- No explicit multi-language support despite vague claims
- No custom patterns
- No community contribution model
- No activity log or export
- No file scanning
- No enterprise features
- Closed-source in a market where trust is paramount

---

### 2. ChatWall (chatwall.io)
**Type:** Source-available (GitHub: ChatWall-io/chatwall) | Freemium
**Chrome Web Store:** User count not publicly confirmed. Available on Chrome, Edge, Firefox (Safari under review).
**Last Updated:** 2025 (copyright notice)

**Features:**
- 25+ entity types detection (IBANs, SSNs, API keys, credit cards, passport numbers)
- Isolated processing: user types in secure ChatWall window that host website cannot access
- 100% local processing (browser version)
- Reversible unmask: AI responses with tokens auto-converted back to original values
- Manual masking with favorited patterns for future auto-detection
- Enterprise Docker deployment (ChatWall Box) with AI-powered anonymization
- LLM usage control, audit logs, budget tracking (enterprise)
- Connect to any model (public or local/RAG)
- GDPR compliance features
- Source code on GitHub for security audit

**Platforms:** ChatGPT, Gemini, Claude, Grok, Copilot, DeepSeek

**Detection Methods:** Local regex + NLP

**Languages:** English, French, Spanish, German, Italian, Portuguese, Dutch, Japanese, Korean (9 languages)

**Pricing:**
| Plan | Cost | Devices |
|------|------|---------|
| Free | 0 EUR | 1 device |
| Solo | 4.90 EUR/mo | 2 devices |
| Starter | 19 EUR/mo | 10 devices |
| Business | 49 EUR/mo | 30 devices |
| Plus | 79 EUR/mo | 50 devices |
| Pro | 149 EUR/mo | 100 devices |
| Ultimate | 499 EUR/mo | 500 devices |
Free tier: names, emails, phones, locations, dates, times only. Premium tokens: financial data, identity docs, security credentials.

**Weaknesses:**
- Source-available but NOT fully open source (license restrictions likely)
- Freemium model locks advanced detection behind paywall
- Free tier only covers basic PII types (financial/identity = paid)
- No Arabic or Chinese support
- Enterprise-focused pricing
- No community contribution model for patterns

---

### 3. PiiBlock / PrivacyShield (piiblock.com)
**Type:** Closed Source | Freemium
**Chrome Web Store:** Rating ~4.4/5. Low user count per chrome-stats.
**Last Updated:** Active 2025-2026

**Features:**
- 15+ PII types (names, addresses, credit cards, SSNs, API keys, phone numbers, emails, DOB, ages, salary, medical conditions, employers, bank accounts, passwords)
- 100% local processing, AES-256 encryption for data mappings
- Auto-masking for critical data, manual masking for soft PII
- Smart response unmasking with variant matching
- Right-click masking for missed items
- Personal dictionary (learns custom names/patterns)
- Auto-expiring encrypted data (4 hours or instant wipe)
- No account required, zero third-party scripts/telemetry/cookies
- Privacy score in extension popup
- 10-second install

**Platforms:** ChatGPT, Claude (Gemini, Perplexity, Mistral coming soon)

**Detection Methods:** Regex pattern matching

**Languages:** English only

**Pricing:**
- Free: Core detection, auto-masking, manual controls
- Pro: $4.99/month (coming soon) -- automatic soft-PII masking, smart strategies, privacy dashboard, multi-platform, per-site rules

**Weaknesses:**
- NOT open source (can't verify privacy claims despite strong claims)
- English only
- Only 2 platforms currently supported (ChatGPT, Claude)
- No file scanning
- No activity log
- Limited to 15+ PII types (vs 100+ for Caviard, 260+ for Cloak)
- No community contributions
- No enterprise features
- Pro tier not yet available

---

### 4. Cloak / cloak.business / anonym.legal
**Type:** Closed Source | Freemium/Enterprise
**Chrome Web Store:** NOT YET PUBLISHED (manual .zip install in developer mode)
**Last Updated:** Active 2025-2026

**Features:**
- 320+ entity types across 70+ countries (MOST comprehensive)
- 48 languages including RTL (Arabic, Hebrew, Persian, Urdu)
- 317 regex recognizers + NLP models (hybrid detection)
- Real-time message interception before transmission
- Preview modal to review and select anonymization method
- 5 anonymization options: Encrypt (reversible), Replace (fake data), Mask (partial), Redact (complete), Hash (SHA-256)
- Automatic response decryption with visual highlighting
- File anonymization (.txt, .md, .csv, .json, .xml)
- Compliance presets for GDPR, HIPAA, PCI-DSS
- Enterprise features: org-managed keys, custom entity patterns
- MCP integration (coding assistants)
- Microsoft Word integration

**Platforms:** ChatGPT, Claude, Gemini, DeepSeek, Perplexity, Abacus.ai. Chrome 96+, Edge, Brave.

**Detection Methods:** Hybrid -- 317 regex recognizers + NLP models

**Languages:** 48 languages including RTL scripts

**Pricing:**
- Free plan: 200 tokens/month
- Paid tiers: Not publicly disclosed (enterprise pricing)

**Weaknesses:**
- Chrome Extension NOT on Web Store (manual install only -- huge barrier)
- NOT open source
- Free tier severely limited (200 tokens/month)
- Requires API connection (not 100% local in full mode)
- Complex setup for non-technical users
- Enterprise-focused pricing
- No community contribution model
- Overkill for individual users

---

### 5. Lakera (lakera.ai)
**Type:** Open Source (Chrome extension code on GitHub) | Free
**Chrome Web Store:** 5.0/5 rating, 13 reviews. Low user count.
**Last Updated:** Active 2024-2025 (extension may be less actively maintained)

**Features:**
- Auto-detects and redacts sensitive info when pasting into AI tools
- Supported PII: credit card numbers, anglophone names, email addresses, phone numbers, US street addresses, US SSNs, secret keys
- Toggle individual detectors on/off via extension icon
- 100% local processing (nothing leaves machine)
- Open source code on GitHub (lakeraai/chrome-extension)
- No data storage

**Platforms:** ChatGPT primarily. Plans to extend to Google Bard/Gemini and other browsers.

**Detection Methods:** Regex pattern matching (local)

**Languages:** English only (anglophone names specifically mentioned)

**Pricing:** Free

**Weaknesses:**
- Very limited PII types (~7 categories only)
- ChatGPT-focused (limited multi-platform)
- English only (US-centric: US addresses, US SSNs)
- No smart unmasking
- No file scanning
- No activity log or dashboard
- No custom patterns
- Small user base (low adoption despite Lakera's enterprise brand)
- Enterprise Lakera Guard product is separate and paid
- May not be actively developed (extension seems secondary to enterprise product)

---

### 6. Privacy Protector for ChatGPT
**Type:** Closed Source | Free
**Chrome Web Store:** 5.0/5 rating. Low user count per chrome-stats.
**Last Updated:** Unknown (limited data)

**Features:**
- Anonymizes personal information before submitting to ChatGPT
- Customizable dictionary for replacement words
- Two modes: Automatic (notifications on sensitive words) and Manual (click to anonymize)
- All processing local -- dictionary never shared
- "Reverse words in Replies" feature to restore placeholders
- Free, no ads

**Platforms:** ChatGPT only

**Detection Methods:** Dictionary-based matching (user-defined word lists)

**Languages:** English (interface); dictionary approach could work for any language if user populates it

**Pricing:** Free

**Weaknesses:**
- ChatGPT ONLY (no Claude, Gemini, etc.)
- Dictionary-based = user must manually define sensitive words (no auto-detection)
- No regex or pattern matching (won't catch credit cards, SSNs automatically)
- Requires significant user setup effort
- No smart detection -- relies entirely on user-populated dictionary
- Very basic functionality
- Low adoption
- No file scanning, no activity log, no severity levels

---

### 7. Cloaked (cloaked.com)
**Type:** Closed Source | Paid (subscription)
**Chrome Web Store:** 4.6/5 rating, ~8,000+ active users
**Last Updated:** Active 2025-2026

**NOTE:** Cloaked is NOT a PII-detection-for-AI tool. It is a privacy identity management / password manager. Included here for completeness as it was requested, but it does NOT compete directly with SafePrompt.

**Features:**
- Generate unique email addresses, phone numbers, passwords, payment info per website
- Autofill across websites
- Call Guard (blocks scam/spam/robocalls)
- Dark web monitoring for personal data
- Data removal from 120+ data brokers
- Password management with import from other managers
- 2FA/OTP management
- $1M identity theft insurance (paid plans)

**Platforms:** General web (NOT AI-chatbot-specific)

**Detection Methods:** N/A (not a PII detection tool -- it generates aliases instead)

**Languages:** English

**Pricing:** $9.99/month billed annually ($119.99/year). Free tier for basic features.

**Weaknesses (as AI PII protection):**
- NOT an AI chat PII protection tool at all
- Does not detect or redact PII in AI prompts
- Does not intercept AI chatbot submissions
- Different category entirely (identity management vs PII detection)
- Expensive ($120/year)
- Reliability complaints: phone number issues, autofill failures, extension conflicts
- Dashboard complexity for non-technical users

---

### 8. DuckDuckGo Privacy Essentials
**Type:** Open Source (GitHub) | Free
**Chrome Web Store:** 4.2-4.3/5 rating, 5+ million users
**Last Updated:** Actively maintained 2026

**NOTE:** DuckDuckGo Privacy Essentials is NOT a PII-detection-for-AI tool. It is a general web privacy/tracker blocking extension. Included for completeness.

**Features:**
- Third-party tracker blocking (Google, Facebook trackers)
- Force HTTPS encryption
- Private search (DuckDuckGo search engine)
- Privacy Grade rating per website (A-F)
- Cookie pop-up management
- Email protection (hide-my-email aliases)
- Global Privacy Control signal

**Platforms:** General web browsing (NOT AI-specific)

**Detection Methods:** Tracker signature matching, not PII detection

**Languages:** Multiple (extension UI localized)

**Pricing:** Free

**Weaknesses (as AI PII protection):**
- Does NOT detect PII in user text/prompts at all
- Does NOT intercept AI chatbot submissions
- Does NOT redact sensitive data
- Different product category entirely (tracker blocking vs PII detection)
- No AI-specific features whatsoever

---

### 9. Ghostery
**Type:** Open Source (GitHub) | Free / Freemium
**Chrome Web Store:** 4.3/5 rating, 100M+ downloads, 7M monthly active users
**Last Updated:** Actively maintained 2026

**NOTE:** Ghostery is NOT a PII-detection-for-AI tool. It is a tracker/ad blocker. Included for completeness.

**Features:**
- Ad and tracker blocking
- Anti-tracking (replaces personal data with random values for trackers)
- Never-Consent (auto-denies cookie pop-ups)
- Detailed tracker panel per page
- Private search
- Open source

**Platforms:** Chrome, Firefox, Brave, Edge, Opera, Safari (general web)

**Detection Methods:** Tracker signature database, not PII detection

**Languages:** Multiple (UI localized)

**Pricing:** Free (premium features available)

**Weaknesses (as AI PII protection):**
- Does NOT detect PII in user text at all
- Does NOT intercept AI chatbot submissions
- Does NOT redact sensitive data from prompts
- Different product category entirely (ad/tracker blocking)
- No AI-specific features

---

### 10. PasteSecure (pastesecure.com)
**Type:** Closed Source | Freemium
**Platforms:** ChatGPT, Claude, Gemini, webforms, email

**Features:**
- Clipboard paste monitoring
- Real-time typing monitoring
- FILE SCANNING (.docx, .xlsx, .csv, .txt) -- UNIQUE among competitors
- Activity log (full redaction history)
- CSV export for compliance/auditing
- Global allowlist (whitelist specific strings)
- Mute function (pause for 3 minutes)
- Granular category toggles
- Credentials detection (username + password combos)

**Weaknesses:**
- NOT open source
- Freemium model
- English-focused
- No smart unmasking
- No multi-language support
- Limited platform coverage

---

### 11. LLM Guard Extension (llmguard.net)
**Type:** Open Source | Free
**Stars:** Small
**Platforms:** ChatGPT only (Claude, Gemini "coming soon")

**Features:**
- 10+ detection patterns (email, SSN, credit card, API keys, JWT, AWS, IP)
- Blocks submission + shows warning
- Enable/disable specific patterns
- Custom regex rules
- Custom keywords
- Adjustable severity levels
- Full config UI
- Zero telemetry
- Works on Chrome, Edge, Brave

**Weaknesses:**
- ChatGPT ONLY (no Claude, Gemini, etc.)
- English ONLY
- No smart unmasking (redact only, no restore)
- No file scanning
- No activity log
- No allowlist
- Basic UI
- Small community

---

### 12. ChatGPT Privacy Shield (redact.tools)
**Type:** Open Source | Free
**Platforms:** ChatGPT only

**Features:**
- Auto-redaction with smart placeholders
- Optional unmasking in chat
- 100% local processing
- Free Chrome extension
- Simple 5-step workflow

**Weaknesses:**
- ChatGPT ONLY
- English ONLY
- Limited PII types
- Basic functionality
- Small user base

---

### 13. Strac (strac.io)
**Type:** Closed Source | Enterprise
**Platforms:** ChatGPT (primary), multi-browser

**Features:**
- Real-time chat monitoring
- PII, PHI, PCI detection
- Code snippet detection
- Multiple modes: Audit, Alert, Block, Redact
- Corporate email enforcement
- Full interaction recording
- Chrome, Edge, Safari, Firefox
- Compliance-focused (HIPAA, SOC2, GDPR)
- 30-day free trial

**Weaknesses:**
- Enterprise-only pricing
- NOT open source
- Complex setup
- Requires corporate deployment
- Not for individual users

---

### 14. PromptSafe
**Type:** Closed Source | Free
**Platforms:** ChatGPT, Claude

**Features:**
- Extracts content locally from documents
- Detects sensitive data and replaces with readable placeholders like [PERSON_1], [COMPANY_2]
- 100% local processing

**Weaknesses:**
- Limited features
- Small user base
- No advanced features
- Limited platform support

---

### 15. PII Guardian
**Type:** Closed Source | Free
**Platforms:** ChatGPT, Claude, Gemini

**Features:**
- On-device AI model (runs in browser, no servers or API calls)
- Automatic PII masking before sending to AI
- AI-powered detection (not just regex)

**Weaknesses:**
- On-device AI model = larger extension size, higher resource usage
- Limited user base
- No custom patterns
- No activity log

---

## Tier 2: Developer Libraries (Not user-facing)

| Library | Stars | Languages | Local? | Note |
|---------|-------|-----------|--------|------|
| Microsoft Presidio | ~6K | English default, extensible | Yes | Server-side library, not browser |
| LLM Guard (Protect AI) | ~2.5K | English | Yes | Server middleware |
| Blindfold | Small | 86 entity types | Yes | SDK, not user-facing |
| NeMo Guardrails | Large | English | Yes | NVIDIA, server-side |

---

## Tier 3: General Privacy Extensions (NOT direct competitors)

These are tracker/ad blockers, NOT PII detection tools. They do NOT protect data entered into AI chatbots.

| Extension | Users | Rating | AI PII Detection? | Category |
|-----------|-------|--------|-------------------|----------|
| DuckDuckGo Privacy | 5M+ | 4.2/5 | NO | Tracker blocking |
| Ghostery | 7M MAU / 100M+ downloads | 4.3/5 | NO | Ad/tracker blocking |
| Cloaked | 8K+ | 4.6/5 | NO | Identity/password manager |

---

## CHROME WEB STORE METRICS SUMMARY (Verified Competitors)

| Extension | Rating | Users | Price | Open Source | Last Active |
|-----------|--------|-------|-------|-------------|-------------|
| Caviard | Unconfirmed | ~50K (claimed) | Free | No | 2026 |
| ChatWall | Unconfirmed | Unconfirmed | Freemium (0-499 EUR/mo) | Source-available | 2025 |
| PiiBlock/PrivacyShield | 4.4/5 | Low | Free / $4.99 Pro (soon) | No | 2025-2026 |
| Cloak/cloak.business | N/A (not on store) | N/A | 200 free tokens/mo | No | 2025-2026 |
| Lakera | 5.0/5 | Low (13 reviews) | Free | Yes (GitHub) | 2024-2025 |
| Privacy Protector for ChatGPT | 5.0/5 | Low | Free | No | Unknown |
| LLM Guard Extension | Unconfirmed | Small | Free | Yes | 2024-2025 |
| Strac | Unconfirmed | Enterprise | Paid | No | 2025-2026 |
| PasteSecure | Unconfirmed | Unconfirmed | Freemium | No | 2025 |

---

## FEATURE COMPARISON MATRIX

| Feature | SafePrompt | Caviard | ChatWall | PiiBlock | Cloak | Lakera | PasteSecure | Strac |
|---------|-----------|---------|----------|---------|-------|--------|-------------|-------|
| **CORE** | | | | | | | | |
| Open Source | YES | NO | Source-avail | NO | NO | YES | NO | NO |
| Free Forever | YES | YES | Freemium | Freemium | Freemium | YES | Freemium | PAID |
| 100% Local | YES | YES | YES* | YES | NO | YES | YES | NO |
| No Account | YES | YES | YES | YES | NO | YES | YES | NO |
| **DETECTION** | | | | | | | | |
| Entity Types | 50+ | 100+ | 25+ | 15+ | 320+ | ~7 | 15+ | 20+ |
| Languages | 5+ | 1 (vague) | 9 | 1 | 48 | 1 | 1 | 1 |
| Arabic | YES | NO | NO | NO | YES | NO | NO | NO |
| Chinese | YES | NO | NO | NO | YES | NO | NO | NO |
| Spanish | YES | NO | YES | NO | YES | NO | NO | NO |
| Custom Patterns | YES | NO | NO | NO | YES | NO | NO | NO |
| Detection Method | Regex+Context | Regex | Regex+NLP | Regex | Regex+NLP | Regex | Regex | Regex+ML |
| **PLATFORMS** | | | | | | | | |
| ChatGPT | YES | YES | YES | YES | YES | YES | YES | YES |
| Claude | YES | NO | YES | YES | YES | NO | YES | NO |
| Gemini | YES | NO | YES | Coming | YES | Planned | YES | NO |
| Copilot | YES | NO | YES | NO | NO | NO | NO | NO |
| DeepSeek | YES | YES | YES | Coming | YES | NO | NO | NO |
| Perplexity | YES | NO | NO | Coming | YES | NO | NO | NO |
| Platform Count | 6+ | 2 | 6 | 2 (5 soon) | 6 | 1 | 3 | 1 |
| **ACTIONS** | | | | | | | | |
| Block & Warn | YES | YES | YES | YES | YES | YES | YES | YES |
| Redact & Send | YES | YES | YES | YES | YES | NO | YES | YES |
| Smart Unmask | YES | YES | YES | YES | YES | NO | NO | NO |
| Edit & Retry | YES | NO | NO | NO | YES | NO | NO | NO |
| **UX** | | | | | | | | |
| Severity Levels | YES | NO | NO | YES | YES | NO | NO | YES |
| Dark Mode | YES | NO | YES | YES | YES | NO | NO | NO |
| RTL Support | YES | NO | NO | NO | YES | NO | NO | NO |
| Preview Modal | YES | NO | NO | NO | YES | NO | NO | NO |
| Badge Counter | YES | NO | NO | NO | NO | NO | NO | NO |
| **ADVANCED** | | | | | | | | |
| File Scanning | v2 | NO | NO | NO | YES (.txt,.csv,.json,.xml) | NO | YES (.docx,.xlsx,.csv,.txt) | NO |
| Activity Log | YES | NO | YES* | NO | NO | NO | YES | YES |
| Export Report | YES | NO | YES* | NO | NO | NO | YES | YES |
| Allowlist | YES | NO | NO | NO | YES | NO | YES | NO |
| Mute/Pause | YES | NO | NO | NO | NO | NO | YES | NO |
| Community Patterns | YES | NO | NO | NO | NO | NO | NO | NO |
| Stats Dashboard | YES | NO | NO | NO | NO | NO | NO | NO |
| **TRUST** | | | | | | | | |
| Auditable Code | YES | NO | Partial | NO | NO | YES | NO | NO |
| Min Permissions | YES | ? | ? | ? | NO | YES | ? | NO |
| No Telemetry | YES | YES | ? | YES | NO | YES | ? | NO |
| Security Policy | YES | ? | ? | ? | YES | NO | ? | YES |

* = Enterprise only

---

## UNIQUE FEATURES WE SHOULD BUILD (Not in any competitor)

### 1. Community Pattern Marketplace
No competitor allows community contributions. SafePrompt will have:
- GitHub-based pattern contributions via PRs
- Each language = separate file, easy to contribute
- Pattern quality scoring based on test coverage
- "Contributed by" credits in the extension

### 2. Privacy Score Dashboard
Show users their privacy protection stats:
- "You've protected 47 sensitive items this month"
- "3 credit cards, 12 emails, 8 phone numbers blocked"
- "Your most common exposure: email addresses"
- Shareable badge: "Protected by SafePrompt"

### 3. Smart Context Detection
Not just regex — understand CONTEXT:
- "my password is abc123" → detect password in sentence
- "call me at" + number → detect phone in context
- "born on" + date → detect DOB in context
- Works across all supported languages

### 4. Drag & Drop Quick Scan
Drag any text file onto the extension popup = instant scan
No need to paste into a chatbot first

### 5. Real-Time Typing Indicator
As user types, show a small colored dot:
- Green = no PII detected
- Yellow = low-severity PII
- Red = critical PII detected
Non-intrusive, always visible

### 6. Per-Platform Settings
Different sensitivity for different platforms:
- Claude: medium sensitivity
- ChatGPT: high sensitivity (trains on data)
- Local LLM: low sensitivity (stays on device)

### 7. Keyboard Shortcut Scan
Ctrl+Shift+S = scan clipboard before pasting
Quick protection without the full workflow

### 8. One-Click Privacy Report
Generate a PDF: "What data you almost shared with AI this month"
Useful for compliance, personal awareness

---

## COMPETITOR WEAKNESSES TO EXPLOIT

### 1. Trust Crisis (BIGGEST OPPORTUNITY)
- 69% of AI Chrome extensions pose high privacy risks (Incogni 2026)
- 52% of AI Chrome extensions collect user data
- 30+ malicious extensions caught stealing AI conversations in 2025-2026
- 8 million users had conversations harvested by "privacy" extensions
- Users literally cannot tell if a closed-source extension is protecting or harvesting them
- SafePrompt answer: **100% open source, minimal permissions, zero telemetry, auditable by anyone**
- Marketing angle: "Don't trust a privacy tool you can't read the code of"

### 2. Language Gap (CRITICAL DIFFERENTIATOR)
- Caviard: English only (vague multi-language claims, no specifics)
- PiiBlock: English only
- Lakera: English only (US-centric)
- Privacy Protector for ChatGPT: English only
- LLM Guard: English only
- PasteSecure: English only
- ChatWall: 9 European/Asian languages but NO Arabic, NO Chinese
- Only Cloak supports 48 languages BUT: not on Chrome Web Store, paid, closed source, 200 free tokens/month
- SafePrompt answer: **First FREE, OPEN SOURCE solution with Arabic, Chinese, Spanish, French support**
- 491M+ Arabic speakers have ZERO free PII protection for AI

### 3. Platform Coverage Gap
- Caviard: 2 platforms only (ChatGPT + DeepSeek)
- Lakera: 1 platform (ChatGPT only)
- Privacy Protector for ChatGPT: 1 platform (ChatGPT only)
- LLM Guard: 1 platform (ChatGPT only)
- PiiBlock: 2 platforms currently (ChatGPT + Claude)
- SafePrompt answer: **6+ platforms from day one**

### 4. Community Gap
- Zero competitors have community contribution models
- No extension allows users to submit patterns via GitHub PRs
- SafePrompt answer: **GitHub-driven community patterns, one file per language, easy to contribute**

### 5. Transparency Gap
- Caviard: closed source, claims 50K users but unverifiable
- PiiBlock: closed source, claims AES-256 but unverifiable
- ChatWall: source-available but license unclear
- Cloak: closed source, enterprise pricing
- SafePrompt answer: **Every line of code is auditable, MIT licensed**

### 6. Accessibility Gap
- Cloak: not on Chrome Web Store (manual dev-mode install)
- Most tools: English-only UI
- No competitor offers true RTL support for Arabic/Hebrew users
- SafePrompt answer: **Chrome Web Store from day one, RTL support, multilingual UI**

### 7. Feature Depth vs Simplicity
- Cloak: 320+ entity types but complex, enterprise-focused, requires tokens
- Caviard: simple but only 2 platforms
- PiiBlock: simple but English-only, limited platforms
- Lakera: very simple but only ~7 PII types
- SafePrompt answer: **50+ entity types, 6 platforms, 5 languages -- comprehensive yet simple**

---

## FEATURES PRIORITY FOR SafePrompt v1.0

### Must Have (Launch):
1. Multi-language PII detection (EN, AR, ES, FR, ZH)
2. Multi-platform support (6 AI chatbots)
3. Block & warn before sending
4. One-click redact & send
5. Smart unmasking (restore data in AI responses)
6. Severity levels (critical/high/medium/low)
7. Settings page (toggle languages, categories)
8. Dark mode + RTL support
9. Real-time typing indicator
10. Badge counter
11. 100% local, zero permissions beyond needed
12. Activity log (local storage only)

### Should Have (v1.1):
13. Allowlist (whitelist specific strings)
14. Mute/pause function
15. Custom regex patterns
16. Per-platform sensitivity settings
17. Keyboard shortcut (Ctrl+Shift+S)
18. Stats dashboard
19. Community pattern contributions guide

### Nice to Have (v2.0):
20. File scanning (.docx, .pdf, .csv)
21. Privacy report export (PDF/CSV)
22. Firefox + Edge versions
23. Context-aware NLP detection
24. Drag & drop quick scan
25. Browser notification on high-severity
