import ky from "ky"

const res = await ky.get("https://api64.ipify.org?format=json").json()
alert(res.ip)