import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction portal</h1>
                <p className='text-light lead'>warning: in the working copy of 'frontend-react/package.json', LF will be replaced by CRLF the next
                 time Git touches it warning: in the working copy of 'frontend-react/src/App.jsx', LF will be replaced by CRLF the next time Git touches it warning: in the working copy of 'frontend-react/src/main.jsx',
                  LF will be replaced by CRLF the next time Git touches it</p>

                  <Button text='Login' class='btn-outline-info'/>
            </div>

        </div>
    </>
  )
}

export default Main