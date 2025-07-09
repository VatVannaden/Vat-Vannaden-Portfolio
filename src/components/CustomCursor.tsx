import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
    // Refs for cursor Elements
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null)

    // Hide cursor mobile
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(Max-Width: 768px').matches;

    if(isMobile) {
        return null
    }

    useEffect(() => {
        // Getcursor elements
        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current;

        // Set position
        gsap.set([cursor, cursorBorder], {
            xPercent: -50,
            yPercent: -50,
        })
        // Set cursor speed
        const xTo = gsap.quickTo(cursor, 'x', {
            duration: 0.2, ease: 'power3.out',
        })
        const yTo = gsap.quickTo(cursor, 'y', {
            duration: 0.2, ease: 'power3.out',
        })
        const xBorder = gsap.quickTo(cursorBorder, 'x', {
            duration: 0.5, ease: 'power.out',
        })
        const yBorder = gsap.quickTo(cursorBorder, 'y', {
            duration: 0.5, ease: 'power3.out',
        })

        // Mouse move function
        const onMouseMove = (e: { clientX: number; clientY: number; }) => {
            xTo(e.clientX)
            yTo(e.clientY)
            xBorder(e.clientX)
            yBorder(e.clientY)
        }

        window.addEventListener('mousemove', onMouseMove)
    }, [])

    return (
        <>
            {/* Main Cursor dot */}
            <div ref={cursorRef}
                className='fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference' >
            </div>

            <div ref={cursorBorderRef}
            className='fixed top-0 left-0 w-[40px] h-[40px] rounded-full border border-white pointer-events-none z-[999] mix-blend-difference opacity-50'>

            </div>
        </>
    )
}

export default CustomCursor
