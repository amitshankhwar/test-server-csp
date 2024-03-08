const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const helmet = require('helmet');

const PORT = process.env.PORT || 3010;
app.use(express.json());
app.use(cookieParser());
// Enable CORS with specific options
app.use(cors({
    origin: '*', // Replace with your allowed origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

// Use the helmet middleware with CSP configuration
app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", 'blob:'],
      connectSrc: ['*.visualwebsiteoptimizer.com', 'app.vwo.com'],
      styleSrc: ["'self'", "'unsafe-inline'", '*.visualwebsiteoptimizer.com', 'app.vwo.com', 'https://www.w3schools.com'],
      scriptSrc: ["'self'", "'unsafe-inline'", '*.visualwebsiteoptimizer.com', 'app.vwo.com'],
      scriptSrcElem: ["'self'", "'unsafe-inline'", '*.visualwebsiteoptimizer.com', 'app.vwo.com'],
      imgSrc: ["'self'", '*.visualwebsiteoptimizer.com', 'chart.googleapis.com', 'app.vwo.com'],
      workerSrc: ["'self'", 'blob:'],
      frameSrc: ['app.vwo.com', '*.visualwebsiteoptimizer.com'],
      // Add more directives as needed
    }
  }));
  
  

app.get("/", (req, res) => {
    const smartCode = `<!-- Start VWO Async SmartCode -->
<link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
<script type='text/javascript' id='vwoCode'>
window._vwo_code || (function() {
var account_id=743063,
version=2.1,
settings_tolerance=2000,
hide_element='body',
hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
/* DO NOT EDIT BELOW THIS LINE */
f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByName('first-contentful-paint')[0]){return''}return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(e){if(!f){f=true;var t=d.getElementById('_vis_opt_path_hides');if(t)t.parentNode.removeChild(t);if(e)(new Image).src='https://dev.visualwebsiteoptimizer.com/ee.gif?a='+account_id+e}},finished:function(){return f},addScript:function(e){var t=d.createElement('script');t.type='text/javascript';if(e.src){t.src=e.src}else{t.text=e.text}d.getElementsByTagName('head')[0].appendChild(t)},load:function(e,t){var n=this.getSettings(),i=d.createElement('script'),r=this;t=t||{};if(n){i.textContent=n;d.getElementsByTagName('head')[0].appendChild(i);if(!w.VWO||VWO.caE){stT.removeItem(cK);r.load(e)}}else{var o=new XMLHttpRequest;o.open('GET',e,true);o.responseType=t.responseType||'text';o.onload=function(){if(t.onloadCb){return t.onloadCb(o,e)}if(o.status===200){_vwo_code.addScript({text:o.responseText})}else{_vwo_code.finish('&e=loading_failure:'+e)}};o.onerror=function(){if(t.onerrorCb){return t.onerrorCb(e)}_vwo_code.finish('&e=loading_failure:'+e)};o.send()}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t;if(this.hide_element()!=='body'){t=d.createElement('style');var n=this.hide_element(),i=n?n+this.hide_element_style():'',r=d.getElementsByTagName('head')[0];t.setAttribute('id','_vis_opt_path_hides');v&&t.setAttribute('nonce',v.nonce);t.setAttribute('type','text/css');if(t.styleSheet)t.styleSheet.cssText=i;else t.appendChild(d.createTextNode(i));r.appendChild(t)}else{t=d.getElementsByTagName('head')[0];var i=d.createElement('div');i.style.cssText='z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;';i.setAttribute('id','_vis_opt_path_hides');i.classList.add('_vis_hide_layer');t.parentNode.insertBefore(i,t.nextSibling)}var o='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&vn='+version;if(w.location.search.indexOf('_vwo_xhr')!==-1){this.addScript({src:o})}else{this.load(o+'&x=true')}}};w._vwo_code=code;code.init();})();
</script>
<!-- End VWO Async SmartCode -->`;
    const htmlContent = `<!DOCTYPE html>
    <html>
    <head>
    <title>W3.CSS Template</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    ${smartCode}
    <script type="text/javascript">
        window.VWO = window.VWO || [];
        VWO.push(['config', {
            storage: {
                syncUrl: 'https://testserver-mzm3.onrender.com/sync'
            }
        }]);
    </script>
    </head>
    <body class="w3-content" style="max-width:1300px">
    
    <!-- First Grid: Logo & About -->
    <div class="w3-row">
      <div class="w3-half w3-black w3-container w3-center" style="height:700px">
        <div class="w3-padding-64">
          <h1>My Logo</h1>
        </div>
        <div class="w3-padding-64">
          <a href="#" class="w3-button w3-black w3-block w3-hover-blue-grey w3-padding-16">Home</a>
          <a href="#work" class="w3-button w3-black w3-block w3-hover-teal w3-padding-16">My Work</a>
          <a href="#work" class="w3-button w3-black w3-block w3-hover-dark-grey w3-padding-16">Resume</a>
          <a href="#contact" class="w3-button w3-black w3-block w3-hover-brown w3-padding-16">Contact</a>
        </div>
      </div>
      <div class="w3-half w3-blue-grey w3-container" style="height:700px">
        <div class="w3-padding-64 w3-center">
          <h1>About Me</h1>
          <div class="w3-left-align w3-padding-large">
            <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Second Grid: Work & Resume -->
    <div class="w3-row">
      <div class="w3-half w3-light-grey w3-center" style="min-height:800px" id="work">
        <div class="w3-padding-64">
          <h2>My Work</h2>
          <p>Some of my latest projects.</p>
        </div>
        <div class="w3-row">
          <div class="w3-half">
          </div>
          <div class="w3-half">
          </div>
        </div>
        <div class="w3-row w3-hide-small">
          <div class="w3-half">
          </div>
          <div class="w3-half">
          </div>
        </div>
    
        <div class="w3-row w3-hide-small">
          <div class="w3-half">
          </div>
          <div class="w3-half">
          </div>
        </div><br>
        <p>Just call me awesome.</p>
      </div>
      <div class="w3-half w3-indigo w3-container" style="min-height:800px">
        <div class="w3-padding-64 w3-center">
          <h2>Resume</h2>
          <p>A draft from my CV</p>
          <div class="w3-container w3-responsive">
            <table class="w3-table">
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th>Where</th>
              </tr>
              <tr class="w3-white">
                <td>2012-2016</td>
                <td>The rest is history..</td>
                <td>Lorem ipsum</td>
              </tr>
              <tr>
                <td>2009-2012</td>
                <td>Started my own company</td>
                <td>My Garage</td>
              </tr>
              <tr class="w3-white">
                <td>2008-2009</td>
                <td>Started working for Lorem</td>
                <td>London, UK</td>
              </tr>
              <tr>
                <td>2005-2008</td>
                <td>Degree in Bachelor of Design</td>
                <td>Harvard, USA</td>
              </tr>
              <tr class="w3-white">
                <td>2002-2005</td>
                <td>Degree in Bachelor of Business</td>
                <td>RMIT University, Melbourne, Australia</td>
              </tr>
              <tr class="w3-hide-medium">
                <td>2002-2005</td>
                <td>Degree in Bachelor of Business</td>
                <td>RMIT University, Melbourne, Australia</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Third Grid: Swing By & Contact -->
    <div class="w3-row" id="contact">
      <div class="w3-half w3-dark-grey w3-container w3-center" style="height:700px">
        <div class="w3-padding-64">
          <h1>Swing By</h1>
        </div>
        <div class="w3-padding-64">
          <p>..for a cup of coffee, or whatever.</p>
          <p>Chicago, US</p>
          <p>+00 1515151515</p>
          <p>test@test.com</p>
        </div>
      </div>
      <div class="w3-half w3-teal w3-container" style="height:700px">
        <div class="w3-padding-64 w3-padding-large">
          <h1>Contact</h1>
          <p class="w3-opacity">GET IN TOUCH</p>
          <form class="w3-container w3-card w3-padding-32 w3-white" action="/action_page.php" target="_blank">
            <div class="w3-section">
              <label>Name</label>
              <input class="w3-input" style="width:100%;" type="text" required name="Name">
            </div>
            <div class="w3-section">
              <label>Email</label>
              <input class="w3-input" style="width:100%;" type="text" required name="Email">
            </div>
            <div class="w3-section">
              <label>Message</label>
              <input class="w3-input" style="width:100%;" type="text" required name="Message">
            </div>
            <button type="submit" class="w3-button w3-teal w3-right">Send</button>
          </form>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <footer class="w3-container w3-black w3-padding-16">
      <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
    </footer>
    </body>
    </html>
    `;
    res.send(htmlContent);
});
/**
 * The following functions reads cookies created by VWO from request and syncs them back to client
 */
