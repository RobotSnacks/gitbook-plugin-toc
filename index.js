var toc = require('markdown-toc');

module.exports = {
	book: {},
	hooks: {
		"page:before": function (page) {
			page.content = toc.insert(page.content, {
				slugify: function (str) {
					return encodeURI(str.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '')).replace(/%20/g, '-');
				}
			});
			if (this.options.pluginsConfig.toc.addClass) {
				var className = this.options.pluginsConfig.toc.className || 'toc';
				page.content = page.content + '\n\n\n<script type="text/javascript">var targetUl = document.querySelector("h1 + ul");if(targetUl.getElementsByTagName(\'a\').length>0){targetUl.className=\'' + className + '\';}</script>';
			}
			return page;
		}
	}
};
