////////////////////
/// replace me 1 ///
////////////////////

var account;
web3.eth.getAccounts().then((f) => {
    account = f[0];
})

////////////////////
/// replace me 2 ///
////////////////////

candidates = { "Rama": "candidate-1", "Nick": "candidate-2", "Jose": "candidate-3" }

function voteForCandidate(candidate) {
    candidateName = $("#candidate").val();
    console.log(candidateName);

    contract.methods.voteForCandidate(web3.utils.asciiToHex(candidateName)).send({ from: account }).then((f) => {
        let div_id = candidates[candidateName];
        contract.methods.totalVotesFor(web3.utils.asciiToHex(candidateName)).call().then((f) => {
            $("#" + div_id).html(f);
        })
    })
}

$(document).ready(function () {
    candidateNames = Object.keys(candidates);

    for (var i = 0; i < candidateNames.length; i++) {
        let name = candidateNames[i];

        contract.methods.totalVotesFor(web3.utils.asciiToHex(name)).call().then((f) => {
            $("#" + candidates[name]).html(f);
        })
    }
});