function syncCookies(request, response) {
    let cookies = request.headers.cookie;
    const responseHeaders = {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": request.headers.origin ? request.headers.origin : "*"
    };
    if (!cookies) {
        response.writeHead(200, responseHeaders);
        response.end("1");
        return;
    }
    cookies = cookies.split(";");
    cookies.forEach(function(cookie) {
        const cookieParts = cookie.trim().split("="),
            name = cookieParts[0],
            value = cookieParts[1];
        if (name.search(/^(_vis_opt_|_vwo)/) !== -1) {
            responseHeaders["Set-Cookie"] = responseHeaders["Set-Cookie"] || [];
            // Expire any VWO cookies after 10 years.
            // Set the cookie on root path so that it's accessible on all paths
            // Set the domain to .<eTld+1>
            responseHeaders["Set-Cookie"].push(`${name}=${value};path=/;domain=.testserver-mzm3.onrender.com;expires=${new Date(Date.now() + 10 * 365 * 24 * 3600 * 1000).toGMTString()}`);
            // e.g. for a website example.abc.com eTld would be "com". So eTld+1 would be "abc.com".
            // If you are not sure about what is the value in your case, you can contact the VWO support team.
            // responseHeaders["Set-Cookie"].push(`${name}=${value};path=/;domain=.abc.com;expires=${new Date(Date.now() + 10 * 365 * 24 * 3600 * 1000).toGMTString()};`);
        }
    });
    response.writeHead(200, responseHeaders);
    response.end("1");
}
// If you are using express framework e.g., you can use the above code as follows
app.get('/sync', function(request, response) {
    return syncCookies(request, response)
});
app.listen(PORT, () => {
    console.log("Server's running at port " + PORT);
});
