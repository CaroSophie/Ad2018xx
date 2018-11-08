import React, { Component } from 'react'
import './Door.css'

class Door extends Component {
  open = () => {
    this.setState({
      isOpen: true
    })
  }

  render() {
    const { text, num, total, isOpen, onClick } = this.props
    const date = new Date().getDate()

    return (
      <section
        onClick={date >= num ? onClick : undefined}
        className={isOpen ? 'Door open' : 'Door'}
      >
        {isOpen ? text : `${num}/${total}`}
      </section>
    )
  }
}

export default Door
