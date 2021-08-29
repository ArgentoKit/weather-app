export const changeBgColor = (temp, temperatures, bgColor, setBgColor) => {
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