'use strict'

module.exports.delieveryOrder = () => {
    console.log('Delievery Order was called');

    return new Promise(resolve => {
        setTimeout(() => {
            console.log('fake timeout');
            resolve('fake timeout')
        },300)
    })
}