import React from 'react';
import cls from './tick.module.css'
// 用于画刻度
export default class Tick extends React.PureComponent {
    onClick = (key) => () => {
        this.props.onClickBigger(key)
    }
    componentWillReceiveProps(nextProps) {
        // 指针运行的方向, 正数为正向
        this.wiseDelta = nextProps.wisePosition - this.props.wisePosition
        this.min = this.wiseDelta > 0 ? this.props.wisePosition : nextProps.wisePosition;
        this.max = this.wiseDelta <= 0 ? this.props.wisePosition : nextProps.wisePosition;
    }
    transitionDelay(key) {
        if (this.wiseDelta && key >= this.min && key <= this.max) {
            const delta = this.wiseDelta > 0 ? (key - this.min) : (key - this.max);
            return `${(0.7 / this.wiseDelta) * delta}s`
        }
    }
    render() {
        // 72 个小白点
        const size = 72;
        const pointets = Array.from({ length: size })
        const { wisePosition } = this.props
        return <>
            {pointets.map((item, key) => {
                // 中心偏移
                const delta = 45
                // 每个点相对于中心的弧度 以 Y 轴为 0PI
                const radian = key / 36 * Math.PI + Math.PI
                const bigger = key % 9 === 0
                return <div onClick={bigger ? this.onClick(key) : undefined} className={`${cls.pointer} ${bigger ? cls.big : cls.small}`} key={key} style={{
                    left: `${50 - delta * Math.sin(radian)}%`,
                    top: `${50 + delta * Math.cos(radian)}%`,
                    opacity: wisePosition >= key ? 1 : 0.3,
                    transitionDelay: this.transitionDelay(key)
                }}>
                    {bigger && <div className={`${cls.small}`} />}
                </div>
            })}
        </>
    }
}

