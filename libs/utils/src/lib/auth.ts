import OAuth from "oauth-1.0a";
import type { Header, RequestOptions } from "oauth-1.0a";
import crypto from "crypto";
import env from "process"

// Initialize
const oauth = new OAuth({
    consumer: {
        key: process.env["CONSUMER_KEY"] || "",
        secret: process.env["CONSUMER_SECRET"] || "",
    },
    signature_method: "HMAC-SHA256",
    realm: process.env["REALM"],
    hash_function(base_string, key) {
        //log.debug("base_string", base_string);
        return crypto
            .createHmac("sha256", key)
            .update(base_string)
            .digest("base64");
    },
});

// Note: The token is optional for some requests
const token = {
    key: process.env["TOKEN_ID"] || "",
    secret: process.env["TOKEN_SECRET"] || "",
};

/**
 * Get OAuth data as Header
 * @param  {Object} request
 *
 * request_data is an object containing 'url' as a string
 *  and 'method' ('GET', 'POST', etc) as a string.
 *
 * @return {String} Header data key - value
 */
export function makeHeader(request: RequestOptions): string {
    const authorization = oauth.authorize(request, token);
    return oauth.toHeader(authorization).Authorization;
}