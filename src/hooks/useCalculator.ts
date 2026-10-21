import { useRef, useState } from "react";

function useCalculator() {
    const firstRef = useRef<HTMLInputElement>(null);
    const secondRef = useRef<HTMLInputElement>(null);
    const [output, setOutput] = useState("");

    function calculate(operation: string) {
        const a = Number(firstRef.current!.value);
        const b = Number(secondRef.current!.value);
        let result = 0;

        if (operation === "+") {
            result = a + b;
        } else if (operation === "-") {
            result = a - b;
        } else if (operation === "*") {
            result = a * b;
        } else if (operation === "/") {
            result = a / b;
        } else if (operation === "**") {
            result = 1;
            for (let i = 0; i < b; i++) {
                result *= a;
            }
        }

        setOutput(String(result));
    }

    function clearAll() {
        firstRef.current!.value = "";
        secondRef.current!.value = "";
        setOutput("");
    }

    return { firstRef, secondRef, output, calculate, clearAll };
}

export default useCalculator;
