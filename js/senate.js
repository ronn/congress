window.onload = () =>
    document.getElementById("senate-data").innerHTML = membersTable

const membersTable = members.map(member =>
    `<tr>
            <td><a href="${member.url}" target="_blank">${member.first_name} ${member.middle_name || ""} ${member.last_name}</a></td>
            <td>${member.party}</td>
            <td>${member.state}</td>
            <td>${member.seniority}</td>
            <td>${member.votes_with_party_pct + "%"}</td>
        </tr>`
).join("")