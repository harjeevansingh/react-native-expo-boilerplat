/* eslint-env node */

/** @type {import('expo/metro-config').MetroConfig} */

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./styles/global.css" });
