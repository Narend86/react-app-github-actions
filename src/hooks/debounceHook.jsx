import { useState, useEffect } from "react";

export function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Update debounced value after the specified delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cancel the timeout if value changes before the delay passes
        // This is the cleanup function that acts as the "clearTimeout" step
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}