let fs = require('fs'),
	path = require('path'),
	jsYaml = require('js-yaml');

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

module.exports = jsonFiles;
