import { AnimatePresence, motion } from 'framer-motion'
import { CaretUp } from 'phosphor-react'
import { useEffect, useState } from 'react'

function ScrollToTop() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 50) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        })
    }, [setShowButton])

    return (
        <AnimatePresence>
            {showButton && (
                <motion.div
                    initial={{ scale: 0.75, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.75, opacity: 0 }}
                    transition={{
                        duration: 0.15,
                    }}
                    className="fixed bottom-4 right-4 z-10"
                >
                    <button
                        className="rounded-full bg-white p-2 text-primary-900 drop-shadow"
                        onClick={() => {
                            window.scrollTo(0, 0)
                            history.pushState(null, '', '/')
                        }}
                    >
                        <CaretUp weight="bold" size={24} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export { ScrollToTop }
