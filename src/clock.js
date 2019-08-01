import React from 'react';
import Tick from "./tick"
import cls from './clock.module.css'

export default class Clock extends React.PureComponent {
    componentDidMount() {
        
        const displaywheel = (e) => {
            const evt = window.event || e
            const delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta
            const { wisePosition } = this.state
            this.setState({
                wisePosition: Math.floor(Math.min(Math.abs(wisePosition - delta / 100), 72))
            })
        }

        const mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"

        if (document.attachEvent)
            document.attachEvent("on" + mousewheelevt, displaywheel)
        else if (document.addEventListener)
            document.addEventListener(mousewheelevt, displaywheel, false)
    }
    state = {
        wisePosition: 0
    }
    onClickBigger = (key) => {
        this.setState({ wisePosition: key });
    }
    render() {
        const { wisePosition } = this.state
        console.log(wisePosition)
        return <div className={cls.container}>
            <Tick onClickBigger={this.onClickBigger} wisePosition={wisePosition} />
            <div className={cls.clockWise} style={{ transform: `rotate(${360 / 72 * wisePosition - 90}deg)` }} />
            <div className={cls.center} />
        </div>
    }
}

