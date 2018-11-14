# ChromePDF
Simple wrapper utility that uses Puppeteer to generate PDFs from URLs

# Build
`npm run build`

# Usage
`chrome-pdf.exe --pdf.path={path} --url={url}`

# Arguments
- cookie.domain: domain of auth cookie if needed
- cookie.name: name of auth cookie if needed
- cookie.value: value of auth cookie if needed
- debug: value to turn on debug logging defaults to false
- launch.executablePath: Chrome executable path defaults to `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`
- navigation.timeout: timeout on page load in milliseconds defaults to 30 seconds
- navigation.waitUntil: wait until settings on navigation defaults to 'networkidle0'
- pdf.displayHeaderFooter: value to choose whether should display header and footer defaults to false
- pdf.margin.bottom: value to set bottom margin defaults to '1in'
- pdf.margin.left: value to set left margin defaults to '1in'
- pdf.margin.right: value to set right margin defaults to '1in'
- pdf.margin.top: value to set top margin defaults to '1in'
- pdf.path: location to save PDF to
- url: url to print PDF of
