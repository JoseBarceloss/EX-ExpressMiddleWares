const { HTTP_BAD_REQUEST_STATUS } = require('../utils/statusCodes');

const validateRatingField = (req, res, next) => {
    const rating = Number(req.body.description.rating);

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({
            message: 'O campo rating deve ser um número inteiro entre 1 e 5',
        });
    }

    next();
};

module.exports = validateRatingField;
