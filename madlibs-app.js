function madLibs(){

    // Create parts-of-speech prompts
    var speech = [
        'Enter a noun (e.g. dog)',
        'Enter a pronoun (e.g. she)',
        'Enter a verb (e.g. laugh)',
        'Enter an adjective (e.g. funny)',
        'Enter an adverb (e.g. funnily)',
        'Enter a preposition (e.g. with, until)',
        'Enter a conjunction (e.g. and, but, because)',
        'Enter an interjection (e.g. Wow!, Doh!)'
    ];
    
    var logs = [[],[],[],[],[],[],[],[]];       // Logs to collect & sort input
    var word = '';                              // Container to push input into logs

    // Request username and greet user
    var name = window.prompt('First, please enter your username!');
    alert(`Hello, ${name}! Let's begin our story. Once upon a time...`)
    
    // Loop per round of prompts
    for (var round = 1; round > 0; round++) {

        var types = Math.floor(Math.random() * 8);  // Randomize prompt
        word = window.prompt(speech[types]);    // Prompt user according to random input type

        if (word === null) {                    // If user presses 'Cancel', break loop
            break;
        }
        else {
            logs[types].push(` ${word}`);       // Else, push word into corresponding log
        }
    
        // Send alerts at certain rounds
        if (round == 8){
            alert(`Keep on going, ${name}! This story is shaping up nicely! :)`)
        }
        if (round == 16){
            alert(`${name}, you can 'Cancel' anytime to see your story, or wait 'til the very end!`)
        }
        if (round == 20){
            alert(`${name}, I think you should just 'Cancel' and take a break :)`)
        }
    }
    
    // Base story on how many rounds they went
    if (round < 10){
        var summary = 'They were not very patient!'
    }
    else if (round < 17){
        var summary = 'They were very patient!'
    }
    else if (round >= 17){
        var summary = 'They were very gullible!'
    }
        
    // Output results and explanations for story
    var results = (`
        <h2>LOL! The jokes on you! The real story is...</h2>
        <p>"There once was a person named ${name}. ${summary}"<br>&nbsp;</p>
        <h2>What just happened?</h2>
        <p>You were tricked into an infinite loop of prompts!<br>&nbsp;</p>
        <h2>You 'scored' ${round-1} words!</h2>
        <p>${name}, here are your results:</p>
        <ul><li>Nouns (${logs[0].length}):${logs[0]}</li>
            <li>Pronouns (${logs[1].length}):${logs[1]}</li>
            <li>Verbs (${logs[2].length}):${logs[2]}</li>
            <li>Adjectives (${logs[3].length}):${logs[3]}</li>
            <li>Adverbs (${logs[4].length}):${logs[4]}</li>
            <li>Prepositions (${logs[5].length}):${logs[5]}</li>
            <li>Conjunctions (${logs[6].length}):${logs[6]}</li>
            <li>Interjections (${logs[7].length}):${logs[7]}</li></ul>
        <p>Share this with a friend & see how long they last!</p>
    `)
    document.getElementById('title').innerHTML = '<h1>JUST KIDDING!</h1>'
    document.getElementById('story').innerHTML = results;
        
}