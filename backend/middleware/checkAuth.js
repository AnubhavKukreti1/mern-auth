import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
    try {
        let token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "User is not authenticated" });
        }

        // jwt.verify returns the decoded payload if verification succeeds
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the user ID to the request object
        req.userId = decoded.id; 
        next();

    } catch (error) {
        // Handle token expiration or invalid signature specifically as 401
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};