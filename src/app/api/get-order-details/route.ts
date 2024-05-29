import { getErrorMessageHelper, getFailureResponse, getSuccessResponse } from "@/utilities/helpers/requestHelpers";
import details from "@/app/db.json";

// ----------------------------------------------------------------------

export async function POST() {
  try {
    // Respond with the order details.
    return getSuccessResponse({ details });
  } catch (error: any) {
    // Get the error message.
    const message = getErrorMessageHelper("Getting order details failed: ", error);

    // Respond indicating failure.
    return getFailureResponse(message);
  }
}
