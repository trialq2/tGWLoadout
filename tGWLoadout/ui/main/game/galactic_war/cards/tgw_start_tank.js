define([
    'module',
    'shared/gw_common',
    'cards/gwc_start'
], function (
    module,
    GW,
    GWCStart
) {
    var CARD = { id: /[^\/]+$/.exec(module.id).pop() };

    return {
        visible: function (params) { return false; },
        summarize: function (params) {
            return 'Commando Units';
        },
        icon: function (params) {
            return 'coui://ui/main/game/galactic_war/shared/img/red-commander.png';
        },
        describe: function (params) { return 'This commander thinks less is more, and has modifed his unit blueprints to that end. More health, more damage, but less speed and greater cost.'; },
        deal: function (system) {
            return {
                params: {
                    allowOverflow: true
                },
                chance: 0
            };
        },
        buff: function (inventory) {
            if (inventory.lookupCard(CARD) === 0) {
                // Make sure we only do the start buff/dull once
                var buffCount = inventory.getTag('', 'buffCount', 0);
                if (!buffCount) {
                    GWCStart.buff(inventory);
                    inventory.addUnits([
                        '/pa/units/air/fabrication_aircraft/fabrication_aircraft.json',
                        '/pa/units/air/bomber/bomber.json',
                        '/pa/units/air/fighter/fighter.json',
                        '/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json',
                        '/pa/units/air/bomber_adv/bomber_adv.json',
                        '/pa/units/air/fighter_adv/fighter_adv.json',
                        '/pa/units/air/gunship/gunship.json',
                        '/pa/units/air/transport/transport.json',
                        '/pa/units/land/fabrication_bot/fabrication_bot.json',
                        '/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json',
                        '/pa/units/land/assault_bot/assault_bot.json',
                        //'/pa/units/land/bot_grenadier/bot_grenadier.json',
                        '/pa/units/land/bot_aa/bot_aa.json',
                        '/pa/units/land/bot_bomb/bot_bomb.json',
                        '/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json',
                        '/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json',
                        '/pa/units/land/assault_bot_adv/assault_bot_adv.json',
                        '/pa/units/land/bot_sniper/bot_sniper.json',
                        '/pa/units/commanders/base_commander/base_commander.json',
                        '/pa/units/orbital/orbital_fighter/orbital_fighter.json',
                        '/pa/units/orbital/orbital_lander/orbital_lander.json',
                        '/pa/units/orbital/radar_satellite/radar_satellite.json',
                        '/pa/units/orbital/solar_array/solar_array.json',
                        '/pa/units/orbital/defense_satellite/defense_satellite.json',
                        '/pa/units/orbital/orbital_laser/orbital_laser.json',
                        '/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json',
                        '/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json',
                        '/pa/units/land/fabrication_vehicle/fabrication_vehicle.json',
                        '/pa/units/land/tank_light_laser/tank_light_laser.json',
                        '/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json',
                        '/pa/units/land/tank_armor/tank_armor.json',
                        '/pa/units/land/land_scout/land_scout.json',
                        '/pa/units/air/air_scout/air_scout.json',
                        '/pa/units/sea/sea_scout/sea_scout.json',
                        '/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json',
                        '/pa/units/land/tank_laser_adv/tank_laser_adv.json',
                        '/pa/units/land/tank_heavy_armor/tank_heavy_armor.json',
                        '/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json',
                        '/pa/units/sea/fabrication_ship/fabrication_ship.json',
                        '/pa/units/sea/frigate/frigate.json',
                        '/pa/units/sea/destroyer/destroyer.json',
                        '/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json',
                        '/pa/units/sea/missile_ship/missile_ship.json',
                        '/pa/units/sea/battleship/battleship.json',
                        '/pa/units/land/energy_plant/energy_plant.json',
                        '/pa/units/land/energy_plant_adv/energy_plant_adv.json',
                        '/pa/units/land/energy_storage/energy_storage.json',
                        '/pa/units/land/metal_extractor/metal_extractor.json',
                        '/pa/units/land/metal_extractor_adv/metal_extractor_adv.json',
                        '/pa/units/land/metal_storage/metal_storage.json',
                        '/pa/units/land/vehicle_factory/vehicle_factory.json',
                        //'/pa/units/land/bot_factory/bot_factory.json',
                        '/pa/units/sea/naval_factory/naval_factory.json',
                        '/pa/units/orbital/orbital_launcher/orbital_launcher.json',
                        '/pa/units/orbital/deep_space_radar/deep_space_radar.json',
                        '/pa/units/orbital/ion_defense/ion_defense.json',
                        '/pa/units/land/land_barrier/land_barrier.json',
                        '/pa/units/land/land_mine/land_mine.json',
                        '/pa/units/land/air_defense/air_defense.json',
                        '/pa/units/land/laser_defense_single/laser_defense_single.json',
                        '/pa/units/land/laser_defense/laser_defense.json',
                        //'/pa/units/land/artillery_short/artillery_short.json',
                        '/pa/units/land/air_defense_adv/air_defense_adv.json',
                        '/pa/units/land/laser_defense_adv/laser_defense_adv.json',
                        '/pa/units/sea/torpedo_launcher/torpedo_launcher.json',
                        '/pa/units/sea/torpedo_launcher_adv/torpedo_launcher_adv.json',
                        //'/pa/units/land/artillery_long/artillery_long.json',
                        '/pa/units/land/anti_nuke_launcher/anti_nuke_launcher.json',
                        '/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json',
                        '/pa/units/land/nuke_launcher/nuke_launcher.json',
                        '/pa/units/land/radar/radar.json',
                        '/pa/units/land/teleporter/teleporter.json',
                        '/pa/units/land/radar_adv/radar_adv.json'
                    ]);
                    //mods go here
                    var mods = [];
                    //units
                    var units = [
                        //'/pa/units/air/fabrication_aircraft/fabrication_aircraft.json',
                        '/pa/units/air/bomber/bomber.json',
                        '/pa/units/air/fighter/fighter.json',
                        //'/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json',
                        '/pa/units/air/bomber_adv/bomber_adv.json',
                        '/pa/units/air/fighter_adv/fighter_adv.json',
                        '/pa/units/air/gunship/gunship.json',
                        '/pa/units/air/transport/transport.json',
                        //'/pa/units/land/fabrication_bot/fabrication_bot.json',
                        //'/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json',
                        '/pa/units/land/assault_bot/assault_bot.json',
                        '/pa/units/land/bot_grenadier/bot_grenadier.json',
                        '/pa/units/land/bot_aa/bot_aa.json',
                        '/pa/units/land/bot_bomb/bot_bomb.json',
                        //'/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json',
                        //'/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json',
                        '/pa/units/land/assault_bot_adv/assault_bot_adv.json',
                        '/pa/units/land/bot_sniper/bot_sniper.json',
                        '/pa/units/orbital/orbital_fighter/orbital_fighter.json',
                        '/pa/units/orbital/orbital_lander/orbital_lander.json',
                        '/pa/units/orbital/radar_satellite/radar_satellite.json',
                        '/pa/units/orbital/solar_array/solar_array.json',
                        '/pa/units/orbital/defense_satellite/defense_satellite.json',
                        '/pa/units/orbital/orbital_laser/orbital_laser.json',
                        '/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json',
                        '/pa/units/orbital/orbital_factory/orbital_factory.json',
                        //'/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json',
                        //'/pa/units/land/fabrication_vehicle/fabrication_vehicle.json',
                        '/pa/units/land/tank_light_laser/tank_light_laser.json',
                        '/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json',
                        '/pa/units/land/tank_armor/tank_armor.json',
                        '/pa/units/land/land_scout/land_scout.json',
                        '/pa/units/air/air_scout/air_scout.json',
                        '/pa/units/sea/sea_scout/sea_scout.json',
                        //'/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json',
                        '/pa/units/land/tank_laser_adv/tank_laser_adv.json',
                        '/pa/units/land/tank_heavy_armor/tank_heavy_armor.json',
                        '/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json',
                        //'/pa/units/sea/fabrication_ship/fabrication_ship.json',
                        '/pa/units/sea/frigate/frigate.json',
                        '/pa/units/sea/destroyer/destroyer.json',
                        //'/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json',
                        '/pa/units/sea/missile_ship/missile_ship.json',
                        '/pa/units/sea/battleship/battleship.json',
                    ];
                    var modUnit = function(unit) {
                        mods.push({
                            file: unit,
                            path: 'navigation.move_speed',
                            op: 'multiply',
                            value: 0.75
                        });
                        mods.push({
                            file: unit,
                            path: 'navigation.brake',
                            op: 'multiply',
                            value: 0.75
                        });
                        mods.push({
                            file: unit,
                            path: 'navigation.acceleration',
                            op: 'multiply',
                            value: 0.75
                        });
                        mods.push({
                            file: unit,
                            path: 'navigation.turn_speed',
                            op: 'multiply',
                            value: 0.75
                        });
                        mods.push({
                            file: unit,
                            path: 'build_metal_cost',
                            op: 'multiply',
                            value: 1.3
                        });
                        mods.push({
                            file: unit,
                            path: 'max_health',
                            op: 'multiply',
                            value: 1.3
                        });
                    };
                    _.forEach(units, modUnit);


                    var ammo = [
                        '/pa/units/air/bomber/bomber_ammo.json',
                        '/pa/units/air/figher/fighter_ammo.json',
                        '/pa/units/air/bomber_adv/bomber_adv_ammo.json',
                        '/pa/units/air/figher_adv/figher_adv_ammo.json',
                        '/pa/units/air/gunship/gunship_ammo.json',
                        '/pa/units/land/assault_bot/assault_bot_ammo.json',
                        '/pa/units/land/bot_aa/bot_aa_ammo.json',
                        '/pa/units/land/bot_bomb/bot_bomb_ammo.json',
                        '/pa/units/land/assault_bot_adv/assault_bot_adv_ammo.json',
                        '/pa/units/land/bot_sniper/bot_sniper_ammo.json',
                        '/pa/units/land/air_defense/air_defense_ammo.json',
                        '/pa/units/land/laser_defense_single/laser_defense_single_ammo.json',
                        '/pa/units/land/laser_defense/laser_defense_ammo.json',
                        '/pa/units/land/air_defense_adv/air_defense_adv_ammo.json',
                        '/pa/units/land/laser_defense_adv/laser_defense_adv_ammo.json',
                        '/pa/units/sea/torpedo_launcher/torpedo_launcher_ammo.json',
                        '/pa/units/sea/torpedo_launcher_adv/torpedo_launcher_adv_ammo.json',
                        '/pa/units/land/tactical_missile_launcher/tactical_missile_launcher_ammo.json',
                        '/pa/units/orbital/ion_defense/ion_defense_ammo.json',
                        '/pa/units/orbital/orbital_fighter/orbital_fighter_ammo.json',
                        '/pa/units/orbital/defense_satellite/defense_satellite_ammo.json',
                        '/pa/units/orbital/orbital_laser/orbital_laser_ammo.json',
                        '/pa/units/sea/frigate/frigate_ammo_shell.json',
                        '/pa/units/sea/frigate/frigate_ammo_aa.json',
                        '/pa/units/sea/destroyer/destroyer_ammo.json',
                        '/pa/units/sea/destroyer/destroyer_torpedo_ammo.json',
                        '/pa/units/sea/sea_scout/sea_scout_ammo.json',
                        '/pa/units/sea/missile_ship/missile_ship_aa_ammo.json',
                        '/pa/units/sea/missile_ship/missile_ship_ammo.json',
                        '/pa/units/sea/battleship/battleship_ammo.json',
                        '/pa/units/land/tank_light_laser/tank_light_laser_ammo.json',
                        '/pa/units/land/aa_missile_vehicle/aa_missile_vehicle_ammo.json',
                        '/pa/units/land/tank_armor/tank_armor_ammo.json',
                        '/pa/units/land/land_scout/land_scout_ammo.json',
                        '/pa/units/land/tank_laser_adv/tank_laser_adv_ammo.json',
                        '/pa/units/land/tank_heavy_armor/tank_heavy_armor_ammo.json'
                    ];
                    var modAmmo = function(unit) {
                        mods.push({
                            file: unit,
                            path: 'damage',
                            op: 'multiply',
                            value: 1.3
                        });
                    };
                    _.forEach(ammo, modAmmo);

                    var ammo_with_splash = [
                        '/pa/units/land/artillery_short/artillery_short_ammo.json',
                        '/pa/units/land/artillery_long/artillery_long_ammo.json',
                        '/pa/units/land/tank_heavy_mortar/tank_heavy_mortar_ammo.json',
                        '/pa/units/land/bot_grenadier/bot_grenadier_ammo.json',
                    ];
                    var modAmmoSplash = function(unit) {
                        mods.push({
                            file: unit,
                            path: 'damage',
                            op: 'multiply',
                            value: 1.3
                        });
                        mods.push({
                            file: unit,
                            path: 'splash_damage',
                            op: 'multiply',
                            value: 1.3
                        });
                    };
                    _.forEach(ammo_with_splash, modAmmoSplash);

                    inventory.addMods(mods);
                }
                else {
                    // Don't clog up a slot.
                    inventory.maxCards(inventory.maxCards() + 1);
                }
                ++buffCount;
                inventory.setTag('', 'buffCount', buffCount);
            }
            else {
                // Don't clog up a slot.
                inventory.maxCards(inventory.maxCards() + 1);
                GW.bank.addStartCard(CARD);
            }
        },
        dull: function (inventory) {
            if (inventory.lookupCard(CARD) === 0) {
                var buffCount = inventory.getTag('', 'buffCount', 0);
                if (buffCount) {
                    // Perform dulls here
                    
                    inventory.setTag('', 'buffCount', undefined);
                }
            }
        }
    };
});
