import React from 'react'
import Button from '../common/Button'
import './ExamList.css'

const ExamList = () => {
  return (
    <div className='examlist'>
        <Button className='list-1' type="white" size="large">Đề 1</Button>
        <Button className='list-2' type="white" size="large">Đề 2</Button>
        <Button className='list-3' type="white" size="large">Đề 3</Button>
        <Button className='list-4' type="grey" size="large">Đề 4</Button>
        <Button className='list-5' type="grey" size="large">Đề 5</Button>
        <Button className='list-6' type="grey" size="large">Đề 6</Button>
        <Button className='list-7' type="grey" size="large">Đề 7</Button>
        <Button className='list-8' type="grey" size="large">Đề 8</Button>
        <Button className='list-9' type="grey" size="large">Đề 9</Button>
    </div>
  )
}

export default ExamList