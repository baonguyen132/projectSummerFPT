import React from 'react'
import Button from "../common/Button"
import '../common/css/UpgradeNotice.css'

const UpgradeNotice = () => {
  return (
    <div className='upgrade-container'>
        <div className='upgrade-left'>
            <label className='yellow'><b>Đề thi này đã bị khóa</b></label>
            <label className='gray'><i>Nhận gói Premium để mở khóa tất cả các chương!</i></label>
            <label className='red'>Mua một lần và sử dụng nó</label>
        </div>

        <div className='upgrade-right'>
            <Button type='orange' size='small'>NHANH TAY ĐĂNG KÝ NÀO</Button>
            <label>Đang giảm giá!</label>
        </div>
    </div>
  )
}

export default UpgradeNotice