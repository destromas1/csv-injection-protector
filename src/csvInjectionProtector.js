import riskyChars from "./riskyChars";

const csvInjectionProtector = str => {
    if (!str) return "";

    const firstChar = str.charAt(0);
    const isInjected = riskyChars.includes(firstChar);

    if (isInjected) return str.slice(1);

    return str;
};

export { csvInjectionProtector };
