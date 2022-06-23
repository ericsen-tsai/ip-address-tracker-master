// map init
var map = L.map("map").setView([25.0624007, 121.3655983], 18)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map)
var marker = L.marker([25.0624007, 121.3655983]).addTo(map)

// form submit
const API_KEY = ""
const contentForm = document.querySelector(".content__form")
const contentInput = document.querySelector(".content__input")

const contentIPAddress = document.querySelector(
  ".content__info-value--ip-address"
)
const contentLocation = document.querySelector(".content__info-value--location")
const contentTimeZone = document.querySelector(".content__info-value--timezone")
const contentISP = document.querySelector(".content__info-value--isp")

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const IPToSearch = contentInput.value.trim()
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}&ipAddress=${IPToSearch}`
    )
    const data = await response.json()
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

contentForm.addEventListener("submit", handleSubmit)
contentInput.addEventListener("focus", () => {
  contentInput.value = null
})

/*
error response:
{
  "code": 422,
  "messages": "Input correct IPv4 or IPv6 address."
} 
*/
