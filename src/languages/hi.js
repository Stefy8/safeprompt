/**
 * SafePrompt - Hindi Language Patterns (Hindi)
 * Covers India PII patterns
 */

const SafePromptHI = {
  code: 'hi',
  name: 'Hindi',
  nativeName: 'Hindi',
  rtl: false,
  patterns: {
    // ── Identity ──────────────────────────────────────────────────────────
    identity: [
      {
        type: 'aadhaar_in',
        label: 'Aadhaar Number',
        pattern: '\\b\\d{4}\\s?\\d{4}\\s?\\d{4}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['aadhaar', 'aadhar', 'UID', 'UIDAI', 'aadhaar number', 'aadhar card'],
        validate(v) {
          const digits = v.replace(/\s/g, '');
          if (digits.length !== 12) return false;
          // Aadhaar never starts with 0 or 1
          if (digits[0] === '0' || digits[0] === '1') return false;
          // All same digits check
          if (/^(\d)\1+$/.test(digits)) return false;
          return true;
        },
      },
      {
        type: 'pan_in',
        label: 'PAN Card Number',
        pattern: '\\b[A-Z]{5}\\d{4}[A-Z]\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['PAN', 'PAN card', 'permanent account', 'PAN number'],
        validate(v) {
          // 4th char indicates holder type: C,P,H,F,A,T,B,L,J,G
          return /^[A-Z]{3}[CPHFATBLJG][A-Z]\d{4}[A-Z]$/.test(v);
        },
      },
      {
        type: 'passport_in',
        label: 'Indian Passport',
        pattern: '\\b[A-Z][1-9]\\d{6}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['passport', 'passport number', 'passport no'],
        contextRequired: true,
      },
      {
        type: 'voter_id_in',
        label: 'Voter ID (EPIC)',
        pattern: '\\b[A-Z]{3}\\d{7}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['voter', 'voter ID', 'EPIC', 'election card', 'voter card'],
        contextRequired: true,
      },
      {
        type: 'drivers_license_in',
        label: 'Indian Driving License',
        pattern: '\\b[A-Z]{2}\\d{2}\\s?(?:19|20)\\d{2}\\d{7}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['driving license', 'DL', 'driver license', 'licence'],
        contextRequired: true,
      },
    ],

    // ── Financial ─────────────────────────────────────────────────────────
    financial: [
      {
        type: 'ifsc_in',
        label: 'IFSC Code',
        pattern: '\\b[A-Z]{4}0[A-Z0-9]{6}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['IFSC', 'bank', 'branch code', 'IFSC code'],
      },
      {
        type: 'upi_in',
        label: 'UPI ID',
        pattern: '[a-zA-Z0-9.\\-_]+@[a-zA-Z]{2,}',
        flags: 'g',
        severity: 'high',
        keywords: ['UPI', 'UPI ID', 'GPay', 'PhonePe', 'Paytm', 'BHIM'],
        contextRequired: true,
      },
      {
        type: 'gst_in',
        label: 'GSTIN',
        pattern: '\\b\\d{2}[A-Z]{5}\\d{4}[A-Z][A-Z0-9]Z[A-Z0-9]\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['GST', 'GSTIN', 'GST number', 'tax'],
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
        type: 'phone_in',
        label: 'Indian Phone Number',
        pattern: '\\b(?:\\+?91[\\s.-]?)?[6-9]\\d{4}[\\s.-]?\\d{5}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['phone', 'mobile', 'cell'],
      },
      {
        type: 'pincode_in',
        label: 'PIN Code',
        pattern: '\\b[1-9]\\d{5}\\b',
        flags: 'g',
        severity: 'low',
        keywords: ['PIN code', 'pincode', 'postal code', 'zip'],
        contextRequired: true,
      },
    ],

    // ── Personal ─────────────────────────────────────────────────────────
    personal: [
      {
        type: 'dob_in',
        label: 'Date of Birth',
        pattern: '\\b(?:0[1-9]|[12]\\d|3[01])[/\\-](?:0[1-9]|1[0-2])[/\\-](?:19|20)\\d{2}\\b',
        flags: 'g',
        severity: 'medium',
        keywords: ['DOB', 'birth', 'born', 'date of birth', 'birthday'],
        contextRequired: true,
      },
    ],

    // ── Vehicle ──────────────────────────────────────────────────────────
    vehicle: [
      {
        type: 'plate_in',
        label: 'Indian Vehicle Registration',
        pattern: '\\b[A-Z]{2}\\s?\\d{1,2}\\s?[A-Z]{1,3}\\s?\\d{4}\\b',
        flags: 'g',
        severity: 'medium',
        keywords: ['vehicle', 'registration', 'plate', 'number plate', 'RC'],
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

if (typeof window !== 'undefined') window.SafePromptHI = SafePromptHI;
if (typeof module !== 'undefined') module.exports = { SafePromptHI };
