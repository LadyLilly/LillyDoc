import { LillyOptions } from "./interfaces/lillyOptions";

/**
 * The main Lilly class
 */
class Lilly {
    private options: LillyOptions;

    constructor(options: LillyOptions) {
        this.options = options;
    }

    /**
     * Init the Lilly class
     */
    public init(): void {
        console.log('Initializing LillyJS');
    }

    /**
     * Handles all keyboard events
     */
    private keyHandler(): void {
        console.log('Keyhandler');
    }

    /**
     * Append items to list
     *
     * @param users
     */
    private appendItems(users: any): void {
        console.log('AppendItems');
        users.forEach((user: any) => {
            console.log('ForEachUser');
        });
    }
}
