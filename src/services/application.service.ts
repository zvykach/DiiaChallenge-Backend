import {ApplicationModel} from "../models/application.model";
import {Types} from "mongoose";

export default class ApplicationService {
    static async create(address) {
        return new ApplicationModel({
            address: {
                id: address.streetId,
                parentId: address.cityId,
                cityDistrictId: address.cityDistrictId
            }
        }).save();
    }

    static async get(id: Types.ObjectId) {
        return ApplicationModel.findById(id);
    }

    static async updateStatus(id: Types.ObjectId, status: Types.ObjectId) {
        return (await ApplicationModel.updateOne({_id: id}, {status})).matchedCount;
    }
}