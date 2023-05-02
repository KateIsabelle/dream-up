import { SERVER_URL } from "./server";

export const double = async ({number}) => {

    console.log("number being passed down", number, typeof number);

    const url = new URL(`${SERVER_URL}double`);
    const response = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({number}),
    });
    const responseJson = await response.json();
    
    if (response.ok) {
        return responseJson;
    } else {
        throw new Error(responseJson.message);
    }
};