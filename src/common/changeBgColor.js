const temperatures = [
    { temp: -10, step_r: 0, step_g: 0, step_b: 0 },
    { temp: 0, step_r: 23, step_g: 0, step_b: 0 },
    { temp: 10, step_r: 2.5, step_g: 0.8, step_b: 25.5 },
    { temp: 30, step_r: 0, step_g: 5.35, step_b: 0 },
]

export const changeBgColor = (temp, bgColor, setBgColor) => {
    if (temp >= temperatures[3].temp) {
        setBgColor({
            r: 255,
            g: 140,
            b: 0
        })
    } else if ((temp >= temperatures[2].temp) && (temp < temperatures[3].temp)) {
        setBgColor({
            ...bgColor,
            g: (140 + Math.round((temperatures[3].temp - temp) * temperatures[3].step_g)),
            b: 0
        })
    } else if ((temp >= temperatures[1].temp) && (temp < temperatures[2].temp)) {
        setBgColor({
            ...bgColor,
            r: (255 - Math.round(temperatures[2].temp - temp) * temperatures[2].step_r),
            g: (247 + Math.round(temperatures[2].temp - temp) * temperatures[2].step_g),
            b: (0 + Math.round(temperatures[2].temp - temp) * temperatures[2].step_b)
        })
    } else if ((temp >= temperatures[0].temp) && (temp < temperatures[1].temp)) {
        setBgColor({
            ...bgColor,
            r: (230 - Math.round(temperatures[1].temp - temp) * temperatures[1].step_r),
        })
    } else if (temp < temperatures[0].temp) {
        setBgColor({
            r: 0,
            g: 255,
            b: 255
        })
    }
}