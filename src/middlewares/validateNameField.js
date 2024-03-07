const { HTTP_BAD_REQUEST_STATUS } = require('../utils/statusCodes');

const validateNameField = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'O campo name é obrigatório' });
    }

    if (name.length < 4) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json(
            { message: 'O campo name deve ter pelo menos 4 caracteres' },
        );
    }

    next();
};

module.exports = validateNameField;