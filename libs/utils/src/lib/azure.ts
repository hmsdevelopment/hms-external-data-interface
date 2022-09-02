import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";


export async function getSecret(secretName: string = "REALM") {
    const credential = new DefaultAzureCredential();

    // Build the URL to reach your key vault
    const vaultName = "hms-netsuite-production";
    const url = `https://${vaultName}.vault.azure.net`;

    // Lastly, create our secrets client and connect to the service
    const client = new SecretClient(url, credential);

    const secret = await client.getSecret(secretName);

    console.log("secret:", secret);
    console.log("secret.value:", secret.value);
    
    // Get the secret
    return secret

}









