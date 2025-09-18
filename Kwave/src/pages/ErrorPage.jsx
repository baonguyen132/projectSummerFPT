import React from 'react'

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">502</h1>
                <p className="text-xl text-gray-600 mb-4">Oops! error</p>
                <a href="/" className="text-blue-500 hover:text-blue-700 underline">
                    Quay ve
                </a>
            </div>
        </div>
    )   
}

export default ErrorPage