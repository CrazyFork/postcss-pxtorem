// excluding regex trick: http://www.rexegg.com/regex-best-trick.html

// Not anything inside double quotes
// Not anything inside single quotes
// Not anything inside url()
// Any digit followed by px
// !singlequotes|!doublequotes|!url()|pixelunit

// 因为只有最后一个 condition 有 group catch(), 所以前面的都不会被捕捉到
module.exports = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)px/g;
