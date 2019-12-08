const csvInjectionProtector = str => {
    if (!text) return "";

    const riskyChars = ["=", "+", "-", "@"];

    const firstChar = text.charAt(0);
    const isInjected = riskyChars.includes(firstChar);

    if (isInjected) return text.slice(1);

    return text;
};

export { csvInjectionProtector };
