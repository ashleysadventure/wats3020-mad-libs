// WATS 3020 Mad Libs Assignment


let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).');


let authorName = prompt('What is your full name?');

let adjective1 = prompt('Describe a thing');

let vehicle = prompt('what is your favorite vehicle?');

let vehiclePart = prompt('what is a part is a part on a vehicle?');

let parking = prompt('where do you park a vehicle?');

let precious = prompt('What is a precious object?');

let noiseMaker = prompt('what is something that makes noise?');

let crowdBehavior = prompt('What do people do in a group?');

let adjective2 = prompt('Use an adjective');

let adjective3 = prompt('Use an adjective');

let color = prompt('What is a fun color?');

let familyMember = prompt('who is a family member you think of?');

let organ = prompt('what is your favorite body organ?');

let bodyPart1 = prompt('provide a body part');

let bodyPart2 = prompt('what is another body part?');

let bodyPart3 = prompt('give another body part.');

let thing = prompt('what do you give a plant?');

let thing2 = prompt('what do you give to someone you love?');

let thing3 = prompt('what do you give to someone you like?');

let adjective4 = prompt('Describe your vehicle in a word.');

let adjective5 = prompt('Use an adjective to describe your vehicle.');

let userNumber = prompt('What is your lucky number?');


let number2 = userNumber + 10;
let number3 = userNumber + 10 / userNumber;
// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;