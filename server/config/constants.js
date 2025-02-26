module.exports = {
  PORT: process.env.PORT || 2000,
  DB: {
    URI: process.env.MONGODB_URI,
    USER_COLLECTION: process.env.USER_COLLECTION,
    MESSAGE_COLLECTION: process.env.MESSAGE_COLLECTION,
    CONVERSATION_COLLECTION: process.env.CONVERSATION_COLLECTION,
  },
  JWT_SECRET: process.env.JWT_SECRET,
};

// 123446777
/**
 * 
 {
    "username" : "karan",
    "email": "test12345@test.com",
    "password": "123446777"
}
 */
