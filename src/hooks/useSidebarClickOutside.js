import { useEffect } from 'react'


export function useSidebarClickOutside(componentRef, componentRef2, handler)
{
    useEffect(() =>
    {
        const handleClickOutside = (e) =>
        {
            const toggleRef = componentRef.current;
            const outsideRef = componentRef2.current;
            if (!outsideRef?.contains(e.target) && !toggleRef?.contains(e.target))
            {
                handler();
            }
        };

        if (window.innerWidth <= 700)
        {
            document.addEventListener('click', handleClickOutside);
            return () =>
            {
                document.removeEventListener('click', handleClickOutside);
            };
        }
    }, [componentRef, componentRef2, handler]);
}