import { TurnContext } from "botbuilder";
import { SSOCommand } from "./SSOCommand";

export class CallDownStreamAPI implements SSOCommand {
  commandMessage = "chat";

  async operationWithSSOToken(context: TurnContext, ssoToken: string) {
    
    if (ssoToken) {
        const response = await fetch("https://localhost:44351/api/WeatherForecast", {
        method: "POST",
        headers: {
          Authorization: `Bearer $ssoToken}`,
        },
      });
      const data = await response.json();
      await context.sendActivity(`${data}`);
    }
    else 
    {
      await context.sendActivity(
        "Toekn Invalid. Please sign in again."
      );
    }
    return;
  }
}
