/**
 * SafePrompt - Language Registry
 * Auto-registers all language pattern files with the detector.
 */

(function () {
  function register(detector) {
    const langs = [
      typeof SafePromptEN !== 'undefined' ? SafePromptEN : null,
      typeof SafePromptAR !== 'undefined' ? SafePromptAR : null,
      typeof SafePromptES !== 'undefined' ? SafePromptES : null,
      typeof SafePromptFR !== 'undefined' ? SafePromptFR : null,
      typeof SafePromptZH !== 'undefined' ? SafePromptZH : null,
      typeof SafePromptDE !== 'undefined' ? SafePromptDE : null,
      typeof SafePromptPT !== 'undefined' ? SafePromptPT : null,
      typeof SafePromptTR !== 'undefined' ? SafePromptTR : null,
      typeof SafePromptHI !== 'undefined' ? SafePromptHI : null,
      typeof SafePromptKO !== 'undefined' ? SafePromptKO : null,
      typeof SafePromptJA !== 'undefined' ? SafePromptJA : null,
      typeof SafePromptContext !== 'undefined' ? SafePromptContext : null,
    ];

    for (const lang of langs) {
      if (lang) detector.registerLanguage(lang.code, lang);
    }

    // Register dictionary-based name detection
    const names = typeof SafePromptNames !== 'undefined' ? SafePromptNames : null;
    if (names) {
      const nameLangs = { en: 'English', ar: 'Arabic', es: 'Spanish', fr: 'French', de: 'German', pt: 'Portuguese', zh: 'Chinese', tr: 'Turkish', hi: 'Hindi', ko: 'Korean', ja: 'Japanese' };

      // Arabic name detection requires nearby context keywords to reduce false positives.
      // Many Arabic names are also common words (e.g. صالح = valid, سالم = safe).
      var arNameKeywords = [
        'اسمي', 'اسمه', 'اسمها', 'الاسم', 'اسم', 'الأخ', 'الأخت',
        'السيد', 'السيدة', 'الأستاذ', 'الأستاذة', 'الدكتور', 'الدكتورة',
        'المهندس', 'المهندسة', 'الشيخ', 'العميل', 'المريض', 'الطالب', 'الطالبة',
        'يدعى', 'تدعى', 'المدعو', 'المدعوة',
      ];

      for (const [code, label] of Object.entries(nameLangs)) {
        var pat = names.buildPattern(code);
        if (!pat) continue;

        var namePattern = {
          type: 'name_dict_' + code,
          label: 'Personal Name (' + label + ')',
          pattern: code === 'zh' ? '(?:' + pat + ')' : pat,
          flags: 'g',
          severity: 'high',
        };

        // Arabic names require context to avoid matching common words
        if (code === 'ar') {
          namePattern.contextRequired = true;
          namePattern.keywords = arNameKeywords;
        }

        detector.registerLanguage('names_' + code, {
          code: 'names_' + code,
          name: label + ' Names',
          nativeName: label + ' Names Dictionary',
          patterns: {
            names: [namePattern],
          },
        });
      }
    }
  }

  // Browser context: create global detector and register
  if (typeof window !== 'undefined') {
    const detector = new (window.SafePromptDetector || SafePromptDetector)();
    register(detector);
    window.safeprompt = detector;
  }

  // Node.js context (for testing)
  if (typeof module !== 'undefined') {
    module.exports = { register };
  }
})();
