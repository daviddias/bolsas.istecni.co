(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><main id="pages" role="page-container"><div id="homeModal"><nav role="navigation" class="navbar navbar-inverse navbar-fixed-top"><div class="container"><div class="navbar-header"><button data-target=".navbar-ex1-collapse" data-toggle="collapse" type="button" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="#home" class="navbar-brand">bolsas.istecni.co</a></div><div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav"><li><a href="#about">About</a></li></ul></div></div></nav><div class="container"><div class="row"><div class="col-md-3"><p class="lead">Scholarships</p><div class="list-group"><a href="#" class="list-group-item">Active</a><a href="#" class="list-group-item">Past</a><p class="list-group-item">SEARCH BOX HERE</p></div><div class="thumbnail"><div class="caption"><h4>Get notified</h4><p>If you want to get notifications</p></div></div></div><div class="col-md-9"><div class="row"><div class="col-sm-12 col-lg-12 col-md-12"><div class="thumbnail"><div class="caption"><h4>{{scholarship.field}}</h4><p>{{scholarship.slots}}</p><p>{{scholarship.holder}}</p><p>{{scholarship.link}}</p><p>{{scholarship.scholarshipId}}</p><p>{{scholarship.releaseDate}}</p><p>{{scholarship.closeDate}}</p><p>{{scholarship.active}}</p></div></div></div></div></div></div></div></div><div class="container"><hr/><footer><div class="row"><div class="col-lg-12"><p>This is a open source project made in IST, check more at<a href="https://github.com/ISTecnico">https:github.com/ISTecnico</a></p></div></div></footer></div></main></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return "<title>bolsastecni.co</title>";
    };

    // pages/home.jade compiled template
    templatizer["pages"]["home"] = function tmpl_pages_home() {
        return "<h1>bolsas tecnico!</h1>";
    };

    return templatizer;
}));