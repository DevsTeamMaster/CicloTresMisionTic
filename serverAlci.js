// ojo esto es solo para trabajar la autenticación del bac toca elminarlo después

import jwt from "express-jwt";
import jwks from 'jwks-rsa';


//código de autenticación con el token de todas las dependencias

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://devsteammaster.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'api-autenticacion-devsteammaster',
  issuer: 'https://devsteammaster.us.auth0.com/',
  algorithms: ['RS256']
});

app.use(jwtCheck);
