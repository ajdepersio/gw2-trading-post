import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            {
                "name": "Nougat Center",
                "type": "CraftingMaterial",
                "level": 0,
                "rarity": "Masterwork",
                "vendor_value": 25,
                "game_types": [
                    "Activity",
                    "Wvw",
                    "Dungeon",
                    "Pve"
                ],
                "flags": [],
                "restrictions": [],
                "id": 36061,
                "chat_link": "[&AgHdjAAA]",
                "icon": "https://render.guildwars2.com/file/096A9B4F79A323C335921E30A824AFF505E270BE/499399.png"
            },
            {
                "name": "Abomination Hammer",
                "type": "Weapon",
                "level": 0,
                "rarity": "Fine",
                "vendor_value": 0,
                "default_skin": 5014,
                "game_types": [
                    "Activity",
                    "Wvw",
                    "Dungeon",
                    "Pve"
                ],
                "flags": [
                    "NoSell",
                    "SoulbindOnAcquire",
                    "SoulBindOnUse"
                ],
                "restrictions": [],
                "id": 15,
                "chat_link": "[&AgEPAAAA]",
                "icon": "https://render.guildwars2.com/file/E8507FFB6CF3C9094A69956344CEDBD9B47D95B6/434872.png",
                "details": {
                    "type": "Hammer",
                    "damage_type": "Physical",
                    "min_power": 146,
                    "max_power": 165,
                    "defense": 0,
                    "infusion_slots": [],
                    "infix_upgrade": {
                        "id": 112,
                        "attributes": []
                    },
                    "secondary_suffix_item_id": ""
                }
            },
            {
                "name": "Mighty Country Coat",
                "description": "",
                "type": "Armor",
                "level": 0,
                "rarity": "Basic",
                "vendor_value": 7,
                "default_skin": 13,
                "game_types": [
                    "Activity",
                    "Wvw",
                    "Dungeon",
                    "Pve"
                ],
                "flags": [
                    "NotUpgradeable"
                ],
                "restrictions": [],
                "id": 69,
                "chat_link": "[&AgFFAAAA]",
                "icon": "https://render.guildwars2.com/file/F03808FFE89B40044671EED2E427053B389BE0A1/61007.png",
                "details": {
                    "type": "Coat",
                    "weight_class": "Light",
                    "defense": 24,
                    "infusion_slots": [],
                    "infix_upgrade": {
                        "id": 137,
                        "attributes": [
                            {
                                "attribute": "Power",
                                "modifier": 5
                            }
                        ]
                    },
                    "secondary_suffix_item_id": ""
                }
            }
        ];
    }
});
