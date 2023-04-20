import { useState } from "react"

export const useSlider = (length: number) => {
    const [currentIdx, setCurrentIdx] = useState(0)
    const [slideIn, setSlideIn] = useState(true)

    const isExistNext = currentIdx + 1 < length
    const isExistPrev = currentIdx ? currentIdx - 1 < length : false

    const handleArrowClick = (direction: 'next' | 'prev') => {
        const newIdx = direction === 'next' ? currentIdx + 1 : currentIdx - 1

        setSlideIn(false)

        setTimeout(() => {
            setCurrentIdx(newIdx)
            setSlideIn(true)
        }, 300)
    }

    return {slideIn, index: currentIdx, isNext: isExistNext, isPrev: isExistPrev, handleClick: handleArrowClick}
}