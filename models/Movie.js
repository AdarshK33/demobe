const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const movieSchema = new Schema({
    id: ObjectId,
    name: String,
    description: String,
    status: String,
    movie_Created_at: Date,
    movie_Udated_at: Date,
    movie_Deleted_at: Date
});

movieSchema.pre('save', function(next) {
    now = new Date();
    this. movie_Udated_at = now;
    if (!this. movie_Created_at) {
        this. movie_Created_at = now;
    }
    next();
});


module.exports = mongoose.model('Movies', movieSchema);