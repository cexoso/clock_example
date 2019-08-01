import React from 'react';
import cls from './tick.module.css'
// 用于画刻度
export default class Tick extends React.PureComponent {
    onClick = (key) => () => {
        this.props.onClickBigger(key)
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
                    opacity: wisePosition >= key ? 1 : 0.6
                }}>
                    {bigger && <div className={`${cls.small}`} />}
                </div>
            })}
        </>
    }
}

