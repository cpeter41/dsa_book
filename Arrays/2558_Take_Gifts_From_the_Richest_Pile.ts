function pickGifts(gifts: number[], k: number): number {
    while (k > 0) {
        k--;
        let max = 0;
        let index = 0;

        gifts.forEach((e, i) => {
            if (e > max) {
                max = e;
                index = i;
            }
            // picks the first val if multiple maxes
        });

        if (max > 1) {
            max = Math.floor(Math.sqrt(max));
            gifts[index] = max;
        };
    };

    return gifts.reduce((sum, e) => sum + e);
};