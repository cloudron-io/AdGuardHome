// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export default class BlockedServicesApi {
    static async blockedServicesList(): Promise<string[] | Error> {
        return await fetch(`/blocked_services/list`, {
            method: 'GET',
        }).then(async (res) => {
            if (res.status === 200) {
                return res.json();
            } else {
                return new Error(String(res.status));
            }
        })
    }

    static async blockedServicesSet(string: string[]): Promise<number | Error> {
        return await fetch(`/blocked_services/set`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(string),
        }).then(async (res) => {
            if (res.status === 200) {
                return res.status;
            } else {
                return new Error(String(res.status));
            }
        })
    }
}
