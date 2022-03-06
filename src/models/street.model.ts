import {model, Schema, Types} from "mongoose";

export interface IStreet {
    id: string,
    parentId: Types.ObjectId
    cityDistrictId?: Types.ObjectId
    c?: boolean // complemented
}

export const streetSchema = new Schema<IStreet>(
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
        },
        cityDistrictId: {
            type: Schema.Types.ObjectId,
            ref: 'CityDistrict'
        },
        c: {
            type: Boolean,
            required: false
        }

    },
    {
        toJSON: {versionKey: false, useProjection: true, getters: true},
        toObject: {versionKey: false, useProjection: true, getters: true}
    }
);

export const StreetModel = model<IStreet>('Street', streetSchema);