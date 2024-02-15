const url = 'http://localhost:3000';

const okRequest = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const noNameRequest = {
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const smallNameRequest = {
  "name": "Tri",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const noPriceRequest = {
  "name": "Trekking",
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const stringPriceRequest = {
  "name": "Trekking",
  "price": "Ten bucks",
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const negativePriceRequest = {
  "name": "Trekking",
  "price": -15,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const noDescriptionRequest = {
  "name": "Trekking",
  "price": 10,
}

const noCreatedAtRequest = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
  }
}

const noRatingRequest = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const noDifficultyRequest = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "createdAt": "10/08/2022"
  }
}

const invalidCreatedAtRequest = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Fácil",
    "createdAt": "10/08/22"
  }
}

const floatRatingRequest = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 4.5,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const zeroRatingRequest = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 0,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const biggerRatingRequest = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 25,
    "difficulty": "Fácil",
    "createdAt": "10/08/2022"
  }
}

const invalidDifficultyRequest = {
  "name": "Trekking",
  "price": 0,
  "description": {
    "rating": 5,
    "difficulty": "Simples",
    "createdAt": "10/08/2022"
  }
}

const okSignupRequest = {
  "email": "john_doe@email.com",
  "password": "123456",
  "firstName": "John",
  "phone": "5531999999999"
}

const noEmailRequest = {
  "password": "123456",
  "firstName": "John",
  "phone": "5531999999999"
}

const noPasswordRequest = {
  "email": "john_doe@email.com",
  "firstName": "John",
  "phone": "5531999999999"
}

const noFirstNameRequest = {
  "email": "john_doe@email.com",
  "password": "123456",
  "phone": "5531999999999"
}

const noPhoneRequest = {
  "email": "john_doe@email.com",
  "password": "123456",
  "firstName": "John",
}

const activities =  {
  okRequest,
  noNameRequest,
  smallNameRequest,
  noPriceRequest,
  stringPriceRequest,
  negativePriceRequest,
  noDescriptionRequest,
  noCreatedAtRequest,
  noRatingRequest,
  noDifficultyRequest,
  invalidCreatedAtRequest,
  floatRatingRequest,
  zeroRatingRequest,
  biggerRatingRequest,
  invalidDifficultyRequest
}

const signup = {
  okSignupRequest,
  noEmailRequest,
  noPasswordRequest,
  noFirstNameRequest,
  noPhoneRequest
}

module.exports = {
  url,
  activities,
  signup
}