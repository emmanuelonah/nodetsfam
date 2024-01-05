import { Schema } from 'mongoose';

class MongoHelpers {
    public _idToId = <SchemaT>(schema: Schema<SchemaT>) => {
        schema.virtual('id').get(function () {
            return (this as any)._id.toHexString();
        });
        schema.set('toJSON', { virtuals: true });
    };
}

export const mongoHelpers = new MongoHelpers();
