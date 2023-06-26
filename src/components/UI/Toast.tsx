import { motion } from 'framer-motion'
import { resolveValue, Toaster, ToastIcon } from 'react-hot-toast'

function Toast() {
    return (
        <Toaster>
            {(t) => (
                <motion.div
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0.5 },
                    }}
                    initial="hidden"
                    animate={t.visible ? 'visible' : 'hidden'}
                    transition={{ duration: 0.2 }}
                    className="flex rounded-full bg-primary-800 px-4 py-2 text-white"
                >
                    <ToastIcon toast={t} />
                    <p className="px-2">{resolveValue(t.message, t)}</p>
                </motion.div>
            )}
        </Toaster>
    )
}

export { Toast }
