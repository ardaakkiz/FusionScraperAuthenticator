exports.handler = async (event) => {
    const allowedEmails = [
        'ardaakkiz@gmail.com',
        'user2@example.com'
    ]; 
    const userEmail = event.queryStringParameters.email;

    const isAllowed = allowedEmails.includes(userEmail);
    
    return {
        statusCode: 200,
        body: JSON.stringify({ allowed: isAllowed }),
    };
};