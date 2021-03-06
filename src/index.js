import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import enableServiceWorker from './enableServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

enableServiceWorker()

// This is an entrypoint for the Fronthack development scripts - design overlay
// and canvas planning tool.
/// https://docs.fronthack.com/?path=/story/docs-recognition-of-designs--read
process.env.NODE_ENV === 'development' && import('fronthack-scripts')
