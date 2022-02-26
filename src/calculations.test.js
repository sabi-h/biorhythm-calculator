import { calculateBiorhythms } from './calculations'

it('calculates the physical biorhythm', () => {
    const {physical} = calculateBiorhythms('1993-12-26', '2022-02-26');
    expect(physical).toBeCloseTo(0.8170);
})

it('calculates the emotional biorhythm', () => {
    const {emotional} = calculateBiorhythms('1993-12-26', '2022-02-26');
    expect(emotional).toBeCloseTo(0.2225);
})

it('calculates the intellectual biorhythm', () => {
    const {intellectual} = calculateBiorhythms('1993-12-26', '2022-02-26');
        expect(intellectual).toBeCloseTo(-0.9718);
})
