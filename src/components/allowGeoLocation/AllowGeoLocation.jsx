import cn from 'classnames'
import React from 'react'
import style from './AllowGeoLocation.module.scss'

const AllowGeoLocation = ({active, setActive}) => {
    return (
        <div className={cn('modal', {'active': active})} onClick={() => setActive(false)}>
            <div className={style.modal__content} onClick={e => e.stopPropagation()}>
                {console.log('Active: ', active)}
            </div>
        </div>
    )
}

export default AllowGeoLocation