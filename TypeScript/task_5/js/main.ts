interface MajorCredits {
    credits: number;
    _majorBrand: "MajorCredits";
}

interface MinorCredits {
    credits: number;
    _minorBrand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, _majorBrand: "MajorCredits" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, _minorBrand: "MinorCredits" };
}

// Example usage:
const majorCourse1: MajorCredits = { credits: 3, _majorBrand: "MajorCredits" };
const majorCourse2: MajorCredits = { credits: 4, _majorBrand: "MajorCredits" };
const minorCourse1: MinorCredits = { credits: 2, _minorBrand: "MinorCredits" };
const minorCourse2: MinorCredits = { credits: 1, _minorBrand: "MinorCredits" };

console.log(sumMajorCredits(majorCourse1, majorCourse2));
console.log(sumMinorCredits(minorCourse1, minorCourse2)); 
