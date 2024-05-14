import React, { useEffect } from "react";

export function MouseMoveonCustomhook(move1, funtest1) {

    useEffect(() => {
        window.addEventListener(move1, funtest1)
    }, [move1, funtest1])
}

