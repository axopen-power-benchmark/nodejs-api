
const jwt = require('jsonwebtoken');
const {deleteNullValues} = require("./json-utils");

const connectedUser = (req) => {
    const authorization = req.headers.authorization;
    return extractToken(authorization.split(' ')[1]);
}

const extractToken = (token) => {
        return jwt.decode(token);
};

const verifyAndExtractToken = (token) => {
    return jwt.verify(token, process.env.SECRET_JWT, (err, content) => {
        if (err) {
            return null;
        }
        return content;
    });
}

const createToken = (user) => {
    deleteNullValues(user);
    delete user.password;
    delete user.is_verified;
    const jwtToken = jwt.sign(
        user,
        process.env.SECRET_JWT,
        {
            expiresIn: 60 * 60 * 24 * 7 // 7 days
        }
    );
    return {
        user,
        jwtToken
    }
};

module.exports = {createToken, extractToken, connectedUser, verifyAndExtractToken};
