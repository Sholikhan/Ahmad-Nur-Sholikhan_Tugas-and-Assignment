
var nama_input = ""
var role_input = ""
var availability_input = ""
var usia_input = ""
var lokasi_input = ""
var years_input = ""
var email_input = ""

function onChangeNama(event) {
    nama_input = event.target.value
}
function onChangeRole(event) {
    role_input = event.target.value
}
function onChangeAvailability(event) {
    availability_input = event.target.value
}
function onChangeUsia(event) {
    usia_input = event.target.value
}
function onChangeLokasi(event) {
    lokasi_input = event.target.value
}
function onChangeYears(event){
    years_input = event.target.value
}
function onChangeEmail(event){
    email_input = event.target.value
}

function onButtonClick() {
    nama = nama_input
    role = role_input
    availability = availability_input
    usia = usia_input
    lokasi = lokasi_input
    years = years_input
    email = email_input

    document.getElementById("nama").innerText = nama
    document.getElementById("role").innerText = role
    document.getElementById("availability").innerText = availability
    document.getElementById("usia").innerText = usia
    document.getElementById("lokasi").innerText = lokasi
    document.getElementById("years").innerText = years
    document.getElementById("email").innerText = email
}

function tampilkanNama() {
    alert(nama)
}
function tampilkanRole() {
    alert(role)
}
function tampilkanAvailability() {
    alert(availability)
}
function tampilkanUsia() {
    alert(usia)
}
function tampilkanLokasi(){
    alert(lokasi)
}
function tampilkanYears(){
    alert(years)
}
function tampilkanEmail(){
    alert(email)
}
