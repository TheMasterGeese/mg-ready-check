[version-shield]: https://img.shields.io/github/v/release/TheMasterGeese/mg-ready-check
[version-url]: https://github.com/TheMasterGeese/mg-ready-check/releases/latest
[forks-shield]: https://img.shields.io/github/forks/TheMasterGeese/mg-ready-check
[forks-url]: https://github.com/TheMasterGeese/mg-ready-check/network/members
[stars-shield]: https://img.shields.io/github/stars/TheMasterGeese/mg-ready-check
[stars-url]: https://github.com/TheMasterGeese/mg-ready-check/stargazers
[issues-shield]: https://img.shields.io/github/issues/TheMasterGeese/mg-ready-check
[issues-url]: https://github.com/TheMasterGeese/mg-ready-check/issues
[license-shield]: https://img.shields.io/github/license/TheMasterGeese/mg-ready-check
[license-url]: https://github.com/TheMasterGeese/mg-ready-check/blob/master/LICENSE.md
[last-updated-shield]: https://img.shields.io/github/last-commit/TheMasterGeese/mg-ready-check

# MG Living World - Ready Check

MG Living World - Ready Check is a system agnostic module for Foundry VTT designed to help GM's and players communicate when they're ready to play. The mod is intended to act as a dependency for other MG Living World mods, but can be enabled on its own as well. GM's are given the option to initiate ready checks, and both GM's and players can indicate that they're ready (or not) at any time.

This mod is based off the ["Ready Check Go!" mod by crash1115](https://github.com/crash1115/ready-check), special thanks to their work on this module.


[![Version][version-shield]][version-url]
![Last Updated][last-updated-shield]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

### Table of Contents

- [Starting a Ready Check](#Starting-a-Ready-Check)
- [Responding to a Ready Check](#Responding-to-a-Ready-Check)
- [Updating Your Ready Status](#Updating-Your-Ready-Status)
- [Compatibility](#Compatibility)
- [Changelog](#Changelog)
- [Contributing](#Contributing)
- [Contact](#Contact)
- [License](#License)

## Starting a Ready Check (GM Only)
To initiate a ready check, you must be logged in as a user with GM permissions. Click on the hourglass button above the chat input, then select "Start A Ready Check". This will reset all player statuses to "Not Ready" and put a dialog on each user's screen asking them if they're ready.

You can use the Ready Check when you first start up the game, right before combat starts, or when you're taking a quick break so you can see when everyone is back and ready to play!

Also exposes a hook to trigger a ready check with a custom message, or to only include a specific subset of users. These hooks are also used within other MG Living World mods, used to control the flow of combat and keep players from missing important notifications.

## Responding to a Ready Check (GM and Players)
When a ready check is initiated, a dialog will display on each user's screen. To let everyone know you're ready, just click the "Ready" button at the bottom of the window. When you do so, a green check mark will appear next to your name in the players window.

## Updating Your Ready Status (GM and Players)
Any user can update their status from "Ready" to "Not Ready" (and vice versa) at any time. To do this, click on the hourglass button above the chat input. (If you're logged in as GM, select the "Set My Ready Status" option; players won't need to.) This will display a dialog with buttons you can use to set your desired status. When you set your status to "Ready", a green check mark should appear next to your name. When you're set to "Not Ready", a red X will display instead.

You can use this toggle to help your group see when you have to step away to take a phone call, answer the door, slay the kobolds that have suddenly invaded your office, or when you just need a couple extra minutes to sort through your 9,000 spells to figure out which ones you'd like to prepare today. Pfft, wizards...

# Compatibility
- Should be compatible with all systems.
- Might have display issues with other modules that modify the players UI or the area around the chat interface.

## Changelog
See [CHANGELOG](CHANGELOG.md)

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)

## License
- The original work done by crash1115 is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/legalcode).
- This work is licensed under the [Foundry Virtual Tabletop EULA - Limited License Agreement for Module Development](https://foundryvtt.com/article/license/) and [MIT License](LICENSE).

## Contact
Contact MasterGeese via Discord (Khankar#2236) or email (themastergeese@gmail.com).
