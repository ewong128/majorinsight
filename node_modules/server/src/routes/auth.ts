export function authenticateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const authHeader = req.headers["authorization"];
    //Getting the 2nd part of the auth header (the token)
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      res.status(401).end();
    } else {
      jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
        if (decoded) next();
        else res.status(403).end();
      });
    }
  }
