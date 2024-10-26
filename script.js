let votes = { yes: 0, no: 0 };

function vote(answer) {
    votes[answer]++;
    displayResults();
}

function displayResults() {
    const totalVotes = votes.yes + votes.no;
    const yesPercentage = totalVotes ? Math.round((votes.yes / totalVotes) * 100) : 0;
    const noPercentage = totalVotes ? Math.round((votes.no / totalVotes) * 100) : 0;

    document.getElementById('result').innerHTML = `
        Total Votes: ${totalVotes} <br>
        Yes: ${yesPercentage}% <br>
        No: ${noPercentage}%
    `;
}
