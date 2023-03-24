const jwt = require("../utils/jwt");
const pool = require("../config/db-config");

module.exports = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        try {
            token.trim();
            //----------Check For Blacklisted Tokens-------------------
            const result = await pool.query(
                `
                    SELECT id FROM blacklist_tokens
                    WHERE token = $1
                `,
                [token]
            );

            if (result.rows.length > 0) {
                return res.status(401).json({ error: "Unauthorized" });
            }

            const decodedToken = jwt.verifyToken(token);
            const userId = decodedToken.sub;
            req.auth = userId;
            req.user = decodedToken;
            req.token = token;
            next();
        } catch (error) {
            return res.status(401).json({ error: "Unauthorized" });
        }
    } else {
        return res.status(400).json({ error: "Authorization header is missing" });
    }
};
