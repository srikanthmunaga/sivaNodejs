const successResponse = ({ email, username, token }) => {
    return {
      code: "200",
      message: "OK",
      data: {
        user: {
          email: email,
          username: username
        }
      },
      token: token
    };
  };
  
 const errorResponse = ({ code, message, extendedMessage }) => {
    return {
      code: code,
      message: message,
      data: {
        extendedMessage: extendedMessage
      }
    };
  };
  


exports.successResponse = successResponse;
exports.errorResponse = errorResponse;