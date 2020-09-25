import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import VideoCall from './VideoCall'

import 'knopf.css'

export default function App() {
  const callId = Math.random().toString(36).substring(7);
  const { href } = window.location

  function copyUrlToClipboard() {
    const el = document.createElement('textarea')
    el.value = href
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  return (
    <Router hashType="noslash">
      <Switch>
        <Route exact path="/">
          <Link className="knopf huge wide pale traced" to={callId}>Start a call</Link>
        </Route>

        <Route path="/:callId">
          <p>Share <button className="knopf link" title={href} onClick={copyUrlToClipboard}>this url</button> for others to join your call</p>
          <VideoCall />
        </Route>
      </Switch>
    </Router>
  )
}
