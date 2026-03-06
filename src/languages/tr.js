/**
 * SafePrompt - Turkish Language Patterns (Turkce)
 * Covers Turkey PII patterns
 */

const SafePromptTR = {
  code: 'tr',
  name: 'Turkish',
  nativeName: 'Turkce',
  rtl: false,
  patterns: {
    // ── Kimlik (Identity) ──────────────────────────────────────────────────
    identity: [
      {
        type: 'tc_kimlik',
        label: 'TC Kimlik Numarasi',
        pattern: '\\b[1-9]\\d{10}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['TC', 'kimlik', 'TC kimlik', 'kimlik numarasi', 'TC no', 'vatandaslik'],
        validate(v) {
          if (v.length !== 11) return false;
          if (v[0] === '0') return false;
          const d = v.split('').map(Number);
          // Turkish ID checksum algorithm
          const odd = d[0] + d[2] + d[4] + d[6] + d[8];
          const even = d[1] + d[3] + d[5] + d[7];
          const check10 = (odd * 7 - even) % 10;
          if (check10 < 0) return false;
          if (d[9] !== check10) return false;
          const sum = d[0] + d[1] + d[2] + d[3] + d[4] + d[5] + d[6] + d[7] + d[8] + d[9];
          return d[10] === sum % 10;
        },
      },
      {
        type: 'passport_tr',
        label: 'Pasaport Numarasi',
        pattern: '\\b[A-Z]\\d{7}\\b',
        flags: 'g',
        severity: 'critical',
        keywords: ['pasaport', 'passport', 'pasaport no', 'pasaport numarasi'],
        contextRequired: true,
      },
      {
        type: 'drivers_license_tr',
        label: 'Surucu Belgesi',
        pattern: '\\b\\d{6}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['ehliyet', 'surucu belgesi', 'surucu', 'ehliyet no', 'driving license'],
        contextRequired: true,
      },
    ],

    // ── Finans (Financial) ─────────────────────────────────────────────────
    financial: [
      {
        type: 'iban_tr',
        label: 'IBAN (Turkiye)',
        pattern: '\\bTR\\d{2}\\s?\\d{4}\\s?\\d{4}\\s?\\d{4}\\s?\\d{4}\\s?\\d{4}\\s?\\d{2}\\b',
        flags: 'gi',
        severity: 'critical',
        keywords: ['IBAN', 'hesap', 'banka hesabi', 'hesap numarasi'],
      },
      {
        type: 'vergi_no',
        label: 'Vergi Kimlik Numarasi',
        pattern: '\\b\\d{10}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['vergi', 'VKN', 'vergi kimlik', 'vergi numarasi', 'vergi no'],
        contextRequired: true,
      },
      {
        type: 'credit_card',
        label: 'Kredi Karti',
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

    // ── Iletisim (Contact) ─────────────────────────────────────────────────
    contact: [
      {
        type: 'email',
        label: 'E-posta Adresi',
        pattern: '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}',
        flags: 'gi',
        severity: 'high',
      },
      {
        type: 'phone_tr',
        label: 'Telefon Numarasi',
        pattern: '\\b(?:\\+?90|0090|0)?\\s?5[0-9]{2}\\s?\\d{3}\\s?\\d{2}\\s?\\d{2}\\b',
        flags: 'g',
        severity: 'high',
        keywords: ['telefon', 'cep', 'cep telefonu', 'gsm', 'numara'],
      },
      {
        type: 'address_tr',
        label: 'Adres',
        pattern: '(?:Cad(?:desi)?|Sok(?:ak)?|Mah(?:allesi)?|Bulv(?:ari)?)\\.?\\s[A-Za-z\\u00C0-\\u024F]+(?:\\s[A-Za-z\\u00C0-\\u024F]+)*',
        flags: 'g',
        severity: 'medium',
      },
      {
        type: 'postal_code_tr',
        label: 'Posta Kodu',
        pattern: '\\b\\d{5}\\b',
        flags: 'g',
        severity: 'low',
        keywords: ['posta kodu', 'PK'],
        contextRequired: true,
      },
    ],

    // ── Kisisel (Personal) ─────────────────────────────────────────────────
    personal: [
      {
        type: 'dob_tr',
        label: 'Dogum Tarihi',
        pattern: '\\b(?:0[1-9]|[12]\\d|3[01])[/\\-\\.](?:0[1-9]|1[0-2])[/\\-\\.](?:19|20)\\d{2}\\b',
        flags: 'g',
        severity: 'medium',
        keywords: ['dogum', 'dogum tarihi', 'dogum gunnu', 'DTar'],
        contextRequired: true,
      },
    ],

    // ── Plaka (Vehicle) ────────────────────────────────────────────────────
    vehicle: [
      {
        type: 'plate_tr',
        label: 'Arac Plakasi',
        pattern: '\\b(?:0[1-9]|[1-7]\\d|8[01])\\s?[A-Z]{1,3}\\s?\\d{2,4}\\b',
        flags: 'g',
        severity: 'medium',
        keywords: ['plaka', 'arac', 'tasit', 'plate'],
        contextRequired: true,
      },
    ],

    // ── Kimlik Bilgileri (Credentials) ─────────────────────────────────────
    credentials: [
      {
        type: 'password',
        label: 'Sifre',
        pattern: '(?:sifre|parola|password|passwd)\\s*[:=]\\s*["\']?([^\\s"\']{4,})["\']?',
        flags: 'gi',
        severity: 'critical',
      },
    ],
  },
};

if (typeof window !== 'undefined') window.SafePromptTR = SafePromptTR;
if (typeof module !== 'undefined') module.exports = { SafePromptTR };
