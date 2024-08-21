function secondsToMinutes(seconds: number): string {
    const min = seconds / 60;
    const rest = min - Math.floor(min);
    const init = Math.floor(min);
    const finalRound = Math.round(rest * 60);
    const final = finalRound === 0 ? "00" : finalRound < 10 ? `0${finalRound}` : finalRound;

    return `${init}:${final}`;
}

const timeConverters = {
    secondsToMinutes
}

export default timeConverters;