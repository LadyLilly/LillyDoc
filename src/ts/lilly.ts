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
     * @param e - Keyboard event
     */
    private keyHandler(e: KeyboardEvent): void {
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
            const li = document.createElement('LI');
            li.classList.add('ac-item');
            li.innerHTML = `${user.firstName} ${user.lastName}`;
        });
    }
}
