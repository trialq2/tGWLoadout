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
            return 'Molasses Commander';
        },
        icon: function (params) {
            return 'coui://ui/main/game/galactic_war/shared/img/red-commander.png';
        },
        describe: function (params) { return 'This commander is laden with tech upgrades. Slow, but able to build tier 2 structures at great distances.'; },
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
      '/pa/units/air/air_factory/air_factory.json',
      '/pa/units/air/air_factory_adv/air_factory_adv.json',
      '/pa/units/air/air_scout/air_scout.json',
      '/pa/units/air/base_flyer/base_flyer.json',
      '/pa/units/air/bomber/bomber.json',
      '/pa/units/air/bomber_adv/bomber_adv.json',
      '/pa/units/air/fabrication_aircraft/fabrication_aircraft.json',
      '/pa/units/air/fabrication_aircraft_adv/fabrication_aircraft_adv.json',
      '/pa/units/air/fighter/fighter.json',
      '/pa/units/air/fighter_adv/fighter_adv.json',
      '/pa/units/air/gunship/gunship.json',
      '/pa/units/air/transport/transport.json',
      '/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json',
      '/pa/units/land/air_defense/air_defense.json',
      '/pa/units/land/air_defense_adv/air_defense_adv.json',
      '/pa/units/land/amphibious_bot/amphibious_bot.json',
      '/pa/units/land/anti_nuke_launcher/anti_nuke_launcher.json',
      '/pa/units/land/artillery_long/artillery_long.json',
      '/pa/units/land/artillery_short/artillery_short.json',
      '/pa/units/land/assault_bot/assault_bot.json',
      '/pa/units/land/assault_bot_adv/assault_bot_adv.json',
      '/pa/units/land/avatar_factory/avatar_factory.json',
      '/pa/units/land/base_bot/base_bot.json',
      '/pa/units/land/base_structure/base_structure.json',
      '/pa/units/land/base_unit/base_unit.json',
      '/pa/units/land/base_vehicle/base_vehicle.json',
      '/pa/units/land/bot_aa/bot_aa.json',
      '/pa/units/land/bot_bomb/bot_bomb.json',
      '/pa/units/land/bot_factory/bot_factory.json',
      '/pa/units/land/bot_factory_adv/bot_factory_adv.json',
      '/pa/units/land/bot_grenadier/bot_grenadier.json',
      '/pa/units/land/bot_sniper/bot_sniper.json',
      '/pa/units/land/bot_spider_adv/bot_spider_adv.json',
      '/pa/units/land/bot_tactical_missile/bot_tactical_missile.json',
      '/pa/units/land/control_module/control_module.json',
      '/pa/units/land/energy_plant/energy_plant.json',
      '/pa/units/land/energy_plant_adv/energy_plant_adv.json',
      '/pa/units/land/energy_storage/energy_storage.json',
      '/pa/units/land/fabrication_bot/fabrication_bot.json',
      '/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json',
      '/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json',
      '/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json',
      '/pa/units/land/fabrication_vehicle/fabrication_vehicle.json',
      '/pa/units/land/fabrication_vehicle_adv/fabrication_vehicle_adv.json',
      '/pa/units/land/land_barrier/land_barrier.json',
      '/pa/units/land/land_mine/land_mine.json',
      '/pa/units/land/land_scout/land_scout.json',
      '/pa/units/land/laser_defense/laser_defense.json',
      '/pa/units/land/laser_defense_adv/laser_defense_adv.json',
      '/pa/units/land/laser_defense_single/laser_defense_single.json',
      '/pa/units/land/metal_extractor/metal_extractor.json',
      '/pa/units/land/metal_extractor_adv/metal_extractor_adv.json',
      '/pa/units/land/metal_storage/metal_storage.json',
      '/pa/units/land/nuke_launcher/nuke_launcher.json',
      '/pa/units/land/radar/radar.json',
      '/pa/units/land/radar_adv/radar_adv.json',
      '/pa/units/land/tactical_missile_launcher/tactical_missile_launcher.json',
      '/pa/units/land/tank_amphibious_adv/tank_amphibious_adv.json',
      '/pa/units/land/tank_armor/tank_armor.json',
      '/pa/units/land/tank_heavy_armor/tank_heavy_armor.json',
      '/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json',
      '/pa/units/land/tank_hover/tank_hover.json',
      '/pa/units/land/tank_laser_adv/tank_laser_adv.json',
      '/pa/units/land/tank_light_laser/tank_light_laser.json',
      '/pa/units/land/teleporter/teleporter.json',
      '/pa/units/land/unit_cannon/unit_cannon.json',
      '/pa/units/land/vehicle_factory/vehicle_factory.json',
      '/pa/units/land/vehicle_factory_adv/vehicle_factory_adv.json',
      '/pa/units/orbital/base_orbital/base_orbital.json',
      '/pa/units/orbital/base_orbital_structure/base_orbital_structure.json',
      '/pa/units/orbital/deep_space_radar/deep_space_radar.json',
      '/pa/units/orbital/defense_satellite/defense_satellite.json',
      '/pa/units/orbital/delta_v_engine/delta_v_engine.json',
      '/pa/units/orbital/ion_defense/ion_defense.json',
      '/pa/units/orbital/mining_platform/mining_platform.json',
      '/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json',
      '/pa/units/orbital/orbital_factory/orbital_factory.json',
      '/pa/units/orbital/orbital_fighter/orbital_fighter.json',
      '/pa/units/orbital/orbital_lander/orbital_lander.json',
      '/pa/units/orbital/orbital_laser/orbital_laser.json',
      '/pa/units/orbital/orbital_launcher/orbital_launcher.json',
      '/pa/units/orbital/radar_satellite/radar_satellite.json',
      '/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json',
      '/pa/units/orbital/solar_array/solar_array.json',
      '/pa/units/sea/attack_sub/attack_sub.json',
      '/pa/units/sea/base_ship/base_ship.json',
      '/pa/units/sea/battleship/battleship.json',
      '/pa/units/sea/destroyer/destroyer.json',
      '/pa/units/sea/fabrication_ship/fabrication_ship.json',
      '/pa/units/sea/fabrication_ship_adv/fabrication_ship_adv.json',
      '/pa/units/sea/fabrication_sub/fabrication_sub.json',
      '/pa/units/sea/frigate/frigate.json',
      '/pa/units/sea/missile_ship/missile_ship.json',
      '/pa/units/sea/naval_factory/naval_factory.json',
      '/pa/units/sea/naval_factory_adv/naval_factory_adv.json',
      '/pa/units/sea/nuclear_sub/nuclear_sub.json',
      '/pa/units/sea/sea_mine/sea_mine.json',
      '/pa/units/sea/sea_scout/sea_scout.json',
      '/pa/units/sea/sonar/sonar.json',
      '/pa/units/sea/sonar_adv/sonar_adv.json',
      '/pa/units/sea/torpedo_launcher/torpedo_launcher.json',
      '/pa/units/sea/torpedo_launcher_adv/torpedo_launcher_adv.json'
                    ]);


                    var mods = [];

                    var comm = [
                        '/pa/units/commanders/base_commander/base_commander.json'
                    ];
                    var modUnit = function(unit) {
                        mods.push({
                            file: unit,
                            path: 'navigation.move_speed',
                            op: 'multiply',
                            value: 0.2
                        });
                        mods.push({
                            file: unit,
                            path: 'buildable_types',
                            op: 'replace',
                            value: 'CmdBuild | Factory & Land & Tank & Advanced | Factory & Advanced & Air | Naval & Structure & Advanced | Naval & Factory & Advanced | Land & Structure & Advanced - Factory | Factory & Advanced & Bot & Land | FabAdvBuild | FabBuild'
                        });
                        
                    };
                    _.forEach(comm, modUnit);

                    var fab_arm = [
                        '/pa/tools/commander_build_arm/commander_build_arm.json'
                    ];
                    var modArm = function(unit) {
                        mods.push({
                            file: unit,
                            path: 'construction_demand.metal',
                            op: 'multiply',
                            value: 2.0
                        });
                        mods.push({
                            file: unit,
                            path: 'max_range',
                            op: 'multiply',
                            value: 4.0
                        });
                    };
                    _.forEach(fab_arm, modArm);

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
