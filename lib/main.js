var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "https://github.com/michalbe/tv-series/compare/gh-pages...master?expand=1",
  contentScriptFile: data.url("script.js")
});
