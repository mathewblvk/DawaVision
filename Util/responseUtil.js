'user strict';


const ResponseUtil = {
    OK: 'OK',
    ERROR: 'ERROR',

    send: (status, message, returnData, res) => {
        res.status(200).json({status: status, message: message, returnData: returnData});
    },

    sendFile: (filePath, res) => {
        res.sendFile(filePath);
    },

    writeData: (data, res) => {
        res.write(data);
    },

    streamData: (stream, fileName, contentType, res) => {
        res.set({
            'Content-Type': contentType,
            'Content-Disposition': 'attachment; filename=' + fileName
        });
        stream.pipe(res);
    },

    bad: (message, res) => {
        res.status(400).json({reason: message});
    },

    pdf: (pdfBuffer, res) => {
        res.contentType("application/pdf");
        res.send(pdfBuffer);
    },

    file: (buffer, contentType, res) => {
        res.contentType(contentType);
        res.send(buffer);
    },
}

module.exports = ResponseUtil;
