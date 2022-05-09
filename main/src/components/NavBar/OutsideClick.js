import { useState, useEffect } from "react";

export const OutsideClick = (el, initalState) => {
    const [isActive, setIsActive] = useState(initalState)

    useEffect(() => {
        const onClick = e => {
            if(el.current != null && !el.current.contains(e.target)){
                setIsActive(!isActive);
            }
        }

        if(isActive){
            window.addEventListener("click", onClick)
        }

        return() => {
            window.removeEventListener("click", onClick)
        }
    }, [isActive, el])

    return [isActive, setIsActive]
}