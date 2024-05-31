export class ReadTestDataFiles{
    async loadTestData(testCaseID: string, module: string, jsonFileName: string): Promise<Map<string, any>> {
        let jsonData: any;
        try {
            jsonData = require(`../../testdata/${module}/${jsonFileName}.json`);
        } catch (error) {
            console.error(`Failed to load JSON file: ${error}`);
            return new Map<string, any>();
        }
     
        let testCaseDataMap = new Map<string, any>();
     
        // Ensure jsonData[testCaseID] is not null or undefined before iterating
        if (jsonData[testCaseID]) {
            for (const [defaultDataKey, defaultDataValue] of Object.entries(jsonData[testCaseID])) {
                if (typeof defaultDataValue === 'object' && defaultDataValue !== null) {
                    for (const [key, value] of Object.entries(defaultDataValue)) {
                        testCaseDataMap.set(key, value);
                    }
                } else {
                    testCaseDataMap.set(defaultDataKey, defaultDataValue);
                }
            }
        } else {
            console.warn(`Test case ID ${testCaseID} not found in JSON data`);
        }
     
        return testCaseDataMap;
    }
}