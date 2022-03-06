import {model, Schema, Types} from "mongoose";

export interface ICityDistrict {
    id: string
    parentId: Types.ObjectId
}

const schema = new Schema<ICityDistrict>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        parentId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'City'
        }
    },
    {
        toJSON: {versionKey: false, useProjection: true, getters: true},
        toObject: {versionKey: false, useProjection: true, getters: true}
    }
);

export const CityDistrictModel = model<ICityDistrict>('CityDistrict', schema);