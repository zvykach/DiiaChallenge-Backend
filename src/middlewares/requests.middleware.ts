import express from "express";

export default async function (req: express.Request, res: express.Response, next) {
    try {
        const d = new Date();
        const datestring = d.getUTCDate()  + "-" + (d.getUTCMonth()+1) + "-" + d.getUTCFullYear() + " " +
            d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();

        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

        console.log(datestring, req.originalUrl, ' IP:', ip)
        next();
    } catch (e) {

    }
}