exports.handler = async (event) => {
    const allowedEmails = [
        'ardaakkiz@gmail.com',
        'baran.ozer.yuce@gmail.com',
        'hello@asinbaba.com',
        "gulistanagcal@hotmail.com",
        "emrahkeles0604@gmail.com",
        "kahyeogluf@gmail.com",
        "emrealtan1525@gmail.com",
        "serdar_tur@hotmail.com",
        "ademoglu.h@gmail.com",
        "gezgin48@gmail.com",
        "volkan.eeris@gmail.com"
    ]
    const userEmail = event.queryStringParameters.email;

    const isAllowed = allowedEmails.includes(userEmail);
    
    return {
        statusCode: 200,
        body: JSON.stringify({ allowed: isAllowed }),
    };
};