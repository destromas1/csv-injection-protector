const csvInjectionProtector = str => {
    if (!str) return "";

    return str.replace(/^[=+-@]+(.*)/g, "$1");
};

export { csvInjectionProtector };
