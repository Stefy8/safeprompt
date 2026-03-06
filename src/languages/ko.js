/**
 * SafePrompt - Korean Language Patterns (Korean)
 * Covers South Korea PII patterns
 */

const SafePromptKO = {
  code: 'ko',
  name: 'Korean',
  nativeName: 'Korean',
  rtl: false,
  patterns: {
    // ── Identity ──────────────────────────────────────────────────────────
    identity: [
      {
        type: 'rrn_kr',
        label: 'Resident Registration Number',
        pattern: '\\b\\d{6}[- ]?[1-4]\\d{6}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['resident', 'registration', 'RRN'],
        validate(v) {
          const digits = v.replace(/\D/g, '');
          if (digits.length !== 13) return false;
          // Check birth date validity
          const century = parseInt(digits[6], 10);
          if (century < 1 || century > 4) return false;
          // Checksum
          const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
          let sum = 0;
          for (let i = 0; i < 12; i++) {
            sum += parseInt(digits[i], 10) * weights[i];
          }
          const check = (11 - (sum % 11)) % 10;
          return parseInt(digits[12], 10) === check;
        },
      },
      {
        type: 'passport_kr',
        label: 'Korean Passport',
        pattern: '\\b[A-Z]{1,2}\\d{7}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['passport', 'passport number'],
        contextRequired: true,
      },
      {
        type: 'drivers_license_kr',
        label: 'Korean Drivers License',
        pattern: '\\b\\d{2}-\\d{2}-\\d{6}-\\d{2}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['driver', 'license', 'driving'],
      },
      {
        type: 'alien_registration_kr',
        label: 'Alien Registration Number',
        pattern: '\\b\\d{6}[- ]?[5-8]\\d{6}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['alien', 'registration', 'foreigner'],
      },
    ],

    // ── Financial ─────────────────────────────────────────────────────────
    financial: [
      {
        type: 'bank_account_kr',
        label: 'Korean Bank Account',
        pattern: '\\b\\d{3,4}-\\d{2,6}-\\d{2,6}\\b',
        flags: 'g',
        severity: 'critical',
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
      {
        type: 'brn_kr',
        label: 'Business Registration Number',
        pattern: '\\b\\d{3}-\\d{2}-\\d{5}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['business', 'registration', 'BRN', 'company'],
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
        type: 'phone_kr',
        label: 'Korean Phone Number',
        pattern: '\\b(?:\\+?82[\\s.-]?)?0?1[016789][\\s.-]?\\d{3,4}[\\s.-]?\\d{4}\\b',
        flags: 'g',
        severity: 'high',
      },
      {
        type: 'postal_code_kr',
        label: 'Postal Code',
        pattern: '\\b\\d{5}\\b',
        flags: 'g',
        severity: 'low',
        keywords: ['postal', 'zip', 'postcode'],
        contextRequired: true,
      },
    ],

    // ── Personal ─────────────────────────────────────────────────────────
    personal: [
      {
        type: 'dob_kr',
        label: 'Date of Birth',
        pattern: '\\b(?:19|20)\\d{2}[/\\-\\.](?:0[1-9]|1[0-2])[/\\-\\.](?:0[1-9]|[12]\\d|3[01])\\b',
        flags: 'g',
        severity: 'medium',
        keywords: ['birth', 'born', 'DOB', 'birthday'],
        contextRequired: true,
      },
    ],

    // ── Vehicle ──────────────────────────────────────────────────────────
    vehicle: [
      {
        type: 'plate_kr',
        label: 'Korean Vehicle Plate',
        pattern: '\\b\\d{2,3}[\\uAC00-\\uD7AF]\\s?\\d{4}\\b',
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

if (typeof window !== 'undefined') window.SafePromptKO = SafePromptKO;
if (typeof module !== 'undefined') module.exports = { SafePromptKO };
