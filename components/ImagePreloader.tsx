"use client"

import React, { useState, useEffect } from 'react'

interface ImagePreloaderProps {
  children: React.ReactNode
  onLoadComplete?: () => void
}

// All images used throughout the site
const ALL_IMAGES = [
  // Hero section
  "/images/iPhone-Vectors-1.png",
  
  // Benefits section
  "/images/Benefits-Icon-1.png",
  "/images/Benefits-Icon-2.png", 
  "/images/Benefits-Icon-3.png",
  
  // iPhone showcase
  "/images/iphone-frame-x3.png",
  
  // App screenshots - Features section
  "/images/app-screenshots/documents-new.png",
  "/images/app-screenshots/emergency-safety-new.png",
  "/images/app-screenshots/mealprep-new.png",
  "/images/app-screenshots/grocery-list-new.png",
  "/images/app-screenshots/recipe-details-new.png",
  "/images/app-screenshots/travel-assistant-new.png",
  "/images/app-screenshots/travel-documents-new.png",
  "/images/app-screenshots/trip-details-new.png",
  "/images/app-screenshots/packing-list-new.png",
  "/images/app-screenshots/digital-will-new.png",
  "/images/app-screenshots/reminders-new.png",
  "/images/app-screenshots/pet-tracker-new.png",
  "/images/app-screenshots/vault-new.png",
  
  // Additional app screenshots (legacy)
  "/images/app-screenshots/documents.png",
  "/images/app-screenshots/emergency-safety.png",
  "/images/app-screenshots/mealprep.png",
  "/images/app-screenshots/grocery-list.png",
  "/images/app-screenshots/recipe-details.png",
  "/images/app-screenshots/travel-assistant.png",
  "/images/app-screenshots/travel-documents.png",
  "/images/app-screenshots/trip-details.png",
  "/images/app-screenshots/packing-list.png",
  "/images/app-screenshots/digital-will.png",
  "/images/app-screenshots/reminders.png",
  "/images/app-screenshots/pet-tracker.png",
  "/images/app-screenshots/vault.png",
  "/images/app-screenshots/HomeScreen New 8 Modules.PNG",
  
  // Other images
  "/images/iphone-frame-slanted.png",
  "/images/adulting-app.png"
]

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ children, onLoadComplete }) => {
  const [loadedImages, setLoadedImages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Skip preloading on very slow connections to improve UX
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
      console.log('Slow connection detected, skipping image preloading')
      setIsLoading(false)
      onLoadComplete?.()
      return
    }

    const preloadImages = async () => {
      const imagePromises = ALL_IMAGES.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image()
          let retryCount = 0
          const maxRetries = 2
          
          const attemptLoad = () => {
            const handleLoad = () => {
              setLoadedImages(prev => {
                const newCount = prev + 1
                const progress = Math.round((newCount / ALL_IMAGES.length) * 100)
                setLoadingProgress(progress)
                return newCount
              })
              resolve()
            }
            
            const handleError = () => {
              if (retryCount < maxRetries) {
                retryCount++
                console.warn(`Retrying image load (${retryCount}/${maxRetries}): ${src}`)
                setTimeout(attemptLoad, 1000 * retryCount) // Progressive delay
              } else {
                console.warn(`Failed to preload image after ${maxRetries} retries: ${src}`)
                // Still resolve to continue loading other images
                setLoadedImages(prev => {
                  const newCount = prev + 1
                  const progress = Math.round((newCount / ALL_IMAGES.length) * 100)
                  setLoadingProgress(progress)
                  return newCount
                })
                resolve()
              }
            }
            
            img.onload = handleLoad
            img.onerror = handleError
            img.src = src
          }
          
          attemptLoad()
        })
      })

      try {
        await Promise.all(imagePromises)
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setIsLoading(false)
          onLoadComplete?.()
        }, 300)
      } catch (error) {
        console.error('Error preloading images:', error)
        // Even if some images fail, still show the content
        setTimeout(() => {
          setIsLoading(false)
          onLoadComplete?.()
        }, 300)
      }
    }

    // Add a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      console.warn('Image preloading timeout - showing content anyway')
      setIsLoading(false)
      onLoadComplete?.()
    }, 15000) // 15 second timeout

    preloadImages().finally(() => {
      clearTimeout(timeoutId)
    })

    return () => {
      clearTimeout(timeoutId)
    }
  }, [onLoadComplete])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-8 max-w-md mx-auto px-4">
          {/* ADULTING Logo/Brand */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#2d72f0] via-[#4892f9] to-[#8c2eef]">
                ADULTING
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              Your Daily Admin. Sorted.
            </p>
          </div>

          {/* Loading Progress */}
          <div className="space-y-4">
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#2d72f0] to-[#8c2eef] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-500">
              Loading images... {loadingProgress}%
            </p>
          </div>

          {/* Loading Animation */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-[#2d72f0] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-[#4892f9] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-[#8c2eef] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>

          {/* Subtle hint */}
          <p className="text-xs text-gray-400 mt-8">
            Preparing the best experience for you...
          </p>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(45,114,240,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default ImagePreloader
