import fs from 'fs';

export interface ConfigFile {
    placeId: string;
    shopName: string;
    shopNickname: string;
    regionId: number;
    country: string;
    regionName: string;
    serverIp?: string;
    gameOptions: GameOptions;
    ocmOptions: OcmOptions;
    unix?: UnixOptions;
    notices?: string[];
    sentryDsn?: string;
}

export interface UnixOptions {
    setuid: number;
    setgid: number;
}

export interface GameOptions {

    // If set to 1, all gift cars (i.e. S2000, S660, etc. will be fully tuned.)
    // If set to 0, they will be left at their default tune (i.e. stock, basic tune, etc.)
    giftCarsFullyTuned: number;

    // If set to 1, the scratch game will be enabled and the player 
    // will be allowed to scratch boxes once every day. If this is 
    // set to 0, the scratch sheet will always be unavailable, 
    // however previously recieved items (or items provided by 
    // grantAllScratchRewards) will still be available. If the 
    // value is set to 2, there will be no limits on the number 
    // of times the player can scratch daily.
    scratchEnabled: number;

    // If set to 0, the standard scratch sheets (Same as the actual game)
    // will be available in order, e.g. R2, Corolla, and so on. 

    // If it is set to 1, random scratch sheets will be generated 
    // (with 1 scratch car, 25 window stickers, and 24 versus markers infinitely.)

    // OPTION 1 IS IN PROGRESS! PLEASE USE OPTION 2 FOR NOW!
    scratchType: number;

    // Amount of full-tunes to grant to newly registered cards
    grantFullTuneTicketToNewUsers: number;

    // Give meter reward every n*100 play
    giveMeterReward: number; // 1 is on, 0 is off

    // if the new card is not in the User databese
    // set this option to 1 will not create a new card
    // and prevent new card registration
    newCardsBanned: number; // 1 is on, 0 is off

    // revision check
    // set this option to 1 will block not matched revision
    // and from connecting to the server
    revisionCheck: number; // 1 is on, 0 is off

    // revision check
    // set this option to 1 to enable screenshot feature
    enableScreenshot: number; // 1 is on, 0 is off
}

// OCM Event Settings
export interface OcmOptions {

    // If ocm events are enabled or not
    // By default, it is set to false
    enabled?: boolean;

    // OCM Event number (also for changing the area)
    // This is not optional and needs to be specified manually,
    // however competitionIds should be assigned in order
    // (unless all have been used previously, in which case you 
    // can reuse previously used competitionIds.)
    competitionId: number;

    // Minigame pattern (i.e. )
    minigamePattern?: number;

    // Start timestamp (datetime) of OCM Qualifying
    // This is the only required timestamp, all following parameters
    // can be inferred based on 'qualifyingPeriodStartAt'.
    qualifyingPeriodStartAt: number;

    // Close timestamp (datetime) of OCM Qualifying
    // Default: 1 week (604800 seconds) after 'qualifyingPeriodStartAt'
    qualifyingPeriodCloseAt?: number;

    // Start timestamp (datetime) of OCM Main Draw
    // Default: 1 second after 'qualifyingPeriodCloseAt'
    competitionStartAt?: number;

    // Close timestamp (datetime) of OCM Main Draw
    // Default: 3 weeks (1814400 seconds) after 'competitionStartAt'
    competitionCloseAt?: number;

    // End timestamp (datetime) of Last tally, 
    // leaderboards are visible on terminal after this
    // Default: competitionCloseAt + 3600 (1 hour)
    competitionEndAt?: number;

    // Length of time between updating top ghost
    // default: 21000 (5 hours 50 minutes)
    lengthOfPeriod?: number;

    // Length of time between each period 
    // Setting this to 5-10 minutes prevents
    // the top ghost from being broken by 
    // an attempt against the old top ghost
    // being saved over the new top ghost
    // default: 600 (10 minutes)
    lengthOfInterval?: number;
}

export class Config {
    private static cfg: ConfigFile;

    static load() {
        console.log('Loading config file...');
        let cfg = fs.readFileSync('./config.json', 'utf-8');
        let json = JSON.parse(cfg);
        this.cfg = json as ConfigFile;
    }

    static getConfig(): ConfigFile {
        if (!this.cfg)
            this.load();

        return this.cfg;
    }
}
