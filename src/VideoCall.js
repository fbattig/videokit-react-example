import React from 'react'
import VideoKit from 'videokit'
import { withRouter } from 'react-router-dom'

import styles from './VideoCall.module.css'

class VideoCall extends React.Component {
  constructor(props) {
    super(props)
    this.videoCallRef = React.createRef()
  }

  componentDidMount() {
    const { callId } = this.props.match.params

    const vk = new VideoKit({
      apiKey: '3H1m27552n272eD1J3q1c37421e2y',
      callId,
      modules: ['actions'],
      actions: ['screenshare', 'settings', 'status', 'leave'],
    })

    vk.on('leftCall', () => {
      this.props.history.push('/')
    })

    vk.mount(this.videoCallRef.current)
  }

  render() {
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
      <>
        <p>Share <button className="knopf link" title={href} onClick={copyUrlToClipboard}>this url</button> for others to join your call</p>
        <div className={styles.VideoCall} ref={this.videoCallRef} />
      </>
    )
  }
}

export default withRouter(VideoCall)
