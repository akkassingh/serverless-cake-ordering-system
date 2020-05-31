'use strict'

function parsePayload(record) {
    const json = Buffer.from(record.kinesis.data, 'base64').toString('utf8');
    return JSON.parse(json)
}

module.exports.getRecords = event => {
    return event.Records.map(parsePayload);
}