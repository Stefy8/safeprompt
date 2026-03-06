/**
 * SafePrompt - Japanese Language Patterns (Japanese)
 * Covers Japan PII patterns
 */

const SafePromptJA = {
  code: 'ja',
  name: 'Japanese',
  nativeName: 'Japanese',
  rtl: false,
  patterns: {
    // ── Identity ──────────────────────────────────────────────────────────
    identity: [
      {
        type: 'my_number_jp',
        label: 'My Number (Individual)',
        pattern: '\\b\\d{4}\\s?\\d{4}\\s?\\d{4}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['My Number', 'individual number', 'mynumber'],
        validate(v) {
          const digits = v.replace(/\s/g, '');
          if (digits.length !== 12) return false;
          // Check digit validation
          const weights = [6, 5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
          let sum = 0;
          for (let i = 0; i < 11; i++) {
            sum += parseInt(digits[i], 10) * weights[i];
          }
          const remainder = sum % 11;
          const check = remainder <= 1 ? 0 : 11 - remainder;
          return parseInt(digits[11], 10) === check;
        },
      },
      {
        type: 'corporate_number_jp',
        label: 'Corporate Number',
        pattern: '\\b[1-9]\\d{12}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['corporate number', 'company number', 'corporate'],
        contextRequired: true,
      },
      {
        type: 'passport_jp',
        label: 'Japanese Passport',
        pattern: '\\b[A-Z]{2}\\d{7}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['passport', 'passport number'],
        contextRequired: true,
      },
      {
        type: 'drivers_license_jp',
        label: 'Japanese Drivers License',
        pattern: '\\b\\d{12}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['driver', 'license', 'driving', 'licence'],
        contextRequired: true,
      },
      {
        type: 'zairyu_card_jp',
        label: 'Zairyu Card (Residence Card)',
        pattern: '\\b[A-Z]{2}\\d{8}[A-Z]{2}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['zairyu', 'residence card', 'foreigner'],
      },
    ],

    // ── Financial ─────────────────────────────────────────────────────────
    financial: [
      {
        type: 'bank_account_jp',
        label: 'Japanese Bank Account',
        pattern: '\\b\\d{7}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['bank', 'account', 'account number'],
        contextRequired: true,
      },
      {
        type: 'credit_card',
        label: 'Credit Card',
        pattern: '\\b(?:4\\d{3}|5[1-5]\\d{2}|3[47]\\d{2}|6(?:011|5\\d{2}))[- ]?\\d{4}[- ]?\\d{4}[- ]?\\d{1,4}\\b',
        flags: 'g',
        severity: 'critical',
        validate(v) {
          const digits = v.replace(/\D/g, '');
          if (digits.length < 13 || digits.length > 19) return false;
          let sum = 0, alt = false;
          for (let i = digits.length - 1; i >= 0; i--) {
            let n = parseInt(digits[i], 10);
            if (alt) { n *= 2; if (n > 9) n -= 9; }
            sum += n;
            alt = !alt;
          }
          return sum % 10 === 0;
        },
      },
    ],

    // ── Contact ───────────────────────────────────────────────────────────
    contact: [
      {
        type: 'email',
        label: 'Email',
        pattern: '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}',
        flags: 'gi',
        severity: 'high',
      },
      {
        type: 'phone_jp',
        label: 'Japanese Phone Number',
        pattern: '\\b(?:\\+?81[\\s.-]?)?0?[789]0[\\s.-]?\\d{4}[\\s.-]?\\d{4}\\b',
        flags: 'g',
        severity: 'high',
      },
      {
        type: 'postal_code_jp',
        label: 'Postal Code',
        pattern: '\\b\\d{3}-\\d{4}\\b',
        flags: 'g',
        severity: 'low',
        keywords: ['postal', 'zip', 'postcode'],
        contextRequired: true,
      },
    ],

    // ── Personal ─────────────────────────────────────────────────────────
    personal: [
      {
        type: 'dob_jp',
        label: 'Date of Birth',
        pattern: '\\b(?:19|20)\\d{2}[/\\-](?:0[1-9]|1[0-2])[/\\-](?:0[1-9]|[12]\\d|3[01])\\b',
        flags: 'g',
        severity: 'medium',
        keywords: ['birth', 'born', 'DOB', 'birthday'],
        contextRequired: true,
      },
    ],

    // ── Vehicle ──────────────────────────────────────────────────────────
    vehicle: [
      {
        type: 'plate_jp',
        label: 'Japanese Vehicle Plate',
        pattern: '\\b[\\u3041-\\u3096\\u30A1-\\u30FA]\\s?\\d{2,4}\\b',
        flags: 'g',
        severity: 'medium',
        keywords: ['plate', 'vehicle', 'car'],
        contextRequired: true,
      },
    ],

    // ── Credentials ──────────────────────────────────────────────────────
    credentials: [
      {
        type: 'password',
        label: 'Password',
        pattern: '(?:password|passwd|pwd)\\s*[:=]\\s*["\']?([^\\s"\']{4,})["\']?',
        flags: 'gi',
        severity: 'critical',
      },
    ],
  },
};

if (typeof window !== 'undefined') window.SafePromptJA = SafePromptJA;
if (typeof module !== 'undefined') module.exports = { SafePromptJA };
