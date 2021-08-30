import cn from 'classnames'
import React from 'react'
import style from './AllowGeoLocation.module.scss'

const AllowGeoLocation = ({active, setActive, fetch}) => {
    return (
        <div className={cn(style.modal, {[style.active]: active})} onClick={() => setActive(false)}>
            <div className={style.modal__content} onClick={e => e.stopPropagation()}>
                <h6 className={style.modalTitle}>Allow access to your location to display the weather</h6>
                <div className={style.buttonBox}>
                    <button onClick={() => setActive(false)} className={style.modalAgree}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default AllowGeoLocation