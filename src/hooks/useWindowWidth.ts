import { useEffect, useState } from "react";

// this hook is used to get the window width
export function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
                const handleResize = () => setWidth(window.innerWidth);

                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
        }, []);

        return width;
}