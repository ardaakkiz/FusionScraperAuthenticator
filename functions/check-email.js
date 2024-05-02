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
        "volkan.eeris@gmail.com",
        "burakamazonco@gmail.com", // manuel eklendi
        "tugbacobanoglu_2@hotmail.com",
        "fatihkansudemircan@gmail.com",
        "gamze.cobannn@gmail.com",
        "nurcanpeksen7380@gmail.com",
        "kerempeksen7380@gmail.com",
        "mehmetozturk1903@outlook.com.tr",
        "okilavuz78@gmail.com",
        "elifa@degainternational.net"
    ]
    const userEmail = event.queryStringParameters.email;

    const isAllowed = allowedEmails.includes(userEmail);
    
    return {
        statusCode: 200,
        body: JSON.stringify({ allowed: isAllowed }),
    };
};