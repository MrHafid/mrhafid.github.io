module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,png,js,scss,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};