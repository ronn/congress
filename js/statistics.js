const getNumberMembersByParty = party => getMembersArray("senate")
    .filter(member => member.party === party)
    .length

const statistics = {
    numberOfDemocrats: getNumberMembersByParty("R"),
    numberOfRepublicans: getNumberMembersByParty("D"),
    numberOfIndependents: getNumberMembersByParty("I")
}