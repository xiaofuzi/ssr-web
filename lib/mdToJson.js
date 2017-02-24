let fs = require('fs'),
	path = require('path'),
	jsYaml = require('js-yaml'),
	moment = require('moment'),
    marked = require('marked');

let readFile = fs.readFileSync;

/**
 * parse md file
 */
function parseMdFile (filename) {
	let content = readFile(filename, 'utf8');
	let arr = content.match(/\n---/);

	let str = '',
		meta = {};
	if (arr) {
		str = content.slice(arr.index);
		meta = jsYaml.load(content.slice(0, arr.index));
	} else {
		str = content;
	}

	return {
		meta: meta,
		content: str
	};
}

let mdFileArr = [];

function processMdFiles (dir) {
	let files = fs.readdirSync(dir),
		retArr = [];

	files.forEach((file)=>{
		let fpath = path.join(dir, file);
		let stat = fs.statSync(fpath);
		if (stat.isDirectory()) {
			processMdFiles(fpath);
		} else {
			retArr.push(fpath);
		}
	});

	mdFileArr = mdFileArr.concat(retArr);

	return mdFileArr;
}

function parseMdFiles (files) {
	let retArr = [];
	files.forEach((file, i)=>{
		let pFile = parseMdFile(file);
		pFile['meta']['id'] = i;
		retArr.push(pFile);
	});

	return retArr;
}


function jsonFiles (dirname) {
	let processedFiles;
	try {
		processedFiles = processMdFiles(dirname);
	} catch (err) {
		console.error(err);
	} 
	let parsedMdFiles = parseMdFiles(processedFiles);
	return {
		data: parsedMdFiles,
		total: processedFiles.length
	}
}

    
/**
 * json files process
 */
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

function parsedFiles () {
	let posts = jsonFiles(path.join(__dirname, '../server/source/_posts'));

	posts.data.forEach((post, index)=>{
		post.meta['createTime'] = moment(post.meta.date, 'YYYY-MM-DD').format('YYYY-MM-DD');
	    post.meta['url'] = moment(post.meta.date, 'YYYY-MM-DD').format('YYYY-MM-DD') + '-' + post.meta.title;

	    let tags = post.meta.tags;
	    if (Array.isArray(tags)) {
	    	post.meta['strTag'] = tags.join('、');
	    } else {
	    	post.meta['strTag'] = tags;
	    }

	    //摘要处理
	    let regRet = post.content.match(/<!--\s*more\s*-->/);
	    if (regRet) {
	    	let index = regRet.index;
	    	post['summary'] = marked(post.content.substr(0, index));
	    	post.content = post.content.replace(/<!--\s*more\s*-->/, '\n');
	    } else {
	    	post['summary'] = marked(post.content.substr(0, 250));	    	
	    }
	    post.content = marked(post.content);
	});

	/**
	 * 默认按时间排序
	 */
	posts.data.sort((pre, next)=>{
		return !moment(pre.meta.date).isBefore(next.meta.date);
	});

	posts.data.forEach((post, index)=>{
		post.meta['id'] = index + '';
	})
	return posts;
}

exports.jsonFiles = jsonFiles;
exports.parsedFiles = parsedFiles;