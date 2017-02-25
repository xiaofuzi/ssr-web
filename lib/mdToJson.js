var mdsToJson = require('mds-to-json'),
	path = require('path');

module.exports = function () {
	return mdsToJson({
		dirname: path.join(process.cwd(), 'server/source/_posts')
	});
}