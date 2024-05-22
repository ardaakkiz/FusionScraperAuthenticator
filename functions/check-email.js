exports.handler = async (event) => {
    const allowedEmails = [
        'ardaakkiz@gmail.com',
        'baran.ozer.yuce@gmail.com',
        'hello@asinbaba.com',
        'emrekoca86@gmail.com',
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
        "elifa@degainternational.net",
        "tfscerci@gmail.com",
        "niyazi_kabak@hotmail.com",
        "geneburak@gmail.com",
        "merveesahin96@gmail.com",
        "sinan.sumaktas@outlook.com",
        "Hachikokuki@gmail.com",
        "gulcihanozyuksel@gmail.com",
        "samet501@windowslive.com",
        "kanguxx@gmail.com",
        "burakamazonco@gmail.com",
        "ademkizilkaya87@gmail.com",
        "onrergul@gmail.com",
        "omerfaruk567248@gmail.com",
        "omeryardim2@hotmail.com",
        "Alexideaa@gmail.com",
        "memetsaid619@gmail.com",
        "sefagler@gmail.com",
        "cigdemozaltin@gmail.com",
        "asrinstoreseller@gmail.com",
        "enesatak19072002@gmail.com",
        "efecantfamazon@gmail.com",
        "ismetbukuamazon@gmail.com",
        "llcdarkblue@gmail.com",
        "aidakimuk@gmail.com",
        "canberkkundakci@hotmail.com"
    ]
    const userEmail = event.queryStringParameters.email;

    const isAllowed = allowedEmails.includes(userEmail);
    
    return {
        statusCode: 200,
        body: JSON.stringify({ allowed: isAllowed }),
    };
};