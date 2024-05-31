import { ClaimStatus } from "../../../../ui/pages/gw/generated/claimsolutions/pages/claim/claimSummaryGroup/ClaimStatus";
import { ClaimSummary_New } from "./scenarioPages/claim/claimSummaryGroup/ClaimSummary_New"
import { t } from 'testcafe'

const claimStatus = new ClaimStatus()
const claimSummary_New = new ClaimSummary_New()

export class ViewClaimSummaryScenario {
    async viewClaimSummary() {
        await t.expect(claimStatus.claimStatusClaimStatus.component.textContent).eql('Open')
    }

    async verifySummaryHeader() {
        await t.expect((claimSummary_New.summaryHeader).component.exsist).ok();
    }
}