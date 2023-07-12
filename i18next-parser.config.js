function sortAlphabetical(a, b) {
  const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

module.exports = {
  createOldCatalogs: false,
  indentation: 2,
  keepRemoved: false,
  lexers: {
    js: ["JsxLexer"],
    ts: ["JsxLexer"],
    jsx: ["JsxLexer"],
    tsx: ["JsxLexer"],
    default: ["JsxLexer"],
  },

  locales: ["en"],

  defaultValue: (locale, namespace, key) => key,

  // Where to write the locale files relative to process.cwd()
  // Supports $LOCALE and $NAMESPACE injection
  output: "i18n-input/$LOCALE.json",

  // An array of globs that describe where to look for source files
  // relative to the location of the configuration file
  input: ["src/**/*.{js,jsx,ts,tsx}"],

  sort: sortAlphabetical,

  // Display info about the parsing including some stats
  verbose: true,

  // Allow `.` and `:` in plain english keys
  keySeparator: false,
  namespaceSeparator: false,
};
