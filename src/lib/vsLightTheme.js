const vsLightTheme = {
  plain: {
    color: "#1f2328",
    backgroundColor: "#ffffff"
  },
  styles: [
    { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#006400", fontWeight: 600 } },
    { types: ["keyword", "atrule"], style: { color: "#0000FF", fontWeight: 700 } },
    { types: ["string", "char"], style: { color: "#A31515", fontWeight: 600 } },
    { types: ["number", "boolean"], style: { color: "#0A8F5B", fontWeight: 600 } },
    { types: ["function", "selector"], style: { color: "#795E26", fontWeight: 600 } },
    { types: ["class-name", "type", "maybe-class-name"], style: { color: "#007ACC", fontWeight: 700 } },
    { types: ["builtin", "constant", "symbol"], style: { color: "#007ACC", fontWeight: 700 } },
    { types: ["punctuation", "operator"], style: { color: "#1f2328" } },
    { types: ["tag"], style: { color: "#0000FF", fontWeight: 700 } },
  ]
};

export default vsLightTheme;
