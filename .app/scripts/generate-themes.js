const generateTokens = require('../css/1-tokens/tokens.js');
const themes = require('../css/1-tokens/themes.js');

const fs = require('fs');

Object.entries(themes).forEach(([themeName, theme]) => {
	const tokens = generateTokens(theme);
	const scss = `
// DO NOT EDIT THIS FILE DIRECTLY.
// Update it by running "npm run themes:generate"

:root {
  ${Object.entries(tokens)
		.map(([name, value]) => `--${name}: ${value}`)
		.join(';\n  ')}
};

@import './app';
`;

	fs.writeFileSync(`./css/app.${themeName}.scss`, scss);
});
