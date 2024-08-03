export const formatWalletAddress = (address, substrLength = 6) => {
    if (address.length <= 10) {
        return address;
    }
    return `${address.slice(0, substrLength)}...${address.slice(address.length - substrLength, address.length)}`;
};
//# sourceMappingURL=formatters.js.map