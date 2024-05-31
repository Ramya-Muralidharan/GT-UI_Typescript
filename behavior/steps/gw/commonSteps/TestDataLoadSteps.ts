const { When } = require("@cucumber/cucumber")
import { world } from "../../../../ui/util/gw/world";
import { ReadTestDataFiles } from "../../../../ui/util/gw/ReadTestDataFile";
 
const readTestDataFiles = new ReadTestDataFiles()
 
When(/^the user loads (.*) data (.*) from json (.*)/, async function (t, stepArguments:any[]) {
    const module = stepArguments[0].replace(/["]/g, "")
    const identifier = stepArguments[1].replace(/["]/g, "")
    const jsonFileName = stepArguments[2].replace(/["]/g, "")
    world.dataMap.clear()
    world.dataMap = await readTestDataFiles.loadTestData(identifier,module, jsonFileName)
});