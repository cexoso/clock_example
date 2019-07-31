import React from 'react';
import Tick from "./tick"
import cls from './clock.module.css'

export default class Clock extends React.PureComponent {
    render() {
        return <div className={cls.container}>
            <Tick />
        </div>
    }
}

