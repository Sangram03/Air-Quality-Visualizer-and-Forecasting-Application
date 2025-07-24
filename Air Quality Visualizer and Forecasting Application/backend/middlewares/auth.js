import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
  }

  try {
    // ✅ THIS LINE MUST EXIST — this fixes "decoded is not defined"
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Save the user ID into req.userId so you can access it later
    req.userId = decoded.id;

    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default authMiddleware;
