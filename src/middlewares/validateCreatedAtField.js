const { HTTP_BAD_REQUEST_STATUS } = require('../utils/statusCodes');

const validateCreatedAtField = (req, res, next) => {
    const { createdAt } = req.body;

    const date = /^\d{2}-\d{2}-\d{4}$/;
    
    if (!date.test(createdAt)) {
        return res.status(HTTP_BAD_REQUEST_STATUS).json(
            { message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' },
        ); 
}

    next();
};

module.exports = validateCreatedAtField;