const HTTP_ERRO_STATUS = 400;

const validateName = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(HTTP_ERRO_STATUS).json({ message: 'O campo name é obrigatório' });
    }

    if (name.length < 4) {
        return res.status(HTTP_ERRO_STATUS).json(
            { message: 'O campo name deve ter pelo menos 4 caracteres' },
        );
    }

    next();
};

module.exports = validateName;