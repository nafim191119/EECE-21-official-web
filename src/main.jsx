import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { SparklesCore } from "./Components/ui/sparkles";
"use client";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className='max-w-screen-lg mx-auto bg-black'>
      <div className="w-full absolute h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1}
          particleDensity={700}
          className="w-full md:h-[100px]"
          particleColor="#FFFFFF"
        />
      </div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode >
)
