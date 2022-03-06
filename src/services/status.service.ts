import {StatusModel} from "../models/status.model";

export default class StatusService {
    static async create(id: string, weight: number) {
        return new StatusModel({
            id,
            weight
        }).save();
    }

    static async get(id: string) {
        return StatusModel.findOne({id});
    }
}