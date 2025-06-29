require('dotenv').config()

const { default: GoLogin } = require("gologin-commonjs");

async function openBrowser(gologin_profile_id) {
  const GL = new GoLogin({
    token: process.env.GOLOGIN_TOKEN,
    profile_id: gologin_profile_id,
    checkBrowserUpdate: false,
    restoreLastSession: false,
    customArgs: ["--disable-notifications"],
  });

  let gl = null;
  gl = await GL.start();
  if (gl == null) {
    await GL.stop();
    throw new Error("Failed to start GoLogin");
  }
}

openBrowser(process.env.GOLOGIN_PROFILE_ID)
