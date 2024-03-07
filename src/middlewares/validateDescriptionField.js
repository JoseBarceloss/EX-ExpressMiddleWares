const { HTTP_BAD_REQUEST_STATUS } = require('../utils/statusCodes');
const requiredKeys = require('../utils/DescriptionKey');

const validateDescriptionField = (req, res, next) => {
    const { description } = req.body;

    if (!description) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json(
            { message: 'O campo description é obrigatório' },
        );
    }

    const missingKey = requiredKeys.find((key) => !description[key]);

    if (missingKey) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json(
            { message: `O campo ${missingKey} é obrigatório` },
        );
    }

    next();
};

module.exports = validateDescriptionField;