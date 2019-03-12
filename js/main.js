const initMembersTable = (table, members) => document.getElementById(table).innerHTML = members
        .map(member => `<tr>
            <td><a href="${member.url}" target="_blank">${member.first_name} ${member.middle_name || ""} ${member.last_name}</a></td>
            <td>${member.party}</td>
            <td>${member.state}</td>
            <td>${member.seniority}</td>
            <td>${member.votes_with_party_pct + "%"}</td>
        </tr>`
        ).join("")

const buildCheckboxes = (element, members, chamber) =>
    document.getElementById(element).innerHTML = members
        .map(member => member.party)
        .filter((item, pos, self) => self.indexOf(item) === pos)
        .map(party => `<label>
            ${getPartyFullName(party)}
            <input type="checkbox" class="party-checkbox" value="${party}" onclick="filter('${chamber}')">
        </label>`).join("")

const getPartyFullName = partyInitial => partyInitial === "I"
    ? "Independant"
    : partyInitial === "D"
        ? "Democrat"
        : "Republican"

const filter = chamber => initMembersTable(chamber + "-data", getFilteredMembers(getMembersArray(chamber)))

const getMembersArray = chamber => chamber === "senate" ? senateMembers : houseMembers

const getCheckedParties = () => Array.from(document.querySelectorAll('.party-checkbox:checked'))
    .map(checkBox => checkBox.value)

const getFilteredMembers = members => getCheckedParties().length > 0
        ? members.filter(member => getCheckedParties().includes(member.party))
        : members