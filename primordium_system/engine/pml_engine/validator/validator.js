module.exports = {
    validate(parsed) {
        return {
            valid: parsed.parsed.length > 0,
            reason: parsed.parsed.length === 0 ? "Empty input" : "OK"
        };
    }
};