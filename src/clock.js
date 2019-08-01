import React from 'react';
import Tick from "./tick"
import cls from './clock.module.css'

export default class Clock extends React.PureComponent {
    state = {
        wisePosition: 0
    }
    onClickBigger = (key) => {
        this.setState({ wisePosition: key });
    }
    render() {
        const { wisePosition } = this.state
        return <div className={cls.container}>
            <Tick onClickBigger={this.onClickBigger} wisePosition={wisePosition} />
            <div className={cls.clockWise} style={{transform: `rotate(${360 / 72 * wisePosition - 90}deg)`}} />
            <div className={cls.center} />
        </div>
    }
}

