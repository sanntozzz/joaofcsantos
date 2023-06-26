import { motion } from 'framer-motion'
import { CaretDown } from 'phosphor-react'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

type AccordionContextValue = {
    activeIndex: string | null
    toggleActiveIndex: (value: AccordionContextValue['activeIndex']) => void
}

type AccordionProps = {
    children: React.ReactNode
    value?: string
}

type AccordionItemProps = {
    children: AccordionProps['children']
    value: AccordionContextValue['activeIndex']
}

const AccordionContext = React.createContext<AccordionContextValue>({
    activeIndex: null,
    toggleActiveIndex: () => {},
})

function Accordion({ children }: AccordionProps) {
    const [activeIndex, setActiveIndex] = React.useState<AccordionContextValue['activeIndex']>(null)

    function toggleActiveIndex(value: AccordionContextValue['activeIndex']) {
        setActiveIndex((prevIndex) => (prevIndex === value ? null : value))
    }

    return <AccordionContext.Provider value={{ activeIndex, toggleActiveIndex }}>{children}</AccordionContext.Provider>
}

function AccordionItem({ children, value }: AccordionItemProps) {
    const { activeIndex, toggleActiveIndex } = React.useContext(AccordionContext)
    const isActive = activeIndex === value

    return (
        <div
            className={twMerge(
                isActive ? 'bg-white  text-primary-900' : 'hover:bg-white hover:text-primary-900',
                'cursor-pointer select-none rounded-lg border-2 border-white p-4 duration-200 ease-in-out'
            )}
            onClick={() => toggleActiveIndex(value)}
        >
            {children}
        </div>
    )
}
function AccordionTrigger({ children, value }: AccordionProps) {
    const { activeIndex } = React.useContext(AccordionContext)

    return (
        <div className="flex justify-between gap-2">
            <div>{children}</div>
            <CaretDown
                weight="bold"
                className={twMerge(
                    activeIndex === value && 'rotate-180',
                    'flex-none text-2xl transition-transform duration-200 ease-in-out'
                )}
            />
        </div>
    )
}
function AccordionContent({ children, value }: AccordionProps) {
    const { activeIndex } = React.useContext(AccordionContext)
    return (
        <motion.div
            initial="collapsed"
            variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
            }}
            animate={activeIndex === value ? 'open' : 'collapsed'}
            transition={{ duration: 0.2 }}
            className=" overflow-hidden ease-in-out"
        >
            <div className="mt-4">{children}</div>
        </motion.div>
    )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
