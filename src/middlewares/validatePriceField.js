const { HTTP_BAD_REQUEST_STATUS } = require('../utils/statusCodes');

const validatePrice = (req, res, next) => {
    const { price } = req.body;

    if (!price && price !== 0) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo price é obrigatório' });
    }

    if (typeof price !== 'number' || price < 0) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json(
            { message: 'O campo price deve ser um número maior ou igual a zero' },
        );
    }

    next();
};

module.exports = validatePrice;
