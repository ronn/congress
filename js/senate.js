window.onload = () => {
    initMembersTable("senate-data", senateMembers)
    buildCheckboxes("senate-checkBoxex", senateMembers, "senate")
    buildDropDown("senate-dropdown", senateMembers)
}