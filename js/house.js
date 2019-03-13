window.onload = () => {
    initMembersTable("house-data", houseMembers)
    buildCheckboxes("house-checkBoxex", houseMembers, "house")
    buildDropDown("house-dropdown", houseMembers)
}