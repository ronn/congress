const getSenateMembers = () => getMembersArray("senate")

getMembersByParty = party => getSenateMembers()
    .filter(member => member.party === party)

const getNumberMembersByParty = party => getMembersByParty(party).length

const getAverageVotes = party => getMembersByParty(party)
    .map(senator => senator.votes_with_party_pct)
    .reduce(addVotes) / getSenateMembers().length

const addVotes = (accumulator, votes) => accumulator + votes














const statistics = {
    democrats: {
        numberOfReps: getNumberMembersByParty("D"),
        averageVotesWithParty: getAverageVotes("D")
    },
    republicans: {
        numberOfReps: getNumberMembersByParty("R"),
        averageVotesWithParty: getAverageVotes("R")
    },
    independants: {
        numberOfReps: getNumberMembersByParty("I"),
        averageVotesWithParty: getAverageVotes("I")
    },
}