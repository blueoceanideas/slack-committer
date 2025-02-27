const core = require('@actions/core');
const github = require('@actions/github');

const mapping = new Map([
    // BOI
    ['LukeAbell', 'U0C7C8E3G'],
    ['Aidancs', 'U0405KDV8BV'],
    ['christophrumpel', 'U04ALUJS1KQ'],
    ['jlambe', 'U0130EQ0S6P'],
    
    // Spatie
    ['rubenvanassche', 'UCK2H2Z6V'],
    ['brendt', 'U7B46B49W'],
    ['sebastiandedeyne', 'U04SG19KQ'],
    ['AdrianMrn', 'UCKJ7ATPU'],
    ['freekmurze', 'U0251B640'],
    ['AlexVanderbist', 'U3Y68BH29'],
    ['willemvb', 'U025151HP'],
    ['riasvdv', 'UJA4K0423'],
    ['Nielsvanpach', 'U01AEH489NX'],
    ['Sam-Apostel', 'U03M8AUFG0K'],
    ['timvandijck', 'U04P44DCYPQ'],
])

try {
    const committer = github.context.actor;

    const output = mapping.has(committer)
        ? `<@${mapping.get(committer)}>`
        : committer;

    core.setOutput("username", output);
} catch (error) {
    core.setFailed(error.message);
}
