const initMembersTable = (table, members) => getElementById(table).innerHTML = members
        .map(member => `<tr>
            <td><a href="${member.url}" target="_blank">${member.first_name} ${member.middle_name || ""} ${member.last_name}</a></td>
            <td>${member.party}</td>
            <td>${member.state}</td>
            <td>${member.seniority}</td>
            <td>${member.votes_with_party_pct + "%"}</td>
        </tr>`
        ).join("")

const buildDropDown = (element, members) => getElementById(element).innerHTML =
    '<option value="">All</option>' +
    members.map(member => member.state)
        .filter((member, pos, states) => states.indexOf(member) === pos)
        .map(state => `<option value="${state}">${state}</option>`)
        .join("")

const getElementById = id => document.getElementById(id)

const buildCheckboxes = (element, members, chamber) =>
    getElementById(element).innerHTML = members
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

const getFilteredMembers = members => members
    .filter(filterByParty)
    .filter(filterByState)

const filterByParty = member => getCheckedParties().length > 0
    ? getCheckedParties().includes(member.party)
    : true

filterByState = member => getSelectedState() !== ""
    ? member.state === getSelectedState()
    : true

const getSelectedState = () => Array.from(document.getElementsByClassName("drop-down"))[0].value