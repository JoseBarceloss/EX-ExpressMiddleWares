const { HTTP_UNAUTHORIZED_STATUS } = require('../utils/statusCodes');

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || token.length !== 16) {
        return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'Token inválido!' });
    }

    next();
};

module.exports = authenticateToken;