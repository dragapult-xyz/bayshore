export const OcmData = {
    // Valid competition IDs
    competitionIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],

    // Valid minigame pattern IDs
    minigamePatternIds: [1, 2, 3, 4, 5, 6],

    // OCM Area Data
    // These are the default ramp / path / areas which
    // will be selected for the given competition id
    // if no custom area / ramp / path is specified.

    // Thanks @ShiroiKitsu8 for this data!
    area: [
        // No competition id 0
        0,
        // 16th - C1
        0,
        // 17th - Osaka
        9,
        // 18th - Fukuoka
        11,
        // 19th - Nagoya
        8,
        // 6th - C1
        0,
        // 7th - Sub Center
        2,
        // 8th - Hakone
        12,
        // 20th - Kobe
        10,
        // 21st - Hiroshima
        18,
    ],

    // Nameplate Sets
    nameplates: [
        // This is a unique data set, for the intention
        // of giving the user(s) the nameplate they are
        // missing if they get a nameplate they already
        // have. This documents all of the ocm nameplates
        // obtainable in MT6 (via official competitions).

        // Placeholder
        {
            minigame: [], // Earnt from playing qualifier
            qualifying: 0, // Earnt by qualifying
            goldplate: 0, // Earnt from top 'x' placing
        },

        // Minigame Pattern 1
        {
            minigame: [0xc8, 0xc9, 0xca, 0xcb],
            qualifying: 0xcc,
            goldplate: 0xcd,
        },

        // Minigame Pattern 2
        {
            minigame: [0xce, 0xcf, 0xd0, 0xd1],
            qualifying: 0xd2,
            goldplate: 0xd3,
        },

        // Minigame Pattern 3
        {
            minigame: [0xd4, 0xd5, 0xd6, 0xd7],
            qualifying: 0xd8,
            goldplate: 0xd9,
        },

        // Minigame Pattern 4
        {
            minigame: [0xda, 0xdb, 0xdc, 0xdd],
            qualifying: 0xde,
            goldplate: 0xdf,
        },

        // Minigame Pattern 5
        {
            minigame: [0xe0, 0xe1, 0xe2, 0xe3],
            qualifying: 0xe4,
            goldplate: 0xe5,
        },

        // Minigame Pattern 6
        {
            minigame: [0xe6, 0xe7, 0xe8, 0xe9],
            qualifying: 0xea,
            goldplate: 0xeb,
        },
    ],
};