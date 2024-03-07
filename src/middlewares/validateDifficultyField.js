const { HTTP_BAD_REQUEST_STATUS } = require('../utils/statusCodes');

const validateDifficultyField = (req, res, next) => {
    const difficulty = String(req.body.description.difficulty);

    if (difficulty !== 'Fácil' && difficulty !== 'Médio' && difficulty !== 'Difícil') {
        return res.status(HTTP_BAD_REQUEST_STATUS).json({
            message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'',
        });
    }

    next();
};

module.exports = validateDifficultyField;
