const validateCreatedAtField = (req, res, next) => {
    const { createdAt } = req.body.description;
  
    const isFormatDate = /^\d{2}\/\d{2}\/\d{4}$/;
  
    if (!isFormatDate.test(createdAt)) {
      return res.status(400).json({
        message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'',
      });
    }
  
    next();
  };
  
  module.exports = validateCreatedAtField;