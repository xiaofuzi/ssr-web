var GitHub = require('github-api'),
	config = require('../../ffe.config.js');

var gh = new GitHub({
  	token: config.token
});

/**
 * Issue wrap
 */
var IssueObj = gh.getIssues(config.username, config.repostory);


module.exports = {
	IssueObj: IssueObj,
	gh: gh
}