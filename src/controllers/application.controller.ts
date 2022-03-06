import ApplicationService from "../services/application.service";
import StatusService from "../services/status.service";

export default class ApplicationController {
    static async create(req, res) {
        const {cityId, cityDistrictId, streetId} = req.body.address;
        if (!(cityId && cityDistrictId && streetId)) {
            return res.sendStatus(400);
        }

        const application = await ApplicationService.create(req.body.address);
        return res.status(200).json({"applicationId": application._id.toString()});
    }

    static async updateStatus(req, res) {
        const id = req.params.id;
        const status = req.body.status;

        if (!(id && status)) {
            return res.sendStatus(400);
        }

        const statusDoc = await StatusService.get(status);
        if (!statusDoc) {
            return res.sendStatus(400);
        }

        const applicationUpdate = await ApplicationService.updateStatus(id, statusDoc._id);
        if (!applicationUpdate) {
            return res.sendStatus(400);
        }

        return res.sendStatus(204);
    }
}