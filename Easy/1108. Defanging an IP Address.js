const address = "1.1.1.1";

const defangIPaddr = function (address) {
    const splitArr = address.split('.');
    return splitArr.join('[.]')
};

console.log(defangIPaddr(address))