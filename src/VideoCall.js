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
      apiKey: 'cz1b1K281mN1ol3de1W1R2y1Ig',
      callId,
    })

    vk.mount(this.videoCallRef.current)
  }

  render() {
    return (
      <div className={styles.VideoCall} ref={this.videoCallRef} />
    )
  }
}

export default withRouter(VideoCall)
