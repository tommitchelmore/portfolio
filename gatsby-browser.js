/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const Sentry = require("@sentry/react")
const {Integrations} = require("@sentry/tracing")

exports.wrapRootElement = ({element}) => {
  Sentry.init({
    dsn: "https://684bd302a412485bb770409522ae71de@o190917.ingest.sentry.io/5424973",
    integrations: [
      new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 1.0
  })
  return element
}